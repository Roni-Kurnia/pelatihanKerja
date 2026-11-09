import { Link } from 'react-router-dom';

// Komponen anak: hanya menampilkan data & memanggil callback dari induk.
// Props sesuai pemakaian di TeamPage: member, onToggle, onGiveStar.
export default function TeamCard({ member, onToggle, onGiveStar }) {
  const { id, name, role, bio, avatar, status, stars = 0 } = member;
  const isOnline = status === 'Online';

  return (
    <div className="team-card">
      <img src={avatar} alt={name} className="card-avatar" />

      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
        {bio && <p className="card-bio">"{bio}"</p>}

        <div className="card-badges">
          <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
            {isOnline ? '●' : '○'} {status}
          </span>
          <span className="badge-stars">⭐ {stars} Bintang</span>
        </div>

        <div className="card-actions">
          <button className="btn-star" onClick={() => onGiveStar(id)}>
            ⭐ Beri Bintang
          </button>
          <button className="btn-status-toggle" onClick={() => onToggle(id)}>
            Ubah ke {isOnline ? 'Offline' : 'Online'}
          </button>
        </div>

        {/* Tautan ke halaman profil: /member/:id */}
        <Link to={`/member/${id}`} className="btn-view-profile">
          Lihat Profil →
        </Link>
      </div>
    </div>
  );
}