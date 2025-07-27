// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    // Toggle menu when hamburger icon is clicked
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle && nav) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && menuToggle) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});