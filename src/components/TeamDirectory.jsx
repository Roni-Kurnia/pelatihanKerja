import { useState } from 'react';
import TeamCard from './TeamCard';

// Data awal anggota tim
const initialMembers = [
  { id: 1, name: 'Budi Santoso', role: 'Frontend Dev', status: 'Online', stars: 2, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Siti Rahma', role: 'UI/UX Designer', status: 'Offline', stars: 5, avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Ahmad Fauzi', role: 'Backend Engineer', status: 'Online', stars: 1, avatar: 'https://i.pravatar.cc/150?u=3' }
];

export default function TeamDirectory() {
  // Satu sumber kebenaran: seluruh data anggota hidup di sini (lifting state up)
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  // Statistik dihitung dari `members` (bukan dari hasil filter),
  // jadi selalu akurat meski pencarian sedang aktif.
  const totalMembers = members.length;
  const onlineMembers = members.filter((m) => m.status === 'Online').length;
  const offlineMembers = totalMembers - onlineMembers;

  // Callback untuk anak: ubah status kehadiran (immutable)
  const handleToggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: m.status === 'Online' ? 'Offline' : 'Online' }
          : m
      )
    );
  };

  // Callback untuk anak: tambah bintang (immutable)
  const handleAddStar = (id) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, stars: m.stars + 1 } : m))
    );
  };

  // Filter hanya mempengaruhi tampilan, tidak mengubah state `members`
  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="directory-container">
      <h2 className="directory-title">Daftar Anggota Tim Developer</h2>

      {/* Bar Statistik */}
      <div className="stats-bar">
        <div className="stat-box">
          <div className="stat-num">{totalMembers}</div>
          <div className="stat-label">Total Members</div>
        </div>
        <div className="stat-box">
          <div className="stat-num online">{onlineMembers}</div>
          <div className="stat-label">Online</div>
        </div>
        <div className="stat-box">
          <div className="stat-num offline">{offlineMembers}</div>
          <div className="stat-label">Offline</div>
        </div>
      </div>

      {/* Live Search */}
      <input
        type="text"
        placeholder="Cari nama anggota..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Grid kartu + empty state */}
      <div className="team-grid">
        {filteredMembers.length === 0 ? (
          <div className="empty-state">
            ⚠️ Tidak ada anggota tim yang cocok dengan kata kunci "{searchTerm}".
          </div>
        ) : (
          filteredMembers.map((member) => (
            <TeamCard
              key={member.id}
              {...member}
              onToggleStatus={handleToggleStatus}
              onAddStar={handleAddStar}
            />
          ))
        )}
      </div>
    </div>
  );
}