import { useState } from "react";

const daftarAnggota = [
    { id: '1', nama: 'Dika', peran: 'Front End', isOnline: true },
    { id: '2', nama: 'Roni', peran: 'Back End', isOnline: false },
    { id: '3', nama: 'Ade', peran: 'UI Designer', isOnline: true }
];

function TeamDirectory() {
    const [hanyaOnline, setHanyaOnline] = useState(false);
    const dataTampil = hanyaOnline
        ? daftarAnggota.filter((i) => i.isOnline)
        : daftarAnggota;

    return (
        <div className="team-container">
            <h2>Direktori Tim Proyek</h2>
            <button onClick={() => setHanyaOnline(!hanyaOnline)}>
                {hanyaOnline ? 'Tampilkan Semua' : 'Filter Hanya Online'}
            </button>
            {dataTampil.map((anggota) => (
                <div className="card-item" key={anggota.id}>
                    <h4>{anggota.nama}</h4>
                    <p>{anggota.peran}</p>
                    <span style={{color: anggota.isOnline ? '#16a34a' : '#64784a'}}>
                        {anggota.isOnline ? 'Online' : 'Offline'}
                    </span>
                </div>
            ))}
            
        </div>
    );
}

export default TeamDirectory;