import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import './style.css';

registerBlockType('aronnax/navbar', {
    title: 'Navbar',
    icon: 'menu',
    category: 'aronnax-blocks',
    attributes: {
        logo: { type: 'string', default: 'Logo' },
        menuItems: { 
            type: 'array', 
            default: [
                { text: 'Home', url: '#' },
                { text: 'About', url: '#' },
                { text: 'Services', url: '#' },
                { text: 'Contact', url: '#' }
            ]
        }
    },
    edit: ({ attributes, setAttributes }) => {
        const updateMenuItem = (index, field, value) => {
            const newItems = [...attributes.menuItems];
            newItems[index][field] = value;
            setAttributes({ menuItems: newItems });
        };

        const addMenuItem = () => {
            setAttributes({ menuItems: [...attributes.menuItems, { text: 'New Item', url: '#' }] });
        };

        const removeMenuItem = (index) => {
            const newItems = attributes.menuItems.filter((_, i) => i !== index);
            setAttributes({ menuItems: newItems });
        };

        return (
            <div>
                <InspectorControls>
                    <PanelBody title="Logo Settings">
                        <TextControl
                            label="Logo Text"
                            value={attributes.logo}
                            onChange={(value) => setAttributes({ logo: value })}
                        />
                    </PanelBody>
                    <PanelBody title="Menu Items" initialOpen={true}>
                        {attributes.menuItems.map((item, index) => (
                            <div key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                                <TextControl
                                    label="Link Text"
                                    value={item.text}
                                    onChange={(value) => updateMenuItem(index, 'text', value)}
                                />
                                <TextControl
                                    label="URL"
                                    value={item.url}
                                    onChange={(value) => updateMenuItem(index, 'url', value)}
                                />
                                <Button isDestructive onClick={() => removeMenuItem(index)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button isPrimary onClick={addMenuItem}>
                            Add Menu Item
                        </Button>
                    </PanelBody>
                </InspectorControls>
                <nav className="aronnax-navbar">
                    <div className="navbar-logo">{attributes.logo}</div>
                    <button className="navbar-toggle">☰</button>
                    <ul className="navbar-menu">
                        {attributes.menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    },
    save: ({ attributes }) => {
        return (
            <nav className="aronnax-navbar">
                <div className="navbar-logo">{attributes.logo}</div>
                <button 
                    className="navbar-toggle"
                    onClick={(e) => e.target.nextElementSibling.classList.toggle('active')}
                >
                    ☰
                </button>
                <ul className="navbar-menu">
                    {attributes.menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
});
