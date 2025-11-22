<?php
$logo_image = $attributes['logoImage'] ?? '';
$site_title = $attributes['siteTitle'] ?? 'Site Title';
$home_url = $attributes['homeUrl'] ?? '/';
$menu_items = $attributes['menuItems'] ?? [];

// WordPress sometimes converts arrays to objects, so we need to ensure it's an array
if (is_object($menu_items)) {
    $menu_items = array_values((array)$menu_items);
} elseif (!is_array($menu_items)) {
    $menu_items = [];
}

echo '<script>console.log("Menu Items After Fix:", ' . json_encode($menu_items) . ');</script>';
$bg_color = $attributes['backgroundColor'] ?? '#ffffff';
$logo_color = $attributes['logoColor'] ?? '#333333';
$menu_color = $attributes['menuColor'] ?? '#666666';
$border_width = $attributes['borderWidth'] ?? 1;
$border_color = $attributes['borderColor'] ?? '#e0e0e0';
$hamburger_color = $attributes['hamburgerColor'] ?? '#333333';

$nav_style = sprintf('background-color: %s; border-bottom-width: %dpx; border-bottom-color: %s;', esc_attr($bg_color), intval($border_width), esc_attr($border_color));
$logo_style = sprintf('color: %s; display: flex; align-items: center; gap: 0.5rem; text-decoration: none; outline: none;', esc_attr($logo_color));
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
  <nav class="simple-navbar" style="<?php echo $nav_style; ?>">
    <a href="<?php echo esc_url($home_url); ?>" class="nav-logo" style="<?php echo $logo_style; ?>">
      <?php if ($logo_image): ?>
        <img src="<?php echo esc_url($logo_image); ?>" alt="Logo" style="height: 32px; width: auto;" />
      <?php endif; ?>
      <span><?php echo esc_html($site_title); ?></span>
    </a>
    
    <button class="nav-hamburger" aria-label="Menu" style="background: none;">
      <span style="background-color: <?php echo esc_attr($hamburger_color); ?>;"></span>
      <span style="background-color: <?php echo esc_attr($hamburger_color); ?>;"></span>
      <span style="background-color: <?php echo esc_attr($hamburger_color); ?>;"></span>
    </button>

    <ul class="nav-links">
      <?php foreach ($menu_items as $item): 
        $item = (array)$item; // Ensure item is an array
      ?>
        <li>
          <a 
            href="<?php echo esc_url($item['url'] ?? '#'); ?>" 
            target="<?php echo ($item['newTab'] ?? false) ? '_blank' : '_self'; ?>"
            <?php if ($item['newTab'] ?? false): ?>rel="noopener noreferrer"<?php endif; ?>
            style="color: <?php echo esc_attr($menu_color); ?>; outline: none;"
          >
            <?php echo esc_html($item['label'] ?? ''); ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>
  </nav>
</div>
