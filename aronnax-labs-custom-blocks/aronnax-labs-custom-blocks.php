<?php
/**
 * Plugin Name: Aronnax Labs Custom Blocks
 * Description: Custom Gutenberg blocks for Aronnax Labs
 * Version: 1.0.0
 * Author: Aronnax Labs
 */

if (!defined('ABSPATH')) exit;

function aronnax_register_blocks() {
    $blocks = ['navbar'];
    
    foreach ($blocks as $block) {
        register_block_type(__DIR__ . "/build/$block");
    }
}
add_action('init', 'aronnax_register_blocks');
