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
     1. FLUID MAGNETIC CURSOR SUITE (Desktop Magnetic Attraction)
     ========================================================================== */
  function initInteractiveCursor() {
    if (isTouchDevice() || prefersReducedMotion()) return;

    const ring = document.getElementById('cursor-ring');
    const dot = document.getElementById('cursor-dot');
    const badgeText = document.getElementById('cursor-badge-text');

    if (!ring || !dot) return;

    let mouseX = -9999;
    let mouseY = -9999;
    let ringX = -9999;
    let ringY = -9999;
    let dotX = -9999;
    let dotY = -9999;

    let magneticTarget = null;
    let isActivated = false;

    // Track mouse position
    window.addEventListener('mousemove', (e) => {
      // Guard against synthetic 0,0 coordinates
      if (e.clientX <= 0 && e.clientY <= 0) return;

      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isActivated) {
        isActivated = true;
        ringX = dotX = mouseX;
        ringY = dotY = mouseY;
        ring.classList.add('cursor-active');
        dot.classList.add('cursor-active');
      }
    });

    window.addEventListener('mouseleave', () => {
      isActivated = false;
      ring.classList.remove('cursor-active');
      dot.classList.remove('cursor-active');
    });

    window.addEventListener('mousedown', () => {
      ring.classList.add('cursor-clicking');
    });

    window.addEventListener('mouseup', () => {
      ring.classList.remove('cursor-clicking');
    });

    // Attach magnetic listeners to buttons and interactive pills
    function attachMagneticElements() {
      const magneticSelectors = [
        '.btn-primary-hero',
        '.inquire-cta-pill',
        '.practice-pill',
        '.circle-nav-btn',
        '.btn-brand-yellow',
        '.btn-brand-outline',
        '.social-direct-pill',
        '.nav-item-link',
        '.brand-identity-wrap',
        '.btn-card-view-case-study',
        '.theme-toggle-btn',
        '.lang-toggle-btn',
        '.floating-scroll-top-btn',
        '.footer-top-btn'
      ];

      document.querySelectorAll(magneticSelectors.join(', ')).forEach((el) => {
        if (el._magneticAttached) return;
        el._magneticAttached = true;

        el.addEventListener('mouseenter', () => {
          magneticTarget = el;
          ring.classList.add('cursor-magnetic');
        });

        el.addEventListener('mouseleave', () => {
          magneticTarget = null;
          ring.classList.remove('cursor-magnetic');
          el.style.transform = '';
        });

        el.addEventListener('mousemove', (e) => {
          if (!magneticTarget) return;
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const pullStrength = 0.22;

          const dx = (e.clientX - centerX) * pullStrength;
          const dy = (e.clientY - centerY) * pullStrength;

          el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
        });
      });

      // Project Card Hover Mode -> transforms cursor to "VIEW ↗"
      document.querySelectorAll('.big-project-card').forEach((card) => {
        if (card._cursorAttached) return;
        card._cursorAttached = true;

        card.addEventListener('mouseenter', () => {
          ring.classList.add('cursor-card-hover');
          if (badgeText) {
            badgeText.textContent = 'VIEW ↗';
          }
        });

        card.addEventListener('mouseleave', () => {
          ring.classList.remove('cursor-card-hover');
          if (badgeText) {
            badgeText.textContent = '';
          }
        });
      });
    }

    attachMagneticElements();
    const observer = new MutationObserver(attachMagneticElements);
    const archiveGrid = document.getElementById('big-projects-container');
    if (archiveGrid) {
      observer.observe(archiveGrid, { childList: true });
    }

    // Smooth 60 FPS Lerp Loop
    function renderCursor() {
      const ringLerp = 0.2;
      const dotLerp = 0.88;

      ringX += (mouseX - ringX) * ringLerp;
      ringY += (mouseY - ringY) * ringLerp;

      dotX += (mouseX - dotX) * dotLerp;
      dotY += (mouseY - dotY) * dotLerp;

      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0)`;
      dot.style.transform = `translate3d(${dotX.toFixed(2)}px, ${dotY.toFixed(2)}px, 0)`;

      requestAnimationFrame(renderCursor);
    }

    requestAnimationFrame(renderCursor);
  }

  /* ==========================================================================
     2. REAL-TIME SCROLL READING PROGRESS & FLOATING TOP BUTTON ACTION
     ========================================================================== */
  function initScrollProgressAndHUD() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const floatingTopBtn = document.getElementById('floating-scroll-top-btn');
    const footerTopBtn = document.getElementById('footer-top-btn');
    let ticking = false;

    function scrollToTop(e) {
      if (e) e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (floatingTopBtn) {
      floatingTopBtn.addEventListener('click', scrollToTop);
    }
    if (footerTopBtn) {
      footerTopBtn.addEventListener('click', scrollToTop);
    }

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

      // Floating top button visibility toggle (icon only)
      if (floatingTopBtn) {
        if (scrollTop > 350) {
          floatingTopBtn.classList.add('is-visible');
        } else {
          floatingTopBtn.classList.remove('is-visible');
        }
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
     6. STUDIO ID CARD ARCHITECTURAL ELEVATION & 3D TACTILE TILT
     ========================================================================== */
  function initStudioCardInteractions() {
    if (isTouchDevice() || prefersReducedMotion()) return;
    const card = document.getElementById('hero-emblem-card');
    if (!card) return;

    let bounds;
    function updateBounds() {
      bounds = card.getBoundingClientRect();
    }

    card.addEventListener('mouseenter', () => {
      updateBounds();
      card.style.transition = 'none';
    });

    card.addEventListener('mousemove', (e) => {
      if (!bounds) updateBounds();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const halfWidth = bounds.width / 2;
      const halfHeight = bounds.height / 2;

      // Subtle tilt max 7 degrees
      const rotateX = ((mouseY - halfHeight) / halfHeight) * -6.5;
      const rotateY = ((mouseX - halfWidth) / halfWidth) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
      card.style.transform = '';
    });
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

  /* ==========================================================================
     12. HIGH-PRECISION EDITORIAL SCROLL SPY
     Synchronizes navigation active state with active section viewport
     ========================================================================== */
  function initScrollSpy() {
    const sections = ['about', 'work', 'skills', 'faq', 'contact'];
    const navLinks = document.querySelectorAll('.desktop-nav-wrap .nav-item-link');
    if (!navLinks.length) return;

    function onScrollSpy() {
      const scrollPos = (window.scrollY || window.pageYOffset) + 160;
      let currentSectionId = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            currentSectionId = sections[i];
            break;
          }
        }
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}` || (currentSectionId === 'about' && href === '#work' && scrollPos < 350)) {
          link.classList.add('active');
        } else if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    onScrollSpy();
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
    initScrollSpy();
  }
})();
