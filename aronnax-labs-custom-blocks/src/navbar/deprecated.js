import { useBlockProps } from '@wordpress/block-editor';

const deprecated = [
  {
    attributes: {
      logoImage: { type: 'string', default: '' },
      siteTitle: { type: 'string', default: 'Site Title' },
      homeUrl: { type: 'string', default: '/' },
      menuItems: { type: 'array', default: [] },
      backgroundColor: { type: 'string', default: '#ffffff' },
      logoColor: { type: 'string', default: '#333333' },
      menuColor: { type: 'string', default: '#666666' },
      borderWidth: { type: 'number', default: 1 },
      borderColor: { type: 'string', default: '#e0e0e0' },
      hamburgerColor: { type: 'string', default: '#333333' },
      showExternalIcon: { type: 'boolean', default: false }
    },
    save({ attributes }) {
      const menuItems = attributes.menuItems || [];
      const navStyle = {
        backgroundColor: attributes.backgroundColor,
        borderBottomWidth: `${attributes.borderWidth}px`,
        borderBottomColor: attributes.borderColor
      };

      return (
        <div {...useBlockProps.save()}>
          <nav className="simple-navbar" style={navStyle}>
            <a href={attributes.homeUrl} className="nav-logo" style={{ color: attributes.logoColor, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', outline: 'none' }}>
              {attributes.logoImage && <img src={attributes.logoImage} alt="Logo" style={{ height: '32px', width: 'auto' }} />}
              <span>{attributes.siteTitle}</span>
            </a>
            
            <button 
              className="nav-hamburger"
              aria-label="Menu"
              style={{ background: 'none' }}
            >
              <span style={{ backgroundColor: attributes.hamburgerColor }}></span>
              <span style={{ backgroundColor: attributes.hamburgerColor }}></span>
              <span style={{ backgroundColor: attributes.hamburgerColor }}></span>
            </button>

            <ul className="nav-links">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noopener noreferrer' : undefined} style={{ color: attributes.menuColor, outline: 'none' }}>
                    {item.label}
                    {attributes.showExternalIcon && item.newTab && <span style={{ marginLeft: '4px' }}>↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      );
    }
  }
];

export default deprecated;
