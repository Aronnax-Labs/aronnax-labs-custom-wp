import { useState } from '@wordpress/element';

export default function Navbar({ logoImage, siteTitle, homeUrl, menuItems, backgroundColor, logoColor, menuColor, borderWidth, borderColor, hamburgerColor, showExternalIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    backgroundColor: backgroundColor || '#ffffff',
    borderBottomWidth: `${borderWidth || 1}px`,
    borderBottomColor: borderColor || '#e0e0e0'
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
        <span style={{ backgroundColor: hamburgerColor || '#333' }}></span>
        <span style={{ backgroundColor: hamburgerColor || '#333' }}></span>
        <span style={{ backgroundColor: hamburgerColor || '#333' }}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noopener noreferrer' : undefined} style={{ color: menuColor || '#666', outline: 'none' }}>
              {item.label}
              {showExternalIcon && item.newTab && <span style={{ marginLeft: '4px' }}>↗</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
