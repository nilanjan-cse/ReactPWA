// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route } from "react-router-dom";
import Videos from './components/Videos'
function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <header className="App-header">
        
        <Routes>
        
          <Route index element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
        
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
