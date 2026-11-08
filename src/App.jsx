import Counter from './components/counter';
import GreetingForm from './components/greetingForm';
import ProfileCard from './components/profilCard';
import SkillList from './components/SkillList';
import TeamDirectory from './components/TeamDirectory';
import NewsFeed from './components/NewsFeed';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <header className="main-header">
        <h1>Portal Manajemen & Informasi Tim</h1>
        <p>Aplikasi Terpadu Pelatihan Fullstack Node.js & React</p>

        <nav className="tab-bar">
          <button
            className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            👥 Anggota Tim
          </button>
          <button
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 Berita Terkini
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'team' ? <TeamDirectory /> : <NewsFeed />}
      </main>
    </div>
  );  
}

export default App;