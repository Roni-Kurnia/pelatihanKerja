import { useParams, Link } from 'react-router-dom';

export default function MemberDetailPage({ members }) {
    const { id } = useParams();
    const member = members.find((m) => m.id === Number(id));

    // Penanganan aman bila ID tidak ditemukan
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

    // Pakai email dari form bila ada; kalau tidak, buat dari nama.
    // Regex /\s+/g mengganti SEMUA spasi (replace(' ', '.') hanya spasi pertama).
    const email =
        member.email ||
        `${member.name.trim().toLowerCase().replace(/\s+/g, '.')}@perusahaan.com`;

    return (
        <div className="profile-detail-container">
            <Link to="/" className="btn-back">&larr; Kembali ke Direktori Tim</Link>

            <div className="profile-card">
                <img src={member.avatar} alt={member.name} className="avatar-large" />
                <h2>{member.name}</h2>
                <p className="profile-role">{member.role}</p>

                <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
                    {isOnline ? '● Online' : '○ Offline'}
                </span>

                <p className="profile-email">📧 {email}</p>
                {member.bio && <p className="profile-bio">"{member.bio}"</p>}
                <span className="profile-stars">⭐ {member.stars} Bintang Apresiasi</span>
            </div>
        </div>
    );
}