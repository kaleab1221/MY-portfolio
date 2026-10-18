/**
 * ============================================================================
 * ✦ INTERACTIVE WEBSITE STYLE ENGINE
 * Designed for Kaleegziabher Fekede // KB CREATIVE Portfolio
 * ============================================================================
 * Key Interactive Features:
 * 1. Fluid Magnetic Cursor Suite with Lerp Physics & Contextual Badges ("VIEW ↗")
 * 2. Real-Time Golden Scroll Reading Progress Bar
 * 3. Floating Dynamic Island HUD Dock (Section Tracker & Top Return)
 * 4. Interactive Magnetic Button Pull (Elastic Cursor Gravitation)
 * 5. Horizontal Media Scrubbing (Hover-Scrub through 5 Project Perspectives)
 * 6. Interactive Click Ripple Feedback System
 * 7. Keyboard Navigation Suite (Arrow keys for Modal Slides, Escape to close)
 * 8. Studio ID Card 3D Tactile Flip & Shimmer Wave
 * ============================================================================
 */

(function () {
  'use strict';

  // Check if device supports hover/mouse (disable custom cursor on touchscreens)
  const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. FLUID MAGNETIC CURSOR SUITE (Replaced with Native Responsive Cursor)
     ========================================================================== */
  function initInteractiveCursor() {
    // Preserves native OS pointer precision and responsiveness without lag
  }

  /* ==========================================================================
     2. REAL-TIME SCROLL READING PROGRESS & FLOATING DYNAMIC ISLAND HUD
     ========================================================================== */
  function initScrollProgressAndHUD() {
    const progressBar = document.getElementById('scroll-progress-bar');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollMetrics();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    function updateScrollMetrics() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Update golden progress bar
      if (progressBar) {
        progressBar.style.width = `${progressPercent.toFixed(2)}%`;
      }
    }

    updateScrollMetrics();
  }

  /* ==========================================================================
     3. INTERACTIVE TOUCH SWIPE FOR PROJECT SLIDES (Mobile/Touch)
     ========================================================================== */
  function initCardScrubbing() {
    function attachScrubbing() {
      document.querySelectorAll('.big-project-card').forEach((card) => {
        if (card._scrubAttached) return;
        card._scrubAttached = true;

        const mediaWrap = card.querySelector('.carousel-media-wrap');
        const projectId = card.id ? card.id.replace('card-', '') : null;
        if (!mediaWrap || !projectId) return;

        // Smooth touch swipe support for mobile/tablet users
        if (isTouchDevice()) {
          let touchStartX = 0;
          let touchStartY = 0;
          mediaWrap.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches[0]) {
              touchStartX = e.touches[0].clientX;
              touchStartY = e.touches[0].clientY;
            }
          }, { passive: true });

          mediaWrap.addEventListener('touchend', (e) => {
            if (!e.changedTouches || !e.changedTouches[0]) return;
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            // Only trigger if horizontal swipe is prominent and larger than vertical swipe
            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
              if (typeof window.changeSlide === 'function') {
                window.changeSlide(e, projectId, diffX < 0 ? 1 : -1);
              }
            }
          }, { passive: true });
        }
      });
    }

    attachScrubbing();
    const grid = document.getElementById('big-projects-container');
    if (grid) {
      new MutationObserver(attachScrubbing).observe(grid, { childList: true });
    }
  }

  /* ==========================================================================
     4. INTERACTIVE CLICK FEEDBACK (Native CSS Active States)
     ========================================================================== */
  function initClickRipple() {
    // Replaced by high-precision, GPU-accelerated CSS active states
  }

  /* ==========================================================================
     5. KEYBOARD NAVIGATION SUITE
     Arrow keys cycle modal gallery, Escape dismisses
     ========================================================================== */
  function initKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('case-study-modal');
      if (!modal || !modal.classList.contains('active')) return;

      const thumbs = modal.querySelectorAll('.modal-thumb-btn');
      if (!thumbs.length) return;

      let activeIndex = -1;
      thumbs.forEach((thumb, idx) => {
        if (thumb.classList.contains('active')) activeIndex = idx;
      });

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (activeIndex + 1) % thumbs.length;
        thumbs[nextIndex].click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (activeIndex - 1 + thumbs.length) % thumbs.length;
        thumbs[prevIndex].click();
      }
    });
  }

  /* ==========================================================================
     6. STUDIO ID CARD ARCHITECTURAL ELEVATION
     ========================================================================== */
  function initStudioCardInteractions() {
    // Uses clean architectural card elevation defined in CSS
  }

  /* ==========================================================================
     7. SCROLL-REVEAL & STORYTELLING CASCADE ENGINE
     Smooth 60fps GPU-accelerated reveals for headings, cards, and sections
     ========================================================================== */
  function initScrollReveal() {
    const isReduced = prefersReducedMotion();

    function revealElement(el) {
      el.classList.add('is-revealed');
      if (el.classList.contains('big-project-card')) {
        el.classList.add('cascade-revealed');
      }
    }

    if (isReduced) {
      document.querySelectorAll('.reveal-on-scroll, .big-project-card').forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    function observeElements() {
      document.querySelectorAll('.reveal-on-scroll:not(._revealObserved)').forEach((el) => {
        el._revealObserved = true;
        observer.observe(el);
      });

      document.querySelectorAll('.big-project-card:not(._cascadeAttached)').forEach((card) => {
        card._cascadeAttached = true;
        card.classList.add('cascade-item');
        observer.observe(card);
      });
    }

    observeElements();
    const container = document.getElementById('big-projects-container');
    if (container) {
      new MutationObserver(observeElements).observe(container, { childList: true });
    }
  }

  /* ==========================================================================
     8. ANIMATED NUMBER COUNTERS FOR KEY STATISTICS
     Counts up smoothly from 0 to target value on scroll into view
     ========================================================================== */
  function initNumberCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const isReduced = prefersReducedMotion();

    function startCounter(el) {
      if (el._counterAnimated) return;
      el._counterAnimated = true;

      const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';

      if (isReduced) {
        el.textContent = `${prefix}${target}${suffix}`;
        return;
      }

      const duration = 1200;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutQuad
        const ease = progress * (2 - progress);
        const currentVal = Math.floor(ease * target);

        el.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     9. SUBTLE PARALLAX & GRID MOVEMENT IN HERO BACKGROUND
     Gentle mouse tracking and scroll-driven parallax (desktop only)
     ========================================================================== */
  function initHeroGridParallax() {
    if (isTouchDevice() || prefersReducedMotion()) return;

    const heroSection = document.getElementById('about');
    const heroBgArt = document.getElementById('hero-bg-art');
    if (!heroSection || !heroBgArt) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTracking = false;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

      targetX = normX * 14; // max 14px displacement
      targetY = normY * 10; // max 10px displacement

      if (!isTracking) {
        isTracking = true;
        requestAnimationFrame(updateGrid);
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    function updateGrid() {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      heroBgArt.style.setProperty('--hero-grid-x', `${currentX.toFixed(2)}px`);
      heroBgArt.style.setProperty('--hero-grid-y', `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        requestAnimationFrame(updateGrid);
      } else {
        isTracking = false;
      }
    }

    // Scroll parallax offset
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY < window.innerHeight) {
        const offset = scrollY * 0.06;
        heroBgArt.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     10. KINETIC TYPOGRAPHY HEADLINE MICRO-INTERACTIONS
     ========================================================================== */
  function initKineticTypographyInteractions() {
    const kineticTitle = document.querySelector('.hero-main-title');
    if (!kineticTitle) return;

    kineticTitle.classList.add('kinetic-title');
    const words = kineticTitle.querySelectorAll('.highlight-yellow, .outline-text');
    words.forEach(w => w.classList.add('kinetic-word'));
  }

  /* ==========================================================================
     11. CLEAN MOBILE NAVIGATION DRAWER & ACCESSIBILITY
     ========================================================================== */
  function initMobileNavigation() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const closeBtn = document.getElementById('mobile-nav-close');
    if (!toggleBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.add('active');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDrawer();
      });
    }

    // Close when clicking directly on backdrop
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    window.closeMobileNav = closeDrawer;
  }

  // Self Initialization on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initInteractiveCursor();
    initScrollProgressAndHUD();
    initCardScrubbing();
    initClickRipple();
    initKeyboardNavigation();
    initStudioCardInteractions();
    initScrollReveal();
    initNumberCounters();
    initHeroGridParallax();
    initKineticTypographyInteractions();
    initMobileNavigation();
  }
})();
