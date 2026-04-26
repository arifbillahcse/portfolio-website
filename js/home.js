/* ============================================================
   HOME PAGE JS  –  Md Arif Billah Portfolio
   ============================================================ */

/* ── Scroll Reveal via IntersectionObserver ── */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}

/* ── Hero typing effect ── */
function initTyping() {
    const el = document.getElementById('heroTyped');
    if (!el) return;

    const phrases = [
        'Linux System Admin',
        'Cloud Security Expert',
        'WordPress Developer',
        'DevOps Engineer',
    ];

    let pIdx = 0, cIdx = 0, deleting = false;

    function tick() {
        const phrase = phrases[pIdx];
        if (deleting) {
            cIdx--;
            el.textContent = phrase.slice(0, cIdx);
            if (cIdx === 0) {
                deleting = false;
                pIdx = (pIdx + 1) % phrases.length;
                setTimeout(tick, 400);
                return;
            }
            setTimeout(tick, 38);
        } else {
            cIdx++;
            el.textContent = phrase.slice(0, cIdx);
            if (cIdx === phrase.length) {
                setTimeout(() => { deleting = true; tick(); }, 2200);
                return;
            }
            setTimeout(tick, 75);
        }
    }
    setTimeout(tick, 800);
}

/* ── Animated counters ── */
function initCounters() {
    const items = document.querySelectorAll('.stat-item .num[data-target]');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            const suffix = el.dataset.suffix || '';
            let current = 0;
            const duration = 1200;
            const stepTime = 16;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
                current = Math.min(current + increment, target);
                el.textContent = Math.round(current) + suffix;
                if (current >= target) clearInterval(timer);
            }, stepTime);

            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    items.forEach(el => observer.observe(el));
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
    /* Hero elements skip scroll-reveal (already in view) */
    setTimeout(() => {
        document.querySelectorAll('.hero-section .reveal-left').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
        });
        document.querySelectorAll('.hero-section .reveal-right').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), 200 + i * 120);
        });
    }, 80);

    initScrollReveal();
    initTyping();
    initCounters();
});
