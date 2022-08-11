import React from 'react'
import '../App.css';
import Icon from '../images/360713.png';
function Navbar() {
  return (
    <div className='Navbar'>
        <img src={Icon} className='Logo' />
        <ul className='ulist'>
            <li className='link'><a className='alink' href="#">Home</a></li>
            <li className='link'><a className='alink' href="#">About</a></li>
            <li className='link'><a className='alink' href="#">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar