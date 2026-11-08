// src/components/TeamDirectory.jsx (Bagian 1: State & Logika Bisnis)
import { useState } from 'react';
import TeamCard from './TeamCard';

function TeamDirectory() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Budi Santoso', role: 'Frontend Dev', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Siti Rahma', role: 'UI/UX Designer', status: 'Offline', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Ahmad Fauzi', role: 'Backend Engineer', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=3' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Kalkulasi Widget 3-Card Statistik (Hasil Tugas Modul 1.3 - Desain Tetap Utuh)
  const totalMembers = members.length;
  const onlineMembers = members.filter((n) => n.status === 'Online').length;
  const offlineMembers = totalMembers - onlineMembers;

  // 2. Handler Lifting State Up: Toggle Status Kehadiran
  const handleToggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: m.status === 'Online' ? 'Offline' : 'Online' } : m
      )
    );
  };

  // 3. Filter Pencarian Anggota Tim Realtime
  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
  <div className="directory-container">
    <h2 className="directory-title">Daftar Anggota Tim Developer</h2>

    {/* 1. Widget 3-Card Statistik (Hasil Tugas Modul 1.3 - Desain Tetap Utuh) */}
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

    {/* 2. Live Search Bar */}
    <input
      type="text"
      placeholder="Cari nama anggota..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />

    {/* 3. Grid Kartu Anggota dengan Penanganan Empty State */}
    <div className="team-grid">
      {filteredMembers.length === 0 ? (
        <div className="empty-state">
          ⚠️ Tidak ada anggota tim yang cocok dengan kata kunci "{searchTerm}".
        </div>
      ) : (
        filteredMembers.map((member) => (
          <TeamCard key={member.id} {...member} onToggleStatus={handleToggleStatus} />
        ))
      )}
    </div>
  </div>
);
}

export default TeamDirectory;


