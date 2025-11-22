/**
 * Frontend interactivity for Hero Block
 * Add any frontend JavaScript here if needed
 */

document.addEventListener('DOMContentLoaded', function() {
	const heroButtons = document.querySelectorAll('.aronnax-hero__cta-button');
	
	heroButtons.forEach(button => {
		// Add smooth scroll if button links to anchor
		if (button.getAttribute('href')?.startsWith('#')) {
			button.addEventListener('click', function(e) {
				const targetId = this.getAttribute('href');
				const targetElement = document.querySelector(targetId);
				
				if (targetElement) {
					e.preventDefault();
					targetElement.scrollIntoView({ 
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		}
	});
});
