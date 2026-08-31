/**
 * Romantic Audio Engine & Music Manager
 * Plays background song starting precisely from 0:48 seconds with instant autoplay handling
 */
class RomanticAudioEngine {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.customAudio = null;
        this.synthTimer = null;
        this.noteIndex = 0;
        this.startTime = CONFIG?.audio?.startTimeSeconds || 48;
        
        // Romantic synth chord progression fallback
        this.melody = [
            261.63, 329.63, 392.00, 523.25, 392.00, 329.63,
            246.94, 293.66, 392.00, 493.88, 392.00, 293.66,
            220.00, 261.63, 329.63, 440.00, 329.63, 261.63,
            174.61, 220.00, 261.63, 349.23, 261.63, 220.00
        ];

        this.initUI();
        this.initAudioSource();
        this.attemptImmediatePlay();
    }

    initAudioSource() {
        if (CONFIG?.audio?.customAudioPath) {
            this.customAudio = new Audio(CONFIG.audio.customAudioPath);
            this.customAudio.loop = true;
            this.customAudio.preload = "auto";

            // Set start time as soon as metadata is ready
            this.customAudio.addEventListener('loadedmetadata', () => {
                if (this.customAudio.currentTime < this.startTime) {
                    this.customAudio.currentTime = this.startTime;
                }
            });

            // Loop back cleanly
            this.customAudio.addEventListener('ended', () => {
                this.customAudio.currentTime = this.startTime;
                this.customAudio.play().catch(() => {});
            });
        }
    }

    attemptImmediatePlay() {
        // Attempt autoplay right away
        const tryPlay = () => {
            if (this.isPlaying) return;
            this.start();
        };

        // Try right now
        tryPlay();

        // If browser policies require user gesture, bind to ANY first interaction on screen
        const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown', 'scroll'];
        const onFirstGesture = () => {
            if (!this.isPlaying) {
                this.start();
            }
            events.forEach(evt => window.removeEventListener(evt, onFirstGesture));
        };

        events.forEach(evt => {
            window.addEventListener(evt, onFirstGesture, { once: true, passive: true });
        });
    }

    initContext() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    initUI() {
        this.btn = document.getElementById('musicToggleBtn');
        this.statusText = document.getElementById('musicStatusText');
        this.titleText = document.getElementById('musicTitleText');

        if (CONFIG?.audio?.defaultSongTitle && this.titleText) {
            this.titleText.textContent = CONFIG.audio.defaultSongTitle;
        }

        if (this.btn) {
            this.btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePlay();
            });
        }
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.start();
        }
    }

    start() {
        this.initContext();

        if (this.customAudio) {
            if (this.customAudio.currentTime < this.startTime) {
                try {
                    this.customAudio.currentTime = this.startTime;
                } catch(e) {}
            }
            const playPromise = this.customAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isPlaying = true;
                    this.updateUIState(true);
                }).catch((err) => {
                    // Autoplay was blocked; will wait for next touch/click
                    this.isPlaying = false;
                    this.updateUIState(false);
                });
            }
        } else if (CONFIG?.audio?.enableWebAudioSynthesizer) {
            this.isPlaying = true;
            this.startSynthesizer();
            this.updateUIState(true);
        }
    }

    pause() {
        this.isPlaying = false;
        if (this.customAudio) {
            this.customAudio.pause();
        }
        if (this.synthTimer) {
            clearInterval(this.synthTimer);
            this.synthTimer = null;
        }
        this.updateUIState(false);
    }

    updateUIState(playing) {
        if (this.btn) {
            if (playing) {
                this.btn.classList.add('playing');
            } else {
                this.btn.classList.remove('playing');
            }
        }
        if (this.statusText) {
            this.statusText.textContent = playing ? "Playing Tujhko 🎶 (0:48)" : "Paused • Click to Play";
        }
    }

    startSynthesizer() {
        if (this.synthTimer) clearInterval(this.synthTimer);
        this.synthTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const freq = this.melody[this.noteIndex];
            this.playSoftTone(freq, 1.4);
            this.noteIndex = (this.noteIndex + 1) % this.melody.length;
        }, 450);
    }

    playSoftTone(freq, duration = 1.2) {
        if (!this.ctx || this.ctx.state !== 'running') return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {}
    }

    // Sound FX: Wax Seal Crackle
    playWaxCrackle() {
        this.initContext();
        if (!this.ctx) return;
        try {
            const bufferSize = this.ctx.sampleRate * 0.15;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.03));
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            noise.connect(gain);
            gain.connect(this.ctx.destination);
            noise.start();
        } catch(e) {}
    }

    // Sound FX: Celestial Ring Chime
    playRingBoxChime() {
        this.initContext();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playSoftTone(freq, 2.0);
            }, idx * 120);
        });
    }

    // Sound FX: Celebration Fanfare
    playCelebrationFanfare() {
        this.initContext();
        if (!this.ctx) return;
        const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        fanfare.forEach((freq, idx) => {
            setTimeout(() => {
                this.playSoftTone(freq, 2.5);
            }, idx * 150);
        });
    }
}

window.RomanticAudioEngine = RomanticAudioEngine;
