import { useState } from 'react';

function ProfileCard({ name = 'Roni Kurnia' }) {
    const [profesi, setProfesi] = useState('');
    const [likes, setLikes] = useState(0);
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="profile-card">
            {/* Avatar */}
            <div className="profile-avatar">👤</div>

            <h2 className="profile-title">Kartu Profil</h2>

            {/* Nama & status */}
            <div className="author">
                <h3>{name}</h3>
                <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
                    {isOnline ? '● Sedang aktif' : '○ Offline'}
                </span>
            </div>

            <button onClick={() => setIsOnline((prev) => !prev)}>
                Ganti status
            </button>

            {/* Input pekerjaan */}
            <div className="input-group">
                <label htmlFor="profesiInput" className="input-label">
                    Input Pekerjaan
                </label>
                <input
                    id="profesiInput"
                    type="text"
                    value={profesi}
                    onChange={(e) => setProfesi(e.target.value)}
                    placeholder="Contoh: Web Developer..."
                    className="profile-input"
                />
            </div>

            {/* Hasil input */}
            <div className="result-box">
                <span className="result-label">Pekerjaan:</span>
                <span className="result-value">
                    {profesi.trim() ? profesi : <em>Belum diisi</em>}
                </span>
            </div>

            {/* Tombol suka */}
            <button onClick={() => setLikes((prev) => prev + 1)} className="like-button">
                <span className="heart-icon">❤️</span> Suka ({likes})
            </button>
        </div>
    );
}

export default ProfileCard;