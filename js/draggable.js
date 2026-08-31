/**
 * Draggable Paper Physics System (Inspired by devsaro Paper Physics)
 * Supports Mouse & Mobile Touch Dragging, Rotation, and Dynamic Z-Indexing
 */
class DraggablePapersSystem {
    constructor() {
        this.container = document.getElementById('draggableArena');
        this.highestZ = 100;
        this.init();
    }

    init() {
        if (!this.container) return;
        const papers = Array.from(this.container.querySelectorAll('.draggable-paper'));
        papers.forEach(paper => {
            this.setupPaper(paper);
        });
    }

    setupPaper(paper) {
        let holdingPaper = false;
        let mouseTouchX = 0;
        let mouseTouchY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let prevMouseX = 0;
        let prevMouseY = 0;
        let velX = 0;
        let velY = 0;
        let rotation = Math.random() * 24 - 12;
        let currentPaperX = 0;
        let currentPaperY = 0;
        let rotating = false;

        // Initial slight random tilt
        paper.style.transform = `translateX(0px) translateY(0px) rotateZ(${rotation}deg)`;

        // Mouse Events
        document.addEventListener('mousemove', (e) => {
            if (!holdingPaper) return;
            mouseX = e.clientX;
            mouseY = e.clientY;
            velX = mouseX - prevMouseX;
            velY = mouseY - prevMouseY;

            if (!rotating) {
                currentPaperX += velX;
                currentPaperY += velY;
            }

            prevMouseX = mouseX;
            prevMouseY = mouseY;
            paper.style.transform = `translateX(${currentPaperX}px) translateY(${currentPaperY}px) rotateZ(${rotation}deg)`;
        });

        paper.addEventListener('mousedown', (e) => {
            if (e.target.closest('button') || e.target.closest('a')) return;
            holdingPaper = true;
            this.highestZ += 1;
            paper.style.zIndex = this.highestZ;

            if (e.button === 0) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                prevMouseX = mouseX;
                prevMouseY = mouseY;
            }
            if (e.button === 2) {
                rotating = true;
            }
        });

        // Touch Events for Mobile
        paper.addEventListener('touchstart', (e) => {
            if (e.target.closest('button') || e.target.closest('a')) return;
            holdingPaper = true;
            this.highestZ += 1;
            paper.style.zIndex = this.highestZ;

            const touch = e.touches[0];
            mouseX = touch.clientX;
            mouseY = touch.clientY;
            prevMouseX = mouseX;
            prevMouseY = mouseY;
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            if (!holdingPaper) return;
            const touch = e.touches[0];
            mouseX = touch.clientX;
            mouseY = touch.clientY;
            velX = mouseX - prevMouseX;
            velY = mouseY - prevMouseY;

            currentPaperX += velX;
            currentPaperY += velY;

            prevMouseX = mouseX;
            prevMouseY = mouseY;
            paper.style.transform = `translateX(${currentPaperX}px) translateY(${currentPaperY}px) rotateZ(${rotation}deg)`;
        }, { passive: false });

        const release = () => {
            holdingPaper = false;
            rotating = false;
        };

        window.addEventListener('mouseup', release);
        window.addEventListener('touchend', release);
    }
}

window.DraggablePapersSystem = DraggablePapersSystem;
