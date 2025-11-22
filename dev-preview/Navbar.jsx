import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logo, setLogo] = useState('Logo');
  const [menuItems, setMenuItems] = useState([
    { text: 'Home', url: '#' },
    { text: 'About', url: '#' },
    { text: 'Services', url: '#' },
    { text: 'Contact', url: '#' }
  ]);

  return (
    <nav className="aronnax-navbar">
      <div className="navbar-logo">{logo}</div>
      <button 
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
