        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.floating-navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Navbar link active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scrolling for navbar links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to section function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Form validation
        (function () {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        })();

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, you would send the form data to a server here
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            this.classList.remove('was-validated');
        });

        // Download CV function
        function downloadCV() {
            const link = document.createElement('a');
            link.href = 'Saiteja_frontend developer.pdf';  // Update with your actual PDF file
            link.download = 'Saiteja_frontend developer.pdf';
            link.click();
        }

        // Animate skill bars and circles when in view
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            const skillCircles = document.querySelectorAll('.skill-circle');
            
            skillBars.forEach(bar => {
                const value = bar.getAttribute('data-value');
                if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                    bar.style.width = value + '%';
                    bar.classList.add('animated');
                }
            });
            
            skillCircles.forEach(circle => {
                const percent = circle.getAttribute('data-percent');
                if (isElementInViewport(circle) && !circle.classList.contains('animated')) {
                    circle.style.setProperty('--percent', percent);
                    circle.classList.add('animated');
                }
            });
        }

        // Check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Fade in animation for sections
        function fadeInOnScroll() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }

        // Initialize animations on load and scroll
        window.addEventListener('load', function() {
            animateSkills();
            fadeInOnScroll();
        });

        window.addEventListener('scroll', function() {
            animateSkills();
            fadeInOnScroll();
        });

        // Close mobile menu when clicking a link
        const navCollapse = document.getElementById('mainNav');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse && window.innerWidth < 992) {
                    bsCollapse.hide();
                }
            });
        });
