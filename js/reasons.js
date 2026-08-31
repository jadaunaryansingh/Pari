/**
 * Interactive "Reasons Why I Love You" Card Deck
 */
class ReasonsSystem {
    constructor() {
        this.reasons = CONFIG?.reasons || [];
        this.currentIndex = 0;
        this.numberEl = document.getElementById('reasonNumber');
        this.textEl = document.getElementById('reasonText');
        this.btn = document.getElementById('nextReasonBtn');

        this.init();
    }

    init() {
        if (!this.reasons.length || !this.textEl) return;
        this.showReason(0);

        if (this.btn) {
            this.btn.addEventListener('click', () => {
                this.nextReason();
            });
        }
    }

    showReason(index) {
        if (!this.reasons[index]) return;
        
        if (this.textEl) {
            this.textEl.style.opacity = '0';
            setTimeout(() => {
                if (this.numberEl) this.numberEl.textContent = `Reason #${index + 1} of ${this.reasons.length}`;
                this.textEl.textContent = `"${this.reasons[index]}"`;
                this.textEl.style.opacity = '1';
            }, 250);
        }
    }

    nextReason() {
        this.currentIndex = (this.currentIndex + 1) % this.reasons.length;
        this.showReason(this.currentIndex);
    }
}

window.ReasonsSystem = ReasonsSystem;
