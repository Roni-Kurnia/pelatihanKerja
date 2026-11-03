import Counter from './components/counter';
import GreetingForm from './components/greetingForm';
import ProfileCard from './components/profilCard';
import SkillList from './components/SkillList';
import TeamDirectory from './components/TeamDirectory';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Aplikasi Modular saya</h1>
      {/* <GreetingForm /> */}
      {/* <Counter /> */}
      {/* <ProfileCard /> */}
      {/* <SkillList />`     */}
      <TeamDirectory />
    </div>
  );
}

export default App;