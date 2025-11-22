import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './editor.scss';
import './style.scss';

registerBlockType('aronnax/navbar', {
  edit: Edit,
  save,
  deprecated
});
