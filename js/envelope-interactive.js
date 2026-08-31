/**
 * Special Multi-Layer Unfolding Envelope & Sliding Love Notes (Inspired by CodePen)
 * + "I LOVE YOU" Checkbox Beating Heart Lock Engine
 */
class SpecialInteractionsEngine {
    constructor(audioEngine) {
        this.audio = audioEngine;
        this.initMultiLayerEnvelope();
        this.initILoveYouHeartLock();
    }

    initMultiLayerEnvelope() {
        const sticker = document.querySelector('.js-interactive-sticker');
        const upPaper = document.querySelector('.js-interactive-up-paper');
        const envelop = document.querySelector('.interactive-unfold-envelop');
        const notes = document.querySelectorAll('.js-slide-note');
        let envelopeOpened = false;

        if (!sticker || !upPaper) return;

        // Step 1: Click sticker to break seal
        sticker.addEventListener('click', () => {
            if (this.audio) this.audio.playWaxCrackle();
            sticker.classList.add('broken');
            upPaper.classList.add('cursor-pointer');
            
            // Auto open flap or allow click
            setTimeout(() => {
                openEnvelopeFlap();
            }, 300);
        });

        function openEnvelopeFlap() {
            if (envelopeOpened) return;
            envelopeOpened = true;
            upPaper.classList.add('opened');
            envelop.classList.add('content-active');
            
            // Enable note expansion on click
            notes.forEach((note, i) => {
                note.addEventListener('click', () => {
                    notes.forEach(n => n.classList.remove('active'));
                    note.classList.add('active');
                });
            });
        }

        upPaper.addEventListener('click', openEnvelopeFlap);
    }

    initILoveYouHeartLock() {
        const ck1 = document.getElementById('ck1');
        const ck2 = document.getElementById('ck2');
        const ck3 = document.getElementById('ck3');
        const wrapper = document.getElementById('heartLockWrapper');
        const unlockMessage = document.getElementById('heartUnlockMessage');

        if (!ck1 || !ck2 || !ck3 || !wrapper) return;

        const checkState = () => {
            if (ck1.checked && ck2.checked && ck3.checked) {
                wrapper.classList.add('throb');
                if (unlockMessage) {
                    unlockMessage.classList.add('unlocked');
                    unlockMessage.innerHTML = "💖 UNLOCKED: Aryan ❤️ Pari Forever! Scroll to the Ring 💍 💖";
                }
                if (this.audio) this.audio.playRingBoxChime();
            } else {
                wrapper.classList.remove('throb');
                if (unlockMessage) {
                    unlockMessage.classList.remove('unlocked');
                    unlockMessage.textContent = "(Click on the words 'I', 'love', 'you' to complete our heart)";
                }
            }
        };

        ck1.addEventListener('change', checkState);
        ck2.addEventListener('change', checkState);
        ck3.addEventListener('change', checkState);
    }
}

window.SpecialInteractionsEngine = SpecialInteractionsEngine;
