/**
 * Romantic Audio Engine & Synthesizer
 * Provides atmospheric background melody and realistic interactive sound effects
 */
class RomanticAudioEngine {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.customAudio = null;
        this.synthTimer = null;
        this.noteIndex = 0;
        
        // Romantic chord progression (Piano / Bell arpeggios in Hz)
        // Cmaj - Gmaj - Amin - Fmaj progression
        this.melody = [
            // C chord
            261.63, 329.63, 392.00, 523.25, 392.00, 329.63,
            // G chord
            246.94, 293.66, 392.00, 493.88, 392.00, 293.66,
            // Am chord
            220.00, 261.63, 329.63, 440.00, 329.63, 261.63,
            // F chord
            174.61, 220.00, 261.63, 349.23, 261.63, 220.00,
            // Em chord
            164.81, 196.00, 246.94, 329.63, 246.94, 196.00,
            // G7 chord
            196.00, 246.94, 293.66, 349.23, 392.00, 493.88
        ];

        this.initUI();
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
            this.btn.addEventListener('click', () => this.togglePlay());
        }

        // Optional first-click auto-start attempt
        const startOnInteraction = () => {
            if (!this.isPlaying) {
                this.start();
            }
            window.removeEventListener('click', startOnInteraction);
            window.removeEventListener('keydown', startOnInteraction);
        };
        window.addEventListener('click', startOnInteraction, { once: true });
        window.addEventListener('keydown', startOnInteraction, { once: true });
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
        this.isPlaying = true;

        if (CONFIG?.audio?.customAudioPath) {
            if (!this.customAudio) {
                this.customAudio = new Audio(CONFIG.audio.customAudioPath);
                this.customAudio.loop = true;
            }
            this.customAudio.play().catch(e => console.log('Audio playback info:', e));
        } else if (CONFIG?.audio?.enableWebAudioSynthesizer) {
            this.startSynthesizer();
        }

        if (this.btn) this.btn.classList.add('playing');
        if (this.statusText) this.statusText.textContent = "Playing Romantic Melody 🎶";
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
        if (this.btn) this.btn.classList.remove('playing');
        if (this.statusText) this.statusText.textContent = "Paused • Click to Play";
    }

    startSynthesizer() {
        if (this.synthTimer) clearInterval(this.synthTimer);
        
        // Play an arpeggiated note every 450ms
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

            // Gentle attack and exponential decay for dreamy electric piano vibe
            gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            // Context not ready
        }
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
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
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
