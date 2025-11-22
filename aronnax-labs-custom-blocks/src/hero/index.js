import { registerBlockType } from '@wordpress/blocks';
import { 
	useBlockProps, 
	RichText, 
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	Button, 
	TextControl,
	SelectControl 
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import './style.css';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: ({ attributes, setAttributes }) => {
		const { 
			tagline, 
			heading, 
			description, 
			ctaText, 
			ctaUrl, 
			imageUrl, 
			imageId,
			imageAlt,
			buttonFontFamily,
			buttonFontSize,
			buttonFontWeight
		} = attributes;

		const buttonStyle = {
			fontFamily: buttonFontFamily,
			fontSize: buttonFontSize,
			fontWeight: buttonFontWeight
		};

		const blockProps = useBlockProps({
			className: 'aronnax-hero'
		});

		const onSelectImage = (media) => {
			setAttributes({
				imageUrl: media.url,
				imageId: media.id,
				imageAlt: media.alt || ''
			});
		};

		const onRemoveImage = () => {
			setAttributes({
				imageUrl: '',
				imageId: 0,
				imageAlt: ''
			});
		};

		const settings = useSelect((select) => {
			return select('core/block-editor').getSettings();
		}, []);

		const themeFonts = settings?.__experimentalFeatures?.typography?.fontFamilies?.theme || [];
		const defaultFonts = settings?.__experimentalFeatures?.typography?.fontFamilies?.default || [];
		const customFonts = settings?.__experimentalFeatures?.typography?.fontFamilies?.custom || [];

		const allFonts = [...themeFonts, ...defaultFonts, ...customFonts];

		const systemFonts = [
			{ name: 'System Sans', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
			{ name: 'System Serif', fontFamily: 'Georgia, "Times New Roman", serif' },
			{ name: 'System Mono', fontFamily: 'Consolas, Monaco, monospace' }
		];

		const fontFamilyOptions = allFonts.length > 0 ? allFonts : systemFonts;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('CTA Settings', 'aronnax-labs-custom-blocks')} initialOpen={false}>
						<TextControl
							label={__('Button URL', 'aronnax-labs-custom-blocks')}
							value={ctaUrl}
							onChange={(value) => setAttributes({ ctaUrl: value })}
							help={__('Enter the URL for the CTA button', 'aronnax-labs-custom-blocks')}
						/>
						<SelectControl
							label={__('Button Font Family', 'aronnax-labs-custom-blocks')}
							value={buttonFontFamily}
							onChange={(value) => setAttributes({ buttonFontFamily: value })}
							options={[
								{ label: 'Default', value: '' },
								...fontFamilyOptions.map(font => ({
									label: font.name || font.label,
									value: font.fontFamily || font.value
								}))
							]}
						/>
						<TextControl
							label={__('Button Font Size', 'aronnax-labs-custom-blocks')}
							value={buttonFontSize}
							onChange={(value) => setAttributes({ buttonFontSize: value })}
							help={__('e.g., 16px, 1rem', 'aronnax-labs-custom-blocks')}
						/>
						<SelectControl
							label={__('Button Font Weight', 'aronnax-labs-custom-blocks')}
							value={buttonFontWeight}
							onChange={(value) => setAttributes({ buttonFontWeight: value })}
							options={[
								{ label: 'Default', value: '' },
								{ label: 'Normal (400)', value: '400' },
								{ label: 'Medium (500)', value: '500' },
								{ label: 'Semi-Bold (600)', value: '600' },
								{ label: 'Bold (700)', value: '700' }
							]}
						/>
					</PanelBody>
					<PanelBody title={__('Image Settings', 'aronnax-labs-custom-blocks')}>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								value={imageId}
								render={({ open }) => (
									<div>
										{imageUrl ? (
											<>
												<img 
													src={imageUrl} 
													alt={imageAlt}
													style={{ maxWidth: '100%', marginBottom: '10px' }}
												/>
												<Button 
													onClick={onRemoveImage} 
													isDestructive
												>
													{__('Remove Image', 'aronnax-labs-custom-blocks')}
												</Button>
											</>
										) : (
											<Button 
												onClick={open} 
												variant="secondary"
											>
												{__('Upload Image', 'aronnax-labs-custom-blocks')}
											</Button>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
						{imageUrl && (
							<TextControl
								label={__('Image Alt Text', 'aronnax-labs-custom-blocks')}
								value={imageAlt}
								onChange={(value) => setAttributes({ imageAlt: value })}
								style={{ marginTop: '10px' }}
							/>
						)}
					</PanelBody>
				</InspectorControls>

				<div {...blockProps}>
					<div className="aronnax-hero__container">
						<div className="aronnax-hero__content">
							<RichText
								tagName="p"
								className="aronnax-hero__tagline"
								value={tagline}
								onChange={(value) => setAttributes({ tagline: value })}
								placeholder={__('Enter tagline...', 'aronnax-labs-custom-blocks')}
							/>
							<RichText
								tagName="h1"
								className="aronnax-hero__heading"
								value={heading}
								onChange={(value) => setAttributes({ heading: value })}
								placeholder={__('Enter heading...', 'aronnax-labs-custom-blocks')}
							/>
							<RichText
								tagName="p"
								className="aronnax-hero__description"
								value={description}
								onChange={(value) => setAttributes({ description: value })}
								placeholder={__('Enter description...', 'aronnax-labs-custom-blocks')}
							/>
							<RichText
								tagName="span"
								className="aronnax-hero__cta-button"
								value={ctaText}
								onChange={(value) => setAttributes({ ctaText: value })}
								placeholder={__('Button text...', 'aronnax-labs-custom-blocks')}
								style={buttonStyle}
							/>
						</div>
						<div className="aronnax-hero__image">
							{imageUrl ? (
								<img src={imageUrl} alt={imageAlt} />
							) : (
								<div className="aronnax-hero__image-placeholder">
									<p>{__('Upload an image from the sidebar →', 'aronnax-labs-custom-blocks')}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</>
		);
	},

	save: ({ attributes }) => {
		const { 
			tagline, 
			heading, 
			description, 
			ctaText, 
			ctaUrl, 
			imageUrl,
			imageAlt,
			buttonFontFamily,
			buttonFontSize,
			buttonFontWeight
		} = attributes;

		const buttonStyle = {
			fontFamily: buttonFontFamily,
			fontSize: buttonFontSize,
			fontWeight: buttonFontWeight
		};

		const blockProps = useBlockProps.save({
			className: 'aronnax-hero'
		});

		return (
			<div {...blockProps}>
				<div className="aronnax-hero__container">
					<div className="aronnax-hero__content">
						<RichText.Content
							tagName="p"
							className="aronnax-hero__tagline"
							value={tagline}
						/>
						<RichText.Content
							tagName="h1"
							className="aronnax-hero__heading"
							value={heading}
						/>
						<RichText.Content
							tagName="p"
							className="aronnax-hero__description"
							value={description}
						/>
						<a 
							href={ctaUrl} 
							className="aronnax-hero__cta-button"
							style={buttonStyle}
						>
							<RichText.Content
								tagName="span"
								value={ctaText}
							/>
						</a>
					</div>
					{imageUrl && (
						<div className="aronnax-hero__image">
							<img src={imageUrl} alt={imageAlt} />
						</div>
					)}
				</div>
			</div>
		);
	}
});
