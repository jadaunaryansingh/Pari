/**
 * Canvas Particle System: Ambient Starlight, Floating Heart Embers, Petals & Celebration Fireworks
 */
class ParticleEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.fireworks = [];
        this.confetti = [];
        this.isCelebrating = false;
        
        this.resize();
        this.initAmbient();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
    }

    initAmbient() {
        this.particles = [];
        const count = Math.floor((this.width * this.height) / 12000);
        
        // Stars
        for (let i = 0; i < count; i++) {
            this.particles.push({
                type: 'star',
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                color: '#fff'
            });
        }

        // Floating Hearts & Embers
        const heartsCount = 20;
        for (let i = 0; i < heartsCount; i++) {
            this.particles.push({
                type: 'heart',
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 10 + 8,
                speedY: Math.random() * 0.6 + 0.2,
                speedX: Math.sin(Math.random() * Math.PI) * 0.4,
                alpha: Math.random() * 0.6 + 0.2,
                color: Math.random() > 0.5 ? '#e63946' : '#e0a96d'
            });
        }
    }

    drawHeart(ctx, x, y, size, color, alpha) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        // top left curve
        ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
        // bottom left curve
        ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
        // bottom right curve
        ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
        // top right curve
        ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    launchCelebration() {
        this.isCelebrating = true;
        
        // Spawn continuous fireworks
        const fireworkInterval = setInterval(() => {
            if (!this.isCelebrating) {
                clearInterval(fireworkInterval);
                return;
            }
            this.createFirework();
            this.createFirework();
        }, 400);

        // Spawn massive confetti burst
        for (let i = 0; i < 250; i++) {
            this.createConfetti();
        }
    }

    createFirework() {
        const x = Math.random() * (this.width * 0.8) + (this.width * 0.1);
        const y = Math.random() * (this.height * 0.5) + (this.height * 0.1);
        const count = 40;
        const colors = ['#ff2a6d', '#ffd700', '#00f2fe', '#f4a6b8', '#ffffff', '#e0a96d'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 / count) * i;
            const velocity = Math.random() * 5 + 2;
            this.fireworks.push({
                x,
                y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.015,
                color,
                size: Math.random() * 3 + 2
            });
        }
    }

    createConfetti() {
        const colors = ['#e63946', '#e0a96d', '#ffd700', '#f4a6b8', '#a18cd1', '#ffffff'];
        this.confetti.push({
            x: Math.random() * this.width,
            y: Math.random() * -this.height,
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 6 - 3,
            shape: Math.random() > 0.3 ? 'rect' : 'heart'
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Render ambient stars & hearts
        for (let p of this.particles) {
            if (p.type === 'star') {
                p.alpha += p.twinkleSpeed;
                if (p.alpha > 0.9 || p.alpha < 0.2) p.twinkleSpeed = -p.twinkleSpeed;
                this.ctx.fillStyle = p.color;
                this.ctx.globalAlpha = Math.max(0, p.alpha);
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            } else if (p.type === 'heart') {
                p.y -= p.speedY;
                p.x += Math.sin(p.y * 0.01) * 0.5;
                if (p.y < -20) {
                    p.y = this.height + 20;
                    p.x = Math.random() * this.width;
                }
                this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.alpha);
            }
        }

        // Render Fireworks
        for (let i = this.fireworks.length - 1; i >= 0; i--) {
            const f = this.fireworks[i];
            f.x += f.vx;
            f.y += f.vy;
            f.vy += 0.05; // gravity
            f.alpha -= f.decay;

            if (f.alpha <= 0) {
                this.fireworks.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.globalAlpha = f.alpha;
            this.ctx.fillStyle = f.color;
            this.ctx.beginPath();
            this.ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        // Render Confetti
        for (let i = this.confetti.length - 1; i >= 0; i--) {
            const c = this.confetti[i];
            c.y += c.vy;
            c.x += c.vx + Math.sin(c.y * 0.02);
            c.rotation += c.rotationSpeed;

            if (c.y > this.height) {
                if (this.isCelebrating) {
                    c.y = -20;
                    c.x = Math.random() * this.width;
                } else {
                    this.confetti.splice(i, 1);
                    continue;
                }
            }

            this.ctx.save();
            this.ctx.translate(c.x, c.y);
            this.ctx.rotate((c.rotation * Math.PI) / 180);
            this.ctx.fillStyle = c.color;

            if (c.shape === 'heart') {
                this.drawHeart(this.ctx, -c.size / 2, -c.size / 2, c.size, c.color, 0.9);
            } else {
                this.ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
            }
            this.ctx.restore();
        }

        requestAnimationFrame(() => this.animate());
    }
}

window.ParticleEngine = ParticleEngine;
