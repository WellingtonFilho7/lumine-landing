/* ============================================
   Instituto Lumine — Interações (Fase 3)
   ============================================ */

(function () {
  'use strict';

  /* -----------------------------------------
     0. NAVBAR — scroll state + hamburger toggle
     ----------------------------------------- */
  var siteHeader = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.site-nav-links');

  if (siteHeader) {
    var heroEl = document.querySelector('.section-hero');
    if (heroEl) {
      // Check immediately
      if (heroEl.getBoundingClientRect().bottom <= 0) {
        siteHeader.classList.add('scrolled');
      }

      var navObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            siteHeader.classList.remove('scrolled');
          } else {
            siteHeader.classList.add('scrolled');
          }
        });
      }, { threshold: 0 });

      navObserver.observe(heroEl);
    } else {
      // No hero (e.g. doar page) — always scrolled
      siteHeader.classList.add('scrolled');
    }
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  /* -----------------------------------------
     1. SCROLL SUAVE — links âncora
     ----------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* -----------------------------------------
     4. BOTÃO FLUTUANTE "DOAR"
     Aparece depois de passar o hero.
     ----------------------------------------- */
  var hero = document.querySelector('.section-hero');
  var floatingBtn = document.querySelector('.floating-doar');

  if (hero && floatingBtn) {
    // Checa imediatamente se o hero já saiu da viewport
    var heroRect = hero.getBoundingClientRect();
    if (heroRect.bottom <= 0) {
      floatingBtn.classList.add('visible');
    }

    // Observa mudanças contínuas
    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          floatingBtn.classList.remove('visible');
        } else {
          floatingBtn.classList.add('visible');
        }
      });
    }, { threshold: 0 });

    heroObserver.observe(hero);
  }

})();
