/* jshint esversion: 6 */

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#menu a');
    
    // Add smooth scroll to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply smooth scroll to internal links (same page)
            const href = this.getAttribute('href');
            
            // Check if link is to current page (not navigating to different page)
            if (href.includes('#')) {
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});