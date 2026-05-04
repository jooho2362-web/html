document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Shrink on Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Intersection Observer for Fade-Up Animations
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want the animation to happen only once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Contact Form Submission (Simulation)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, you would send formData to a server here
            // using fetch() or XMLHttpRequest
            
            // Simulate API call and success UI
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form for future use (if page is not refreshed)
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'grid';
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }
});
