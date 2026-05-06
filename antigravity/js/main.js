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
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                type: document.getElementById('type').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // Log form data (in real application, send to server)
            console.log('문의하기 접수:', formData);
            
            // Store in localStorage as backup
            try {
                const existingQueries = JSON.parse(localStorage.getItem('contactQueries') || '[]');
                existingQueries.push(formData);
                localStorage.setItem('contactQueries', JSON.stringify(existingQueries));
            } catch (error) {
                console.error('LocalStorage 저장 오류:', error);
            }
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form and message after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
                
                // Scroll to form
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 3000);
        });
    }

    // 5. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const element = document.querySelector(href);
                const headerHeight = header.offsetHeight;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Add padding to body for fixed header
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.style.paddingTop = header.offsetHeight + 'px';
    }

    // 7. Handle window resize for responsive adjustments
    window.addEventListener('resize', () => {
        if (mainElement) {
            mainElement.style.paddingTop = header.offsetHeight + 'px';
        }
    });

    // 8. Logo click to scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
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
