import { useState } from '@wordpress/element';

export default function Navbar({ logoImage, siteTitle, homeUrl, menuItems, backgroundColor, logoColor, menuColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    backgroundColor: backgroundColor || '#ffffff'
  };

  return (
    <nav className="simple-navbar" style={navStyle}>
      <a href={homeUrl || '/'} className="nav-logo" style={{ color: logoColor || '#333', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', outline: 'none' }}>
        {logoImage && <img src={logoImage} alt="Logo" style={{ height: '32px', width: 'auto' }} />}
        <span>{siteTitle}</span>
      </a>
      
      <button 
        className={`nav-hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        style={{ background: 'none' }}
      >
        <span style={{ backgroundColor: menuColor || '#666' }}></span>
        <span style={{ backgroundColor: menuColor || '#666' }}></span>
        <span style={{ backgroundColor: menuColor || '#666' }}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noopener noreferrer' : undefined} style={{ color: menuColor || '#666', outline: 'none' }}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
