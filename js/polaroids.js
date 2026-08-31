/**
 * Interactive Polaroid Memory Gallery & Photo Wall with Lightbox
 */
class PolaroidsSystem {
    constructor() {
        this.polaroidsContainer = document.getElementById('polaroidsGrid');
        this.reelContainer = document.getElementById('photoReelGrid');
        this.lightbox = document.getElementById('lightboxModal');
        this.lightboxImg = document.getElementById('lightboxImg');
        this.lightboxClose = document.getElementById('lightboxCloseBtn');

        this.init();
    }

    init() {
        this.renderPolaroids();
        this.renderPhotoReel();
        this.bindTiltEffect();
        this.bindLightboxEvents();
    }

    renderPolaroids() {
        if (!this.polaroidsContainer || !CONFIG?.polaroids) return;
        this.polaroidsContainer.innerHTML = '';
        CONFIG.polaroids.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'polaroid-card';

            card.innerHTML = `
                <div class="polaroid-tape"></div>
                <div class="polaroid-img-wrapper" style="background: ${item.fallbackBg || '#331d45'}">
                    <img class="polaroid-img" 
                         src="${item.image}" 
                         alt="${item.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                    <div class="polaroid-fallback-content" style="display: none; width:100%; height:100%; align-items:center; justify-content:center; flex-direction:column; color:#fff; text-align:center; padding:1rem;">
                        <span style="font-size: 3rem; margin-bottom: 0.5rem;">📸❤️</span>
                        <span style="font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 600;">${item.title}</span>
                    </div>
                </div>
                <div class="polaroid-caption-area">
                    <h4 class="polaroid-title">${item.title}</h4>
                    <p class="polaroid-caption">"${item.caption}"</p>
                    <span class="polaroid-date-badge">${item.date}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                this.openLightbox(item.image);
            });

            this.polaroidsContainer.appendChild(card);
        });
    }

    renderPhotoReel() {
        if (!this.reelContainer || !CONFIG?.galleryPhotos) return;
        this.reelContainer.innerHTML = '';
        CONFIG.galleryPhotos.forEach((photoPath, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-photo-item';
            item.innerHTML = `
                <img src="${photoPath}" alt="Pari and Aryan memory ${index + 1}" loading="lazy" />
                <div class="gallery-photo-overlay">
                    <span>View Memory ✨</span>
                </div>
            `;

            item.addEventListener('click', () => {
                this.openLightbox(photoPath);
            });

            this.reelContainer.appendChild(item);
        });
    }

    openLightbox(imageSrc) {
        if (!this.lightbox || !this.lightboxImg) return;
        this.lightboxImg.src = imageSrc;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        if (!this.lightbox) return;
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    bindLightboxEvents() {
        if (this.lightboxClose) {
            this.lightboxClose.addEventListener('click', () => this.closeLightbox());
        }

        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.closeLightbox();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox?.classList.contains('active')) {
                this.closeLightbox();
            }
        });
    }

    bindTiltEffect() {
        const cards = document.querySelectorAll('.polaroid-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (centerY - y) / 10;
                const rotateY = (x - centerX) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

window.PolaroidsSystem = PolaroidsSystem;
