/* ═══════════════════════════════════════════════════════
   ALEXIS LECHAT — PORTFOLIO INTERACTIONS
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // ── NAV SCROLL EFFECT ─────────────────────────────
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // ── HERO PARALLAX ─────────────────────────────────────
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.12}px)`;
      } else {
        heroContent.style.transform = '';
      }
    }, { passive: true });
  }

  // ── MOBILE MENU ───────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  // ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // ── REVEAL ON SCROLL ──────────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // ── SKILL BAR ANIMATION ───────────────────────────
  const bars = document.querySelectorAll('.comp-card__fill');

  bars.forEach(bar => {
    bar.dataset.targetWidth = bar.style.width;
    bar.style.width = '0';
  });

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.width = target.dataset.targetWidth;
        barObserver.unobserve(target);
      }
    });
  }, {
    threshold: 0.3
  });

  bars.forEach(bar => barObserver.observe(bar));

  // ── TABS NAVIGATION ───────────────────────────────
  document.querySelectorAll('.tabs').forEach(tabContainer => {
  const buttons = tabContainer.querySelectorAll('.tabs__btn');
  const panels = tabContainer.querySelectorAll('.tabs__panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');

      const newBars = document.getElementById(tabId).querySelectorAll('.comp-card__fill');

      newBars.forEach(bar => {
        barObserver.unobserve(bar);
        bar.style.width = '0';
        void bar.offsetWidth;
        bar.style.width = bar.dataset.targetWidth;
      });
    });
  });
});
  // ── ACTIVE NAV LINK ───────────────────────────────
  const sections = document.querySelectorAll('.section, .hero');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav__links a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => activeObserver.observe(section));

  // ── PROOF MODALS ──────────────────────────────────────
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.getAttribute('data-modal'));
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.proof-modal').forEach(modal => {
    modal.querySelector('.proof-modal__backdrop').addEventListener('click', () => closeModal(modal));
    modal.querySelector('.proof-modal__close').addEventListener('click', () => closeModal(modal));
  });

  // ── LIGHTBOX ──────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox__img');

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const openLightbox = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  document.querySelectorAll('.gallery-item img').forEach(img => {
    if (img.closest('.interest-modal__gallery')) return;
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    });
  });

  lightbox.querySelector('.lightbox__backdrop').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('open')) {
        closeLightbox();
      } else {
        document.querySelectorAll('.proof-modal.open').forEach(modal => closeModal(modal));
      }
    }
  });
});
