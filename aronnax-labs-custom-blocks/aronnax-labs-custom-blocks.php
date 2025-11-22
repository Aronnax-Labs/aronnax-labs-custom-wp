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

function aronnax_enqueue_frontend_scripts() {
    $asset_file = __DIR__ . '/build/navbar/view/index.asset.php';
    $asset = file_exists($asset_file) ? require($asset_file) : array('dependencies' => array(), 'version' => '1.0.0');
    
    wp_enqueue_script(
        'aronnax-navbar-view',
        plugins_url('build/navbar/view/index.js', __FILE__),
        $asset['dependencies'],
        $asset['version'],
        true
    );
}
add_action('wp_enqueue_scripts', 'aronnax_enqueue_frontend_scripts');
