function SkillList() {
    const skils = ['HTML', 'CSS', 'JAVASCRIPT', 'NODE', 'REACT', 'GIT']
    return (
        <div className="card">
            <h3>Daftar Materi Keahlian</h3>
            <ul style={{ textAlign: 'left', padding: '20px' }}>
                {skils.map((item, index) => (
                    <li key={index}>{item}</li>
                ))};

            </ul>
        </div>
    );
}

export default SkillList;