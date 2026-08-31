/**
 * Interactive Timeline & Journey Milestones
 */
class TimelineSystem {
    constructor() {
        this.container = document.getElementById('timelineContainer');
        this.init();
    }

    init() {
        if (!this.container || !CONFIG?.milestones) return;
        this.renderMilestones();
        this.setupIntersectionObserver();
    }

    renderMilestones() {
        this.container.innerHTML = '';
        CONFIG.milestones.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'timeline-item';
            
            el.innerHTML = `
                <div class="timeline-node">${item.icon || '❤️'}</div>
                <div class="timeline-card">
                    <span class="timeline-tag">${item.tag || 'Milestone'}</span>
                    <h3 class="timeline-item-title">${item.title}</h3>
                    <div class="timeline-item-date">${item.date}</div>
                    <p class="timeline-item-story">${item.story}</p>
                </div>
            `;
            
            this.container.appendChild(el);
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2
        });

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }
}

window.TimelineSystem = TimelineSystem;
