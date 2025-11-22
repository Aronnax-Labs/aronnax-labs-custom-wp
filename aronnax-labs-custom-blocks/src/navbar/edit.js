import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, ToggleControl } from '@wordpress/components';
import Navbar from './Navbar';

export default function Edit({ attributes, setAttributes }) {
  const { logo, menuItems } = attributes;

  const updateMenuItem = (index, field, value) => {
    const newItems = [...menuItems];
    newItems[index][field] = value;
    setAttributes({ menuItems: newItems });
  };

  const addMenuItem = () => {
    setAttributes({ menuItems: [...menuItems, { label: 'New Link', url: '#', newTab: false }] });
  };

  const removeMenuItem = (index) => {
    setAttributes({ menuItems: menuItems.filter((_, i) => i !== index) });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Navbar Settings">
          <TextControl
            label="Logo Text"
            value={logo}
            onChange={(value) => setAttributes({ logo: value })}
          />
        </PanelBody>
        <PanelBody title="Menu Items" initialOpen={true}>
          {menuItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd' }}>
              <TextControl
                label="Label"
                value={item.label}
                onChange={(value) => updateMenuItem(index, 'label', value)}
              />
              <TextControl
                label="URL"
                value={item.url}
                onChange={(value) => updateMenuItem(index, 'url', value)}
              />
              <ToggleControl
                label="Open in new tab"
                checked={item.newTab}
                onChange={(value) => updateMenuItem(index, 'newTab', value)}
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
      <div {...useBlockProps()}>
        <Navbar logo={logo} menuItems={menuItems} />
      </div>
    </>
  );
}
