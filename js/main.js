document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle-mobile');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('fa-bars');
            navToggle.classList.toggle('fa-times');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('fa-times');
                navToggle.classList.add('fa-bars');
            }
        });

        // Close menu after clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('fa-times');
                navToggle.classList.add('fa-bars');
            });
        });
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // WhatsApp Configuration
    const whatsappPhoneNumber = '916238501981';

    // Helper to open WhatsApp
    window.openWhatsApp = function (message) {
        const encodedMessage = encodeURIComponent(message || 'Hello Beacon Bridge Global Consultancy! I would like to inquire about your services.');
        window.open(`https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`, '_blank');
    };

    // WhatsApp Floating Button logic
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            window.openWhatsApp('Hello Beacon Bridge Global Consultancy! I would like to inquire about study abroad opportunities.');
        });
    }

    // Hero Carousel Initialization
    const countries = [
        { name: 'Albania', img: 'albania/Berat, Albania.jpg' },
        { name: 'Armenia', img: 'armenia/armenia image.jpg' },
        { name: 'Australia', img: 'australia/Sydney NSW, Australia_  DReam Travel 2020.jpg' },
        { name: 'Austria', img: 'austria/austria.jpg' },
        { name: 'Belgium', img: 'belgium/Brussels, Belgium.jpg' },
        { name: 'Brazil', img: 'brazil/Rio le tramway historique.jpg' },
        { name: 'Bulgaria', img: 'bulgaria/Sofia _.jpg' },
        { name: 'Canada', img: 'canada/download.jpg' },
        { name: 'China', img: 'china/download.jpg' },
        { name: 'Croatia', img: 'croatia/Discover the Hidden Gems of Kotor Croatia for Your Next Adventure.jpg' },
        { name: 'Finland', img: 'finland/14 Best Places In Finland To Visit - Hand Luggage Only - Travel, Food And Photography Blog.jpg' },
        { name: 'France', img: 'france/download.jpg' },
        { name: 'Georgia', img: "georgia/1,500-year-old-Tbilisi- capital of Georgia 🇬🇪.jpg" },
        { name: 'Germany', img: 'germany/download.jpg' },
        { name: 'Greece', img: 'greece/download.jpg' },
        { name: 'Hungary', img: 'hungary/13 Best Things to Do in Budapest, Hungary - Road Affair.jpg' },
        { name: 'India', img: 'india/india taj.jpg' },
        { name: 'Italy', img: 'italy/download.jpg' },
        { name: 'Kazakhstan', img: 'kazakhstan/kazakhstan.jpg' },
        { name: 'Kyrgyzstan', img: 'kyrgyzstan/download.jpg' },
        { name: 'Latvia', img: 'latvia/latvia.jpg' },
        { name: 'Lithuania', img: 'lithuania/Vilnius.jpg' },
        { name: 'Malta', img: 'malta/malta.jpg' },
        { name: 'Mexico', img: 'mexico/download.jpg' },
        { name: 'Netherlands', img: 'netherland/hero.png' },
        { name: 'Norway', img: 'norway/hero.png' },
        { name: 'Poland', img: 'poland/poland.jpg' },
        { name: 'Portugal', img: 'portugal/hero.png' },
        { name: 'Russia', img: 'russia/hero.png' },
        { name: 'Spain', img: 'spain/Barcelona, Spania.jpg' },
        { name: 'Sweden', img: 'sweden/sweden.jpg' },
        { name: 'Switzerland', img: 'switzerland/hero.png' },
        { name: 'Thailand', img: 'thailand/hero.png' },
        { name: 'United Kingdom', img: 'united kingdom/download.jpg' },
        { name: 'USA', img: 'USA/download (1).jpg' },
        { name: 'Uzbekistan', img: 'uzbekistan/hero.png' }
    ];

    // Hero Carousel - Static Grid handled via HTML/CSS now
    
    // Hero Carousel Dots Scroll Sync
    const heroCarousel = document.querySelector('.hero-carousel');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (heroCarousel && dots.length > 0) {
        heroCarousel.addEventListener('scroll', () => {
            const scrollLeft = heroCarousel.scrollLeft;
            const maxScroll = heroCarousel.scrollWidth - heroCarousel.clientWidth;
            
            // Avoid division by zero
            if (maxScroll <= 0) return;
            
            const scrollPercentage = scrollLeft / maxScroll;
            
            dots.forEach(dot => dot.classList.remove('active'));
            
            if (scrollPercentage < 0.33) {
                dots[0].classList.add('active');
            } else if (scrollPercentage < 0.66) {
                dots[1].classList.add('active');
            } else {
                dots[2].classList.add('active');
            }
        });
        
        // Dot Click Navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const maxScroll = heroCarousel.scrollWidth - heroCarousel.clientWidth;
                let targetScroll = 0;
                if (index === 1) targetScroll = maxScroll / 2;
                if (index === 2) targetScroll = maxScroll;
                
                heroCarousel.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Flip Card Logic - Handled via CSS hover in index.css
    // We removed the click handler to allow hover-based flipping while keeping buttons interactive.

    // Category Selection Logic
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent card from flipping back
            const card = this.closest('.flip-card');
            const category = this.dataset.category;

            // Update active button
            card.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update content
            card.querySelectorAll('.category-detail').forEach(detail => {
                detail.classList.remove('active');
                if (detail.classList.contains(category)) {
                    detail.classList.add('active');
                }
            });
        });
    });

    // Enquire Button Logic (Contextual WhatsApp messages for Flip Cards)
    document.querySelectorAll('.card-enquire-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const country = this.dataset.country;
            const cardBack = this.closest('.flip-card-back');
            const activeCategoryBtn = cardBack.querySelector('.category-btn.active');
            const category = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'general';

            const categoryMap = {
                'job': 'job opportunities',
                'edu': 'education programs',
                'tour': 'tourism packages'
            };

            const message = `Hello! I am interested in ${categoryMap[category] || 'opportunities'} in ${country}. Could you please provide more details?`;
            window.openWhatsApp(message);
        });
    });

    // Global Listener for all other "Inquire Now" / "Consultation" buttons
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');
        if (!target) return;

        const text = target.textContent.trim().toLowerCase();
        // Identify buttons that should trigger WhatsApp
        if (text.includes('enquire') || text.includes('inquire') || text.includes('consultation')) {
            // If it's not a card-enquire-btn (which we handled above) and it points to contact.html or is a button
            if (!target.classList.contains('card-enquire-btn')) {
                e.preventDefault();
                const context = text.includes('consultation') ? 'a free consultation' : 'your services';
                window.openWhatsApp(`Hello Beacon Bridge Global Consultancy! I would like to request ${context}.`);
            }
        }
    });
});

// Global Modal Functions
window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

window.closeModal = function (event, modalId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }
};
