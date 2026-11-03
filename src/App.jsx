import counter from './components/counter';
import greeting from './components/greetingForm';
import './App.css';

function App() {

  const [hitung, setHitung] = useState(0);

  function handClik() {
    alert("HALLO tombol berhasil di clik!")
  }

  return (
    <div className="container">
      <h1>Aplikasi Modular saya</h1>
      <greeting />
      <counter />
    </div>
  );
}

export default App;