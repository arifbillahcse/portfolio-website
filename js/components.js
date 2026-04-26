/**
 * components.js
 * Injects shared header and footer into every page.
 * Also handles: sticky header, mobile menu, active link, back-to-top.
 */

/* ============================================================
   NAV CONFIG  –  update links here, changes apply everywhere
   ============================================================ */
const NAV_LINKS = [
    { label: 'Home',       href: 'index.html'     },
    { label: 'About Us',   href: 'about.html'     },
    { label: 'Services',   href: 'services.html'  },
    { label: 'Portfolio',  href: 'portfolio.html' },
    { label: 'Blog',       href: 'blog.html'      },
    { label: 'Contact',    href: 'contact.html'   },
];

/* ============================================================
   SVG ICON HELPERS
   ============================================================ */
const icon = {
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    menu:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    x:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    arrowUp:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
    facebook:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    linkedin:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    whatsapp:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
};

/* ============================================================
   BUILD NAV LINKS HTML
   ============================================================ */
function buildNavLinks(extraClass = '') {
    return NAV_LINKS.map(({ label, href }) =>
        `<li class="nav-item">
            <a href="${href}" class="nav-link ${extraClass}">${label}</a>
        </li>`
    ).join('');
}

function buildPanelNavLinks() {
    return NAV_LINKS.map(({ label, href }) =>
        `<a href="${href}" class="nav-link">${label}</a>`
    ).join('');
}

/* ============================================================
   HEADER HTML
   ============================================================ */
const HEADER_HTML = `
<header class="site-header" id="siteHeader">
    <div class="header-inner">

        <!-- Logo -->
        <a href="index.html" class="header-logo" aria-label="Home">
            <span class="logo-text">Arif<span>Billah</span></span>
        </a>

        <!-- Primary Desktop Nav -->
        <nav class="primary-nav" aria-label="Primary navigation">
            <ul>
                ${buildNavLinks()}
            </ul>
        </nav>

        <!-- Right side: Hire Me + Hamburger -->
        <div class="header-right">
            <a href="contact.html" class="btn-hire">
                Hire Me ${icon.arrowRight}
            </a>
            <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<!-- Mobile overlay -->
<div class="mobile-overlay" id="mobileOverlay"></div>

<!-- Mobile slide-in panel -->
<div class="mobile-panel" id="mobilePanel" aria-hidden="true">

    <div class="panel-header">
        <a href="index.html" class="header-logo">
            <span class="logo-text">Arif<span>Billah</span></span>
        </a>
        <button class="panel-close" id="panelClose" aria-label="Close menu">
            ${icon.x}
        </button>
    </div>

    <p class="panel-desc">
        Linux System Administration · Cloud Security · WordPress Developer
    </p>

    <nav class="panel-nav" aria-label="Mobile navigation">
        ${buildPanelNavLinks()}
    </nav>

    <div class="panel-footer">
        <p class="find-label">Find with me</p>
        <div class="panel-social">
            <a href="https://www.facebook.com/arifbillah360" target="_blank" rel="noopener" aria-label="Facebook">
                ${icon.facebook}
            </a>
            <a href="https://linkedin.com/in/arifbillah360" target="_blank" rel="noopener" aria-label="LinkedIn">
                ${icon.linkedin}
            </a>
            <a href="https://api.whatsapp.com/send?phone=8801779440297" target="_blank" rel="noopener" aria-label="WhatsApp">
                ${icon.whatsapp}
            </a>
        </div>
    </div>
</div>
`;

/* ============================================================
   FOOTER HTML
   ============================================================ */
const FOOTER_HTML = `
<footer class="site-footer">
    <div class="footer-inner">

        <!-- Logo -->
        <a href="index.html" class="footer-logo header-logo" aria-label="Home">
            <span class="logo-text">Arif<span>Billah</span></span>
        </a>

        <!-- Nav links -->
        <nav class="footer-nav" aria-label="Footer navigation">
            ${NAV_LINKS.map(({ label, href }) => `<a href="${href}">${label}</a>`).join('')}
        </nav>

        <!-- Social icons -->
        <div class="footer-social">
            <a href="https://www.facebook.com/arifbillah360" target="_blank" rel="noopener" aria-label="Facebook">
                ${icon.facebook}
            </a>
            <a href="https://linkedin.com/in/arifbillah360" target="_blank" rel="noopener" aria-label="LinkedIn">
                ${icon.linkedin}
            </a>
            <a href="https://api.whatsapp.com/send?phone=8801779440297" target="_blank" rel="noopener" aria-label="WhatsApp">
                ${icon.whatsapp}
            </a>
        </div>

        <!-- Copyright -->
        <p class="footer-copy">
            &copy; <span class="year"></span> Md Arif Billah, CSE &mdash; All Rights Reserved.<br>
            <a href="https://softorio.com" target="_blank" rel="noopener">Softorio.com</a> &amp;
            <a href="https://hostorio.com" target="_blank" rel="noopener">Hostorio.com</a>
        </p>
    </div>
</footer>

<!-- Back to top -->
<button class="back-to-top" id="backToTop" aria-label="Back to top">
    ${icon.arrowUp}
</button>
`;

/* ============================================================
   INJECT COMPONENTS INTO THE PAGE
   ============================================================ */
function injectComponents() {
    const headerEl = document.getElementById('header-placeholder');
    const footerEl = document.getElementById('footer-placeholder');

    if (headerEl) headerEl.outerHTML = HEADER_HTML;
    if (footerEl) footerEl.outerHTML = FOOTER_HTML;
}

/* ============================================================
   SET ACTIVE NAV LINK
   Matches current filename against each nav href.
   ============================================================ */
function setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
    });
}

/* ============================================================
   STICKY HEADER – add shadow class on scroll
   ============================================================ */
function initStickyHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
    const hamburger  = document.getElementById('hamburger');
    const overlay    = document.getElementById('mobileOverlay');
    const panel      = document.getElementById('mobilePanel');
    const closeBtn   = document.getElementById('panelClose');

    if (!hamburger || !panel) return;

    function openMenu() {
        overlay.classList.add('visible');
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            panel.classList.add('active');
        });
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        overlay.classList.remove('active');
        panel.classList.remove('active');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // remove 'visible' after transition finishes
        overlay.addEventListener('transitionend', () => {
            overlay.classList.remove('visible');
        }, { once: true });
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && panel.classList.contains('active')) closeMenu();
    });

    // Close when a panel nav link is clicked
    panel.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/* ============================================================
   BACK-TO-TOP BUTTON
   ============================================================ */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================================
   UPDATE COPYRIGHT YEAR
   ============================================================ */
function updateYear() {
    document.querySelectorAll('.year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
}

/* ============================================================
   BOOT – run everything after DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    setActiveLink();
    initStickyHeader();
    initMobileMenu();
    initBackToTop();
    updateYear();
});
