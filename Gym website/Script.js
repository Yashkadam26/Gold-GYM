window.onload = () => {
    anime({
        targets: '.animate-text',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200), // Elements will appear one after another
        duration: 1000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.navbar',
        translateY: [-100, 0],
        duration: 800,
        easing: 'easeInOutQuad'
    });
};

// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Anime.js animation trigger
            anime({
                targets: '.animate-trainers',
                translateY: [100, 0],
                opacity: [0, 1],
                delay: anime.stagger(150),
                easing: 'easeOutExpo',
                duration: 1200
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing the trainers section
observer.observe(document.querySelector('.trainers-section'));

/* get Started */

window.onload = () => {
    anime({
        targets: '.gs-animate',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(250), // 250ms gap between each element appearing
        duration: 1000,
        easing: 'easeOutQuad'
    });
};

// Form submission effect
document.getElementById('user-info-form').addEventListener('submit', (e) => {
    e.preventDefault();
    anime({
        targets: '.btn-primary',
        scale: [1, 1.2, 1],
        duration: 300,
        easing: 'easeInOutQuad'
    });
    alert("Profile Created! Let's build your workout.");
});

// Add this to your existing window.onload
anime({
    targets: '.main-nav',
    translateY: [-100, 0], // Start off-screen and slide in
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutExpo'
});

// Subtle hover effect for nav links
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        anime({
            targets: link,
            scale: 1.1,
            duration: 200,
            easing: 'linear'
        });
    });
    link.addEventListener('mouseleave', () => {
        anime({
            targets: link,
            scale: 1.0,
            duration: 200,
            easing: 'linear'
        });
    });
});

/* our plans */ 

// Add this to your Intersection Observer or scroll logic
anime({
    targets: '.animate-card',
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 800,
    easing: 'easeOutBack'
});

// Card Hover Effect
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            translateY: -10,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    card.addEventListener('mouseleave', () => {
        anime({
            targets: card,
            translateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

/* our franchise */

// Register the animation for amenities
const amenityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: '.animate-amenity',
                translateX: [-100, 0],
                opacity: [0, 1],
                delay: anime.stagger(200),
                easing: 'easeOutElastic(1, .8)',
                duration: 1500
            });
            amenityObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

amenityObserver.observe(document.querySelector('.amenities-section'));

// contact us

// Register the scroll animation for the contact section
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: '.animate-contact',
                translateX: function(el, i) {
                    return i === 0 ? [-100, 0] : [100, 0]; // Left col slides left, right col slides right
                },
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo'
            });
            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

contactObserver.observe(document.querySelector('.contact-section'));

// Add this to your script.js IntersectionObserver
anime({
    targets: '.map-wrapper',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeOutElastic(1, .5)',
    delay: 400
});

document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // If it's an internal link (starts with #)
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// login page animation

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    if (mode === 'login') {
        toggleAuth('login'); // Automatically switches to login view
    } else {
        toggleAuth('signup'); // Default to signup
    }
};

// Our story page animation

window.addEventListener('scroll', () => {
    const steps = document.querySelectorAll('.step');
    const glowLine = document.getElementById('glow-line');
    
    // Calculate scroll percentage for the track
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    glowLine.style.height = scrolled + "%";

    // Highlight the active step
    steps.forEach(step => {
        const rect = step.getBoundingClientRect();
        // If the step is in the middle of the viewport
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
});