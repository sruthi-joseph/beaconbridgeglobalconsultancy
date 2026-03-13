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

    // WhatsApp Button Logic
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const phoneNumber = '919000000000'; // Placeholder - update with actual
            const message = encodeURIComponent('Hello Beacon Bridge Global Consultancy! I would like to inquire about study abroad opportunities.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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

    const drumContainer = document.getElementById('heroCarousel');
    if (drumContainer) {
        // Clean up old container class and content
        drumContainer.innerHTML = '';
        drumContainer.className = 'hero-drum';

        // Add Caps
        const topCap = document.createElement('div');
        topCap.className = 'drum-cap top';
        drumContainer.appendChild(topCap);

        const bottomCap = document.createElement('div');
        bottomCap.className = 'drum-cap bottom';
        drumContainer.appendChild(bottomCap);

        const totalItems = countries.length;
        const tiers = 3;
        const itemsPerTier = totalItems / tiers;
        const angleStep = 360 / itemsPerTier;
        const radius = 320; // Increased radius for larger cylinder (from 250)

        for (let t = 0; t < tiers; t++) {
            const tier = document.createElement('div');
            tier.className = 'drum-tier';

            for (let i = 0; i < itemsPerTier; i++) {
                const countryIndex = t * itemsPerTier + i;
                const country = countries[countryIndex];

                const item = document.createElement('div');
                item.className = 'drum-item';

                const angle = i * angleStep;
                item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

                item.innerHTML = `
                    <img src="${country.img}" alt="${country.name}" class="hd-image">
                    <div class="drum-label">${country.name}</div>
                `;

                tier.appendChild(item);
            }
            drumContainer.appendChild(tier);
        }
    }
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
