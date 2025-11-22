import React, { useState } from 'react';
import './simple-navbar.css';

export default function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="simple-navbar">
      <div className="nav-logo">Logo</div>
      
      <button 
        className={`nav-hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
