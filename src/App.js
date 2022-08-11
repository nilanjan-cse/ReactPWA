import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Home/>
      </header>
      
    </div>
  );
}

export default App;
