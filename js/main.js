/* =========================================================
   Поведение страницы: язык, навигация, плавный скролл,
   вступительная анимация, появление блоков, форма заказа.
   Все анимации выключаются при prefers-reduced-motion.
   ========================================================= */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || location.search.indexOf('noanim') !== -1;
  var hasGsap = typeof gsap !== 'undefined';
  var hasLenis = typeof Lenis !== 'undefined';
  var navH = 72;

  /* ---------- Язык ---------- */
  var savedLang = null;
  try { savedLang = localStorage.getItem('lang'); } catch (e) {}
  var startLang = savedLang || (/^ru/i.test(navigator.language) ? 'ru' : 'ru'); // ru по умолчанию для всех
  window.applyLang(startLang);

  document.getElementById('lang-toggle').addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-lang') === 'ru' ? 'en' : 'ru';
    window.applyLang(next);
  });

  /* ---------- Год в футере ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Плавный скролл ---------- */
  var lenis = null;
  if (hasLenis && !reduceMotion) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (hasGsap) {
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
    }
  }

  function scrollToTarget(target) {
    if (lenis) {
      lenis.scrollTo(target, { offset: -navH + 1, duration: 1.2 });
    } else {
      var top = target.getBoundingClientRect().top + window.pageYOffset - navH + 1;
      window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  /* ---------- Навигация ---------- */
  var nav = document.querySelector('.nav');
  var links = document.getElementById('nav-links');
  var burger = document.getElementById('burger');

  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  // Якорные ссылки — через плавный скролл; клики по «Заказать похожий» подставляют тип сайта
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    var target = id ? document.getElementById(id) : document.body;
    if (!target) return;
    e.preventDefault();

    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');

    var service = a.getAttribute('data-service');
    if (service) {
      var select = document.getElementById('f-type');
      if (select) select.value = service;
    }
    scrollToTarget(target);
  });

  // Подсветка активного раздела
  var sections = ['work', 'why', 'services', 'process'].map(function (id) { return document.getElementById(id); });
  var navAnchors = links.querySelectorAll('a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navAnchors.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { if (s) io.observe(s); });
  }

  /* ---------- Вступительная анимация hero ---------- */
  var heroCopy = document.querySelectorAll('.hero__copy > *');
  var heroWindows = document.querySelectorAll('.hero__visual .window');

  if (hasGsap && !reduceMotion) {
    var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .fromTo(heroCopy, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0.1)
      .fromTo(heroWindows[0], { opacity: 0, y: 60, rotate: 6 }, { opacity: 1, y: 0, rotate: 3, duration: 1.2 }, 0.3)
      .fromTo(heroWindows[1], { opacity: 0, y: 80, rotate: -7 }, { opacity: 1, y: 0, rotate: -3, duration: 1.2 }, 0.45);
  } else {
    heroCopy.forEach(function (el) { el.style.opacity = 1; });
    heroWindows.forEach(function (el) { el.style.opacity = 1; });
  }

  // Лёгкий параллакс окон за курсором (только для мыши)
  var visual = document.getElementById('hero-visual');
  if (visual && hasGsap && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    var wins = Array.prototype.slice.call(heroWindows);
    visual.closest('.hero').addEventListener('mousemove', function (e) {
      var r = visual.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      wins.forEach(function (w) {
        var depth = parseFloat(w.getAttribute('data-depth')) || 10;
        gsap.to(w, { x: dx * depth, y: dy * depth, duration: 1.2, ease: 'power2.out', overwrite: 'auto' });
      });
    });
  }

  /* ---------- Появление блоков при скролле ---------- */
  var revealSelector = '.section__head, .project, .bento__item, .service, .step, .order__copy, .form';

  function setupReveal() {
    var items = document.querySelectorAll(revealSelector + ':not(.reveal)');
    if (reduceMotion) return;
    items.forEach(function (el) { el.classList.add('reveal'); });

    if (hasGsap && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: function (batch) {
          batch.forEach(function (el, i) {
            setTimeout(function () { el.classList.add('is-visible'); }, i * 90);
          });
        }
      });
    } else if ('IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-visible'); ro.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -10% 0px' });
      items.forEach(function (el) { ro.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }
  setupReveal();
  // После перерисовки проектов (смена языка) — заново подключаем reveal
  window.onProjectsRendered = function () {
    setupReveal();
    if (hasGsap && typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  };
  window.onProjectsRendered();

  /* ---------- «Магнитные» кнопки ---------- */
  if (hasGsap && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - (r.left + r.width / 2)) * 0.25;
        var y = (e.clientY - (r.top + r.height / 2)) * 0.35;
        gsap.to(btn, { x: x, y: y, duration: 0.5, ease: 'power3.out' });
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
      });
    });
  }

  /* ---------- Форма заказа (Formspree) ---------- */
  var form = document.getElementById('order-form');
  var result = document.getElementById('form-result');
  var submitBtn = form.querySelector('button[type="submit"]');

  function showResult(kind, text) {
    result.className = 'form__result ' + (kind === 'ok' ? 'is-ok' : 'is-err');
    result.textContent = text;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.elements.name;
    var contact = form.elements.contact;
    var valid = true;
    [name, contact].forEach(function (f) {
      var bad = !f.value.trim();
      f.classList.toggle('is-invalid', bad);
      if (bad) valid = false;
    });
    if (!valid) { showResult('err', window.t('form.required')); return; }

    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      showResult('err', 'Формa не подключена: замените YOUR_FORM_ID в index.html на ID из formspree.io');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.firstElementChild.textContent = window.t('form.sending');

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function () {
        form.classList.add('is-sent');
        showResult('ok', window.t('form.ok'));
        form.reset();
      })
      .catch(function () {
        showResult('err', window.t('form.err'));
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.firstElementChild.textContent = window.t('form.submit');
      });
  });

  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('is-invalid') && e.target.value.trim()) e.target.classList.remove('is-invalid');
  });
})();
