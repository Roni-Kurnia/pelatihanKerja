// Komponen Anak menerima props terdestruktur & callback
export default function TeamCard({
  id, name, role, avatar, status, stars = 0,
  onToggleStatus, onAddStar
}) {
  return (
    <div className="team-card">
      <img src={avatar} alt={name} className="card-avatar" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>

        <div className="card-badges">
          <span className={`badge ${status === 'Online' ? 'badge-online' : 'badge-offline'}`}>
            • {status}
          </span>
          <span className="badge-stars">⭐ {stars} Bintang</span>
        </div>

        <div className="card-actions">
          {/* TODO 1: Pasang onClick onAddStar(id) */}
          <button className="btn-star" onClick={() => /* TODO 1: panggil onAddStar(id) */}>
            ⭐ Beri Bintang
          </button>

          {/* TODO 2: Pasang onClick onToggleStatus(id) */}
          <button className="btn-status-toggle" onClick={() => /* TODO 2: panggil onToggleStatus(id) */}>
            Ubah ke {status === 'Online' ? 'Offline' : 'Online'}
          </button>
        </div>
      </div>
    </div>
  );
}