import { useState } from 'react';
import TeamCard from './TeamCard';

// Data awal anggota tim (dilengkapi stars)
const initialMembers = [
  { id: 1, name: 'Budi Santoso', role: 'Frontend Dev', status: 'Online', stars: 2, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Siti Rahma', role: 'UI/UX Designer', status: 'Offline', stars: 5, avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Ahmad Fauzi', role: 'Backend Engineer', status: 'Online', stars: 1, avatar: 'https://i.pravatar.cc/150?u=3' }
];

export default function TeamDirectory() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  // Hitung statistik (Warisan Modul 1.3)
  const totalMembers = members.length;
  const onlineMembers = members.filter(m => m.status === 'Online').length;
  const offlineMembers = totalMembers - onlineMembers;

  // TODO 3: Implementasi handleToggleStatus(id) via setMembers & .map()
  const handleToggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: m.status === 'Online' ? 'Offline' : 'Online' } : m
      )
    );
  };

  // TODO 4: Implementasi handleAddStar(id) via setMembers & .map()
  const handleAddStar = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, stars: m.stars + 1 } : m
      )
    );
  };

  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="directory-container">
      {/* Bar Statistik Modul 1.3 & Input Search ... */}