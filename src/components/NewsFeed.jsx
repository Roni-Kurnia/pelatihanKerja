import { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';

// Daftar sumber berita yang didukung
const SOURCES = [
  { id: 'kompas', label: 'Kompas' },
  { id: 'cnn', label: 'CNN' }
];

function NewsFeed() {
  // TAHAP 1: state pemilih sumber berita
  const [source, setSource] = useState('kompas');

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Penanda permintaan terbaru: mencegah respons lama menimpa data baru
  // saat pengguna berpindah sumber dengan cepat.
  const latestRequest = useRef(0);

  const sourceLabel = SOURCES.find((s) => s.id === source)?.label;

  const fetchNews = async () => {
    const requestId = ++latestRequest.current;
    setIsLoading(true);
    setError(null);
    try {
      // TAHAP 2: URL dinamis mengikuti state `source`
      const url = `https://api.siputzx.my.id/api/berita/${source}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const json = await res.json();

      // TAHAP 3: normalisasi skema (CNN berbeda dari Kompas)
      const raw = Array.isArray(json.data) ? json.data : [];
      const clean = raw.map((d) => ({
        ...d,
        image: d.image || d.image_thumbnail,
        date: d.date || d.time,
        category: d.category || 'CNN'
      }));

      if (requestId === latestRequest.current) setNews(clean);
    } catch (err) {
      if (requestId === latestRequest.current) {
        setError(err.message || 'Gagal mengambil berita terkini.');
      }
    } finally {
      if (requestId === latestRequest.current) setIsLoading(false);
    }
  };

  // TAHAP 4: re-fetch otomatis setiap `source` berubah
  useEffect(() => {
    fetchNews();
  }, [source]);

  return (
    <div className="news-container">
      <div className="news-toolbar">
        <div>
          <h2>Berita Terkini {sourceLabel}</h2>
          <p>Menampilkan {news.length} artikel dari API Siputzx</p>
        </div>
        <button className="btn-refresh" onClick={fetchNews} disabled={isLoading}>
          {isLoading ? '⏳ Memuat...' : '🔄 Segarkan Berita'}
        </button>
      </div>

      {/* Tombol pemilih sumber */}
      <div className="source-switch">
        {SOURCES.map((s) => (
          <button
            key={s.id}
            className={`source-btn ${source === s.id ? 'active' : ''}`}
            onClick={() => setSource(s.id)}
            disabled={isLoading && source === s.id}
          >
            {s.label}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="spinner-box">
          <div className="css-spinner"></div>
          <p>Mengunduh berita {sourceLabel} terbaru...</p>
        </div>
      )}

      {error && !isLoading && (
        <div className="error-banner">
          <h5>Terjadi Kesalahan Jaringan</h5>
          <p>{error}</p>
          <button onClick={fetchNews}>Coba Lagi</button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="news-grid">
          {news.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;