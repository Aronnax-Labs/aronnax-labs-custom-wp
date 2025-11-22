import { useState } from '@wordpress/element';

export default function Navbar({ logo, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="simple-navbar">
      <div className="nav-logo">{logo}</div>
      
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
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noopener noreferrer' : undefined}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
