import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  return (
    <div {...useBlockProps.save()}>
      <nav className="simple-navbar">
        <div className="nav-logo">{attributes.logo}</div>
        
        <button 
          className="nav-hamburger"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-links">
          {attributes.menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} target={item.newTab ? '_blank' : '_self'} rel={item.newTab ? 'noopener noreferrer' : undefined}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
