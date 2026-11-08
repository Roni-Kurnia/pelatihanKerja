function TeamCard({ id, name, role, avatar, status, onToggleStatus }) {
    return (
    <div className="team-card">
        <img src={avatar} alt={name} className="card-avatar" />

        <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>

        <div style={{ marginBottom: '14px' }}>
            <span className={`badge ${status === 'Online' ? 'badge-online' : 'badge-offline'}`}>
            • {status}
            </span>
        </div>

        <div className="card-actions">
            <button
            className="btn-status-toggle"
            onClick={() => onToggleStatus(id)}
            >
            Ubah ke {status === 'Online' ? 'Offline' : 'Online'}
            </button>
        </div>
        </div>
    </div>
    );
}

export default TeamCard;