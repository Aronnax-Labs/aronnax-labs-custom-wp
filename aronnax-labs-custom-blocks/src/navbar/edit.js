import { useBlockProps, InspectorControls, PanelColorSettings, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, ToggleControl, RangeControl } from '@wordpress/components';
import Navbar from './Navbar';

export default function Edit({ attributes, setAttributes }) {
  const { logoImage, siteTitle, homeUrl, backgroundColor, logoColor, menuColor, borderWidth, borderColor, hamburgerColor, showExternalIcon } = attributes;
  const menuItems = attributes.menuItems || [
    {"label": "Home", "url": "#", "newTab": false},
    {"label": "About", "url": "#", "newTab": false},
    {"label": "Services", "url": "#", "newTab": false},
    {"label": "Contact", "url": "#", "newTab": false}
  ];

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
        <PanelColorSettings
          title="Colors"
          colorSettings={[
            {
              value: backgroundColor,
              onChange: (value) => setAttributes({ backgroundColor: value }),
              label: 'Background Color'
            },
            {
              value: logoColor,
              onChange: (value) => setAttributes({ logoColor: value }),
              label: 'Logo Color'
            },
            {
              value: menuColor,
              onChange: (value) => setAttributes({ menuColor: value }),
              label: 'Menu Color'
            },
            {
              value: borderColor,
              onChange: (value) => setAttributes({ borderColor: value }),
              label: 'Border Color'
            },
            {
              value: hamburgerColor,
              onChange: (value) => setAttributes({ hamburgerColor: value }),
              label: 'Hamburger Icon Color'
            }
          ]}
        />
        <PanelBody title="Border">
          <RangeControl
            label="Border Width"
            value={borderWidth}
            onChange={(value) => setAttributes({ borderWidth: value })}
            min={0}
            max={10}
          />
        </PanelBody>
        <PanelBody title="Navbar Settings">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ logoImage: media.url })}
              allowedTypes={['image']}
              value={logoImage}
              render={({ open }) => (
                <div>
                  <Button onClick={open} variant="secondary">
                    {logoImage ? 'Change Logo Image' : 'Upload Logo Image'}
                  </Button>
                  {logoImage && (
                    <div style={{ marginTop: '8px' }}>
                      <img src={logoImage} alt="Logo" style={{ maxWidth: '100px', display: 'block', marginBottom: '8px' }} />
                      <Button isDestructive onClick={() => setAttributes({ logoImage: '' })}>
                        Remove Image
                      </Button>
                    </div>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label="Site Title"
            value={siteTitle}
            onChange={(value) => setAttributes({ siteTitle: value })}
          />
          <TextControl
            label="Home URL"
            value={homeUrl}
            onChange={(value) => setAttributes({ homeUrl: value })}
          />
        </PanelBody>
        <PanelBody title="Menu Items" initialOpen={true}>
          <ToggleControl
            label="Show arrow icon for external links"
            checked={showExternalIcon}
            onChange={(value) => setAttributes({ showExternalIcon: value })}
            help="Display an arrow icon next to links that open in a new tab"
          />
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
        <Navbar logoImage={logoImage} siteTitle={siteTitle} homeUrl={homeUrl} menuItems={menuItems} backgroundColor={backgroundColor} logoColor={logoColor} menuColor={menuColor} borderWidth={borderWidth} borderColor={borderColor} hamburgerColor={hamburgerColor} showExternalIcon={showExternalIcon} />
      </div>
    </>
  );
}
