<?php
/**
 * Plugin Name: Aronnax Labs Custom Blocks
 * Description: Custom Gutenberg blocks for easy site building
 * Version: 1.0.0
 * Author: Aronnax Labs
 */

if (!defined('ABSPATH')) exit;

function aronnax_register_blocks() {
    register_block_type(__DIR__ . '/build/navbar');
}
add_action('init', 'aronnax_register_blocks');
