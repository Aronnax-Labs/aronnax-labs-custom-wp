import { useBlockProps } from '@wordpress/block-editor';
import Navbar from './Navbar';

export default function Edit({ attributes }) {
  return (
    <div {...useBlockProps()}>
      <Navbar logo={attributes.logo} menuItems={attributes.menuItems} />
    </div>
  );
}
