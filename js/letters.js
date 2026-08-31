/**
 * Interactive Love Letters System
 * Handles envelope rendering, wax seal break, and parchment reading modal
 */
class LettersSystem {
    constructor(audioEngine) {
        this.audio = audioEngine;
        this.container = document.getElementById('lettersGrid');
        this.modal = document.getElementById('letterModal');
        this.modalClose = document.getElementById('modalCloseBtn');
        this.modalChapter = document.getElementById('modalChapter');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalSubtitle = document.getElementById('modalSubtitle');
        this.modalContent = document.getElementById('modalContent');
        this.modalFooter = document.getElementById('modalFooter');

        this.init();
    }

    init() {
        if (!this.container || !CONFIG?.letters) return;
        this.renderEnvelopes();
        this.bindModalEvents();
    }

    renderEnvelopes() {
        this.container.innerHTML = '';
        CONFIG.letters.forEach((letter, index) => {
            const card = document.createElement('div');
            card.className = 'envelope-card';
            card.setAttribute('data-id', letter.id);

            card.innerHTML = `
                <div class="envelope-3d">
                    <div class="envelope-flap"></div>
                    <div class="letter-paper-peek">
                        <div class="peek-line"></div>
                        <div class="peek-line"></div>
                        <div class="peek-line short"></div>
                    </div>
                    <div class="envelope-pocket"></div>
                    <div class="wax-seal"></div>
                </div>
                <div class="envelope-info">
                    <div class="envelope-chapter-badge">${letter.chapter}</div>
                    <h3 class="envelope-title">${letter.title}</h3>
                    <div class="envelope-hint"><span>💌</span> Click to unseal & read</div>
                </div>
            `;

            card.addEventListener('click', () => {
                this.openLetter(letter);
            });

            this.container.appendChild(card);
        });
    }

    openLetter(letter) {
        if (this.audio) {
            this.audio.playWaxCrackle();
        }

        if (this.modalChapter) this.modalChapter.textContent = letter.chapter;
        if (this.modalTitle) this.modalTitle.textContent = letter.title;
        if (this.modalSubtitle) this.modalSubtitle.textContent = letter.subtitle || '';
        if (this.modalContent) this.modalContent.textContent = letter.content;
        if (this.modalFooter) this.modalFooter.textContent = `Forever Yours, ${CONFIG.groomName || 'Aryan'} ❤️`;

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    bindModalEvents() {
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
        }

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
}

window.LettersSystem = LettersSystem;
