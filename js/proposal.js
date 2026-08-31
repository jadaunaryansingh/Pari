/**
 * The Grand Proposal Sanctuary Logic
 * 3D Ring Box Animation, Playful Runaway "No" Button, and Fireworks Celebration
 */
class ProposalSystem {
    constructor(audioEngine, particleEngine) {
        this.audio = audioEngine;
        this.particles = particleEngine;

        this.ringStage = document.getElementById('ringStage');
        this.ringBox = document.getElementById('ringBox');
        this.yesBtn = document.getElementById('btnProposalYes');
        this.noBtn = document.getElementById('btnProposalNo');
        this.toast = document.getElementById('playfulToast');
        this.celebrationModal = document.getElementById('celebrationModal');
        this.closeCelebrationBtn = document.getElementById('closeCelebrationBtn');
        this.whatsappBtn = document.getElementById('btnWhatsappShare');
        this.proposalHeading = document.getElementById('proposalHeading');
        this.proposalSpeech = document.getElementById('proposalSpeech');
        this.proposalQuestion = document.getElementById('proposalQuestion');

        this.noAttemptCount = 0;
        this.isBoxOpen = false;

        this.init();
    }

    init() {
        this.populateText();
        this.bindEvents();
    }

    populateText() {
        const p = CONFIG?.proposal;
        if (!p) return;

        if (this.proposalHeading) this.proposalHeading.textContent = p.heading;
        if (this.proposalSpeech) {
            this.proposalSpeech.innerHTML = `
                <p><em>${p.leadIn}</em></p>
                <p>${p.speech.replace(/\n\n/g, '</p><p>')}</p>
            `;
        }
        if (this.proposalQuestion) this.proposalQuestion.textContent = p.question;
        if (this.yesBtn) this.yesBtn.innerHTML = `<span>💍</span> ${p.yesButtonText}`;
        if (this.noBtn) this.noBtn.textContent = p.noButtonText;

        // WhatsApp Share Link Setup
        if (this.whatsappBtn) {
            const brideName = CONFIG.brideName || "Pari";
            const groomName = CONFIG.groomName || "Aryan";
            const msg = encodeURIComponent(`YES! A Thousand Times YES! 💍❤️ I love you so much ${groomName}! Forever yours, ${brideName}! ✨`);
            const phone = CONFIG.whatsAppNumber || "";
            this.whatsappBtn.href = phone ? `https://api.whatsapp.com/send?phone=${phone}&text=${msg}` : `https://api.whatsapp.com/send?text=${msg}`;
            this.whatsappBtn.target = "_blank";
        }
    }

    bindEvents() {
        // 3D Ring Box click interaction
        if (this.ringStage && this.ringBox) {
            this.ringStage.addEventListener('click', () => {
                this.toggleRingBox();
            });
        }

        // Runaway "No" button
        if (this.noBtn) {
            this.noBtn.addEventListener('mouseenter', () => this.dodgeNoButton());
            this.noBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.dodgeNoButton(true);
            });
            this.noBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.dodgeNoButton(true);
            });
        }

        // YES Celebration
        if (this.yesBtn) {
            this.yesBtn.addEventListener('click', () => this.sayYes());
        }

        // Close keepsake modal
        if (this.closeCelebrationBtn) {
            this.closeCelebrationBtn.addEventListener('click', () => {
                this.celebrationModal.classList.remove('active');
            });
        }
    }

    toggleRingBox() {
        this.isBoxOpen = !this.isBoxOpen;
        if (this.isBoxOpen) {
            this.ringBox.classList.add('open');
            const instruction = document.querySelector('.box-instruction');
            if (instruction) instruction.textContent = "✨ For My One & Only Pari ✨";
            if (this.audio) this.audio.playRingBoxChime();
        } else {
            this.ringBox.classList.remove('open');
            const instruction = document.querySelector('.box-instruction');
            if (instruction) instruction.textContent = "✨ Tap to Open the Velvet Box ✨";
        }
    }

    dodgeNoButton(isClick = false) {
        this.noAttemptCount++;
        const maxOffset = 120;
        const randomX = (Math.random() * (maxOffset * 2) - maxOffset);
        const randomY = (Math.random() * 80 - 40);

        this.noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

        // Grow the YES button
        const scale = 1 + (this.noAttemptCount * 0.08);
        if (this.yesBtn) {
            this.yesBtn.style.transform = `scale(${Math.min(scale, 1.45)})`;
        }

        // Show cute toast
        const responses = CONFIG?.proposal?.noPlayfulResponses || [
            "Nice try sweetheart! But you're stuck with me forever! ❤️"
        ];
        const msg = responses[(this.noAttemptCount - 1) % responses.length];
        this.showToast(msg);
    }

    showToast(message) {
        if (!this.toast) return;
        this.toast.textContent = message;
        this.toast.classList.add('show');
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3200);
    }

    sayYes() {
        // Open ring box if not open
        if (!this.isBoxOpen) {
            this.toggleRingBox();
        }

        // Launch celebration fireworks & confetti
        if (this.particles) {
            this.particles.launchCelebration();
        }

        // Play joyful audio fanfare
        if (this.audio) {
            this.audio.playCelebrationFanfare();
        }

        // Display keepsake certificate modal
        setTimeout(() => {
            if (this.celebrationModal) {
                this.celebrationModal.classList.add('active');
            }
        }, 800);
    }
}

window.ProposalSystem = ProposalSystem;
