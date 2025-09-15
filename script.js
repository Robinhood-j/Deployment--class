// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link, .logo, .footer-section a');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Update active page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === `${targetPage}-page`) {
                    page.classList.add('active');
                    
                    // Scroll to top when changing pages
                    window.scrollTo(0, 0);
                }
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            if (this.classList.contains('nav-link')) {
                this.classList.add('active');
            } else if (this.classList.contains('logo')) {
                document.querySelector('[data-page="home"]').classList.add('active');
            }
            
            // Close mobile menu if open
            if (document.getElementById('nav-menu').classList.contains('show')) {
                document.getElementById('nav-menu').classList.remove('show');
            }
        });
    });
    
    // Mobile menu toggle
    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('nav-menu').classList.toggle('show');
    });
    
    // Form validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .gallery-item');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (position < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});