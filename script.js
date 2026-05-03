/**
 * FA.DEV Portfolio Core Script
 * Logic for Typewriter, Particles, Scroll, and Contact Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Inisialisasi AOS (Animate On Scroll) ---
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // --- 2. Efek Typewriter (Hero Section) ---
    const typewriterElement = document.getElementById('typewriter');
    const texts = ["Solusi Digital.", "Sistem IoT.", "Masa Depan.", "Aplikasi Web."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function handleTypewriter() {
        if (!typewriterElement) return;

        const currentText = texts[textIndex];
        
        typewriterElement.textContent = isDeleting 
            ? currentText.substring(0, charIndex--) 
            : currentText.substring(0, charIndex++);

        let speed = isDeleting ? 40 : 100;

        if (!isDeleting && charIndex > currentText.length) {
            isDeleting = true;
            speed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500; 
        }

        setTimeout(handleTypewriter, speed);
    }
    
    if (typewriterElement) handleTypewriter();

    // --- 3. Sistem Partikel (Background) ---
    const particleContainer = document.getElementById('particles-container');
    
    function createParticle() {
        if (!particleContainer) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 15 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        particle.style.setProperty('--x-end', `${(Math.random() - 0.5) * 300}px`);
        particle.style.setProperty('--y-end', `${-400}px`);
        particle.style.animationDuration = `${duration}s`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), duration * 1000);
    }

    if (particleContainer) {
        // Initial particles
        for(let i=0; i<20; i++) createParticle();
        // Spawning cycle
        setInterval(createParticle, 400);
    }

    // --- 4. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            window.scrollY > 80 
                ? navbar.classList.add('scrolled') 
                : navbar.classList.remove('scrolled');
        }
    });

    // --- 5. Footer Year ---
    const yearElement = document.getElementById('year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();

    // --- 6. Smooth Scroll for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * Global Contact Info Toggle
 */
function InfoKontak() {
    const container = document.getElementById("contactField");
    const btn = event.currentTarget;
    if (!container) return;

    if (container.classList.contains('active')) {
        container.classList.remove('active');
        container.innerHTML = `
            <a href="mailto:fazriahmad@example.com" class="text-3xl text-gray-400 hover:text-cyan-400 transition"><i class="bi bi-envelope"></i></a>
            <a href="https://wa.me/628123456789" class="text-3xl text-gray-400 hover:text-cyan-400 transition"><i class="bi bi-whatsapp"></i></a>
            <a href="https://linkedin.com/in/fazriahmad" class="text-3xl text-gray-400 hover:text-cyan-400 transition"><i class="bi bi-linkedin"></i></a>
        `;
        if(btn) btn.textContent = "Hubungi Saya";
    } else {
        container.classList.add('active');
        container.innerHTML = `
            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-fade-in w-full">
                <a href="mailto:fazriahmadmustaqim@gmail.com" 
                   class="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-cyan-400/30 text-cyan-400 rounded-2xl hover:bg-cyan-400 hover:text-black transition-all">
                    <i class="bi bi-envelope-fill"></i> Kirim Email
                </a>
                <a href="https://wa.me/6281284020220" 
                   target="_blank" 
                   class="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-green-400/30 text-green-400 rounded-2xl hover:bg-green-400 hover:text-black transition-all">
                    <i class="bi bi-whatsapp"></i> WhatsApp
                </a>
            </div>
        `;
        if(btn) btn.textContent = "Tutup Kontak";
    }
}
