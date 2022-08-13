import React from 'react'
import '../App.css';
import Icon from '../images/360713.png';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className='Navbar'>
        <img src={Icon} className='Logo' alt="blcakhole" />
        <ul className='ulist'>
            <li className='link'><Link to="/" className='alink'>Home</Link></li>
            <li className='link'><Link to="/videos" className='alink'>Videos</Link></li>
            <li className='link'><Link to="/about" className='alink'>About</Link></li>
            <li className='link'><Link to="/contact" className='alink'>Contact Us</Link></li>
            
         </ul>
    </div>
  )
}

export default Navbar