import { useParams, Link } from 'react-router-dom';

export default function MemberDetailPage({ members }) {
    const { id } = useParams();
    const member = members.find((m) => m.id === Number(id));

    // Penanganan aman bila data ID tidak ditemukan
    if (!member) {
        return (
            <div className="not-found-container">
                <h3>Anggota Tidak Ditemukan!</h3>
                <p>Data dengan ID #{id} tidak terdaftar di direktori.</p>
                <Link to="/" className="btn-primary">&larr; Kembali ke Direktori</Link>
            </div>
        );
    }

    const isOnline = member.status === 'Online';
    return (
        <div className="profile-detail-container">
            <Link to="/" className="btn-back">&larr; Kembali ke Direktori Tim</Link>
            
            <div className="profile-card">
                <img src={member.avatar} alt={member.name} className="avatar-large" />
                <h2>{member.name}</h2>
                <p className="profile-role">{member.role}</p>

                <div style={{ marginBottom: '14px' }}>
                    <span className={isOnline ? 'badge-on' : 'badge-off'}>
                        {isOnline ? '● Online' : '○ Offline'}
                    </span>
                </div>

                <p className="profile-email">📧 {member.name.toLowerCase().replace(' ', '.')}@perusahaan.com</p>
                <p className="profile-bio">"{member.bio}"</p>
                <span className="profile-stars">⭐ {member.stars} Bintang Apresiasi</span>
            </div>
        </div>
    );
}
