import './App.css';
import Navbar from './components/navbar/Navbar';
// import Hero from './components/Hero';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <header className="App-header">
        {/* <Hero /> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
