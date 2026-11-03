import Counter from './components/counter';
import GreetingForm from './components/greetingForm';
import ProfileCard from './components/profilCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Aplikasi Modular saya</h1>
      <GreetingForm />
      <Counter />
      <ProfileCard />
    </div>
  );
}

export default App;