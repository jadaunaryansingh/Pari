/**
 * App Coordinator & Main Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Canvas Particles Engine (Stars, Embers, Fireworks)
    const particles = new ParticleEngine('particlesCanvas');

    // 2. Initialize Audio Engine & Synthesizer
    const audio = new RomanticAudioEngine();

    // 3. Initialize Love Letters System (Wax-sealed envelopes)
    const letters = new LettersSystem(audio);

    // 4. Initialize Timeline System (Story Milestones)
    const timeline = new TimelineSystem();

    // 5. Initialize Polaroids System (3D Tilt gallery)
    const polaroids = new PolaroidsSystem();

    // 6. Initialize Reasons System (Card deck)
    const reasons = new ReasonsSystem();

    // 7. Initialize Draggable Papers System (CodePen inspired drag physics)
    const draggable = new DraggablePapersSystem();

    // 8. Initialize Special Interactive Features (Unfolding Envelope & Heart Lock)
    const specialInteractions = new SpecialInteractionsEngine(audio);

    // 9. Initialize Proposal Sanctuary System (3D Ring Box, Runaway No, Fireworks Celebration)
    const proposal = new ProposalSystem(audio, particles);

    // 10. Start Relationship Live Timer
    startRelationshipTimer();

    // 11. Smooth Scroll Observers
    initScrollAnimations();

    // 12. Romantic Landing Entrance Handler
    initLandingEntrance(audio, particles);
});

/**
 * Romantic Landing Entrance Curtain Handler
 */
function initLandingEntrance(audio, particles) {
    const curtain = document.getElementById('romanticLandingCurtain');
    const enterBtn = document.getElementById('landingEnterBtn');
    const sealBadge = document.getElementById('landingSealBadge');

    if (!curtain) return;

    const openCurtain = () => {
        // Start romantic music from 0:48s
        if (audio) {
            audio.start();
        }

        // Open the curtain
        curtain.classList.add('opened');

        // Trigger gentle heart particles
        if (particles) {
            for (let i = 0; i < 30; i++) {
                particles.createConfetti();
            }
        }
    };

    if (enterBtn) enterBtn.addEventListener('click', openCurtain);
    if (sealBadge) sealBadge.addEventListener('click', openCurtain);
}

/**
 * Live Relationship Counter
 */
function startRelationshipTimer() {
    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    if (!daysEl || !CONFIG?.dates?.officialDate) return;

    // Use met date (Krishna's birthday) as initial spark
    const startDate = new Date(CONFIG.dates.metDate || "2024-10-31T20:00:00").getTime();

    function update() {
        const now = new Date().getTime();
        let diff = now - startDate;

        if (diff < 0) diff = 0;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll('.reveal-fade-up').forEach(el => {
        observer.observe(el);
    });

    // Scroll prompt click handler
    const scrollPrompt = document.getElementById('heroScrollPrompt');
    if (scrollPrompt) {
        scrollPrompt.addEventListener('click', () => {
            const nextSection = document.getElementById('journeySection');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
