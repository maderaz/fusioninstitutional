/* ── Theme Toggle ── */
(function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function updateIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? 'none' : 'block';
      moonIcon.style.display = isDark ? 'block' : 'none';
    }
  }

  toggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('fusion-theme', isDark ? 'dark' : 'light');
    updateIcon();
  });

  updateIcon();
})();

/* ── Mobile Menu ── */
(function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  if (!btn || !menu) return;

  function open() {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    if (overlay) {
      overlay.classList.remove('hidden');
      overlay.classList.add('block');
    }
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0');
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.classList.remove('block');
    }
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    const isOpen = !menu.classList.contains('translate-x-full');
    isOpen ? close() : open();
  });

  if (overlay) overlay.addEventListener('click', close);

  // Close on link click
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', close);
  });
})();

/* ── Cookie Banner ── */
(function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('fusion-cookies') !== null) {
    banner.classList.add('hidden-banner');
    return;
  }

  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');

  function dismiss(val) {
    localStorage.setItem('fusion-cookies', val);
    banner.classList.add('hidden-banner');
  }

  if (accept) accept.addEventListener('click', function () { dismiss('accepted'); });
  if (decline) decline.addEventListener('click', function () { dismiss('declined'); });
})();

/* ── Scroll Reveal ── */
(function initScrollReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { observer.observe(el); });
})();

/* ── Force grayscale on logos ── */
(function initLogoGray() {
  var isDark = document.documentElement.classList.contains('dark');
  function getFilter() {
    return document.documentElement.classList.contains('dark')
      ? 'grayscale(100%)'
      : 'grayscale(100%) brightness(0)';
  }
  document.querySelectorAll('.logo-gray').forEach(function (img) {
    img.style.filter = getFilter();
    img.style.opacity = '0.5';
    img.addEventListener('mouseenter', function () {
      img.style.filter = 'none';
      img.style.opacity = '1';
    });
    img.addEventListener('mouseleave', function () {
      img.style.filter = getFilter();
      img.style.opacity = '0.5';
    });
  });
  // Re-apply on theme toggle
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      setTimeout(function () {
        document.querySelectorAll('.logo-gray').forEach(function (img) {
          if (img.style.opacity === '0.5') {
            img.style.filter = getFilter();
          }
        });
      }, 50);
    });
  }
})();

/* ── Sticky Nav ── */
(function initStickyNav() {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var scrolled = false;
  window.addEventListener('scroll', function () {
    var isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      scrolled = isScrolled;
      if (scrolled) {
        nav.classList.add('shadow-lg');
      } else {
        nav.classList.remove('shadow-lg');
      }
    }
  });
})();
