import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <header className="App-header">
        <Hero />
      </header>
    </div>
  );
}

export default App;
