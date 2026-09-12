/* =========================================================
   Проекты. Чтобы добавить работу — добавьте объект в массив.
   Скриншоты: img/projects/<id>.jpg (1440×900, для hero)
              img/projects/<id>-full.jpg (1440×N, длинный — для прокрутки)
   ========================================================= */

window.PROJECTS = [
  {
    id: 'pc-bishkek',
    url: 'https://pc-bishkek.netlify.app',
    display: 'pc-bishkek.netlify.app',
    image: './img/projects/pc-bishkek-full.jpg',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    type: 'shop', // подставляется в форму при клике «Заказать похожий»
    ru: {
      name: 'PC Bishkek — сборки игровых ПК',
      tags: ['Каталог с корзиной', 'Бишкек'],
      desc: 'Магазин готовых сборок под заказ: клиент выбирает конфигурацию, сравнивает цены и оформляет заказ без звонка.',
      value: [
        'Каталог из 5 сборок с ценами, скидками и характеристиками',
        'Корзина и оформление заказа без регистрации',
        'Мобильная версия в приоритете — основной трафик с телефона',
        'Загрузка меньше секунды, сайт живёт на бесплатном хостинге'
      ]
    },
    en: {
      name: 'PC Bishkek — custom gaming PCs',
      tags: ['Catalogue with cart', 'Bishkek'],
      desc: 'A shop for made-to-order PC builds: the customer picks a configuration, compares prices and orders without a call.',
      value: [
        'Catalogue of 5 builds with prices, discounts and specs',
        'Cart and checkout without sign-up',
        'Mobile version first — most traffic comes from phones',
        'Loads in under a second and runs on free hosting'
      ]
    }
  },
  {
    id: 'shinedress',
    url: 'https://shinedress.online',
    display: 'shinedress.online',
    image: './img/projects/shinedress-full.jpg',
    stack: ['HTML', 'CSS', 'JavaScript', 'Домен .online'],
    type: 'landing',
    ru: {
      name: 'SHINE_DRESS — модный дом и ателье',
      tags: ['Лендинг для услуг', 'Бишкек'],
      desc: 'Сайт ателье с прокатом и пошивом платьев: услуги, lookbook, процесс работы и запись на примерку через WhatsApp.',
      value: [
        'Три услуги — прокат, покупка, индивидуальный пошив — с понятными условиями',
        'Lookbook на 12 образов ведёт в Instagram за новыми работами',
        'Запись на примерку в один клик — сразу в WhatsApp мастерской',
        'Адрес, режим работы и контакты — клиент не ищет их в соцсетях'
      ]
    },
    en: {
      name: 'SHINE_DRESS — fashion house and atelier',
      tags: ['Service landing page', 'Bishkek'],
      desc: 'A site for a dress rental and tailoring atelier: services, lookbook, the working process and fitting appointments via WhatsApp.',
      value: [
        'Three services — rental, purchase, custom tailoring — with clear terms',
        'A 12-look lookbook that leads to Instagram for new work',
        'One-click fitting appointment straight into the atelier\'s WhatsApp',
        'Address, opening hours and contacts — customers stop hunting for them on social media'
      ]
    }
  },
  {
    id: 'arka',
    url: 'https://erlan4761.github.io/sneakers-store-arka/',
    repo: 'https://github.com/erlan4761/sneakers-store-arka',
    display: 'erlan4761.github.io/sneakers-store-arka',
    image: './img/projects/arka-full.jpg',
    stack: ['HTML', 'Tailwind', 'JavaScript', 'GSAP', 'Lenis'],
    type: 'shop',
    ru: {
      name: 'ARKA — магазин обуви',
      tags: ['Одностраничный магазин', 'Премиум-сегмент'],
      desc: 'Одностраничный магазин ограниченной коллекции: каталог, фильтры, корзина и анимации уровня брендовых сайтов.',
      value: [
        '16 моделей с фильтром по категориям и корзиной',
        'Плавный скролл и анимации, которые удерживают внимание',
        'Дизайн под премиальную аудиторию: типографика, фото, ритм',
        'Одна страница — быстрое наполнение и простые правки'
      ]
    },
    en: {
      name: 'ARKA — footwear store',
      tags: ['Single-page store', 'Premium segment'],
      desc: 'A single-page store for a limited collection: catalogue, filters, cart and brand-level animations.',
      value: [
        '16 models with category filter and cart',
        'Smooth scrolling and animations that hold attention',
        'Design for a premium audience: typography, photography, rhythm',
        'One page — fast to fill and easy to edit'
      ]
    }
  }
];

var CHECK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* Собирает карточки и добавляет в конце приглашение «ваш проект» */
window.renderProjects = function (lang) {
  var grid = document.getElementById('projects-grid');
  if (!grid) return;
  var dict = window.I18N[lang] || window.I18N.ru;

  var html = window.PROJECTS.map(function (p) {
    var c = p[lang] || p.ru;
    var href = p.url || p.repo || '#';
    var primaryLabel = p.url ? dict['work.open'] : dict['work.code'];

    return (
      '<article class="project">' +
        '<a class="window project__window" href="' + escapeHtml(href) + '" target="_blank" rel="noopener" aria-label="' + escapeHtml(c.name) + '">' +
          '<div class="window__bar"><i></i><i></i><i></i><span class="window__url">' + escapeHtml(p.display) + '</span></div>' +
          '<div class="window__screen"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(c.name) + '" loading="lazy" width="1440" height="900"></div>' +
        '</a>' +
        '<div class="project__body">' +
          '<div class="project__meta">' +
            c.tags.map(function (t, i) { return '<span class="tag' + (i === 0 ? ' tag--lime' : '') + '">' + escapeHtml(t) + '</span>'; }).join('') +
          '</div>' +
          '<h3>' + escapeHtml(c.name) + '</h3>' +
          '<p class="project__desc">' + escapeHtml(c.desc) + '</p>' +
          '<ul class="project__value">' +
            c.value.map(function (v) { return '<li>' + CHECK_ICON + '<span>' + escapeHtml(v) + '</span></li>'; }).join('') +
          '</ul>' +
          '<div class="project__stack">' + p.stack.map(function (s) { return '<span>' + escapeHtml(s) + '</span>'; }).join('') + '</div>' +
          '<div class="project__actions">' +
            '<a class="btn btn--primary" href="' + escapeHtml(href) + '" target="_blank" rel="noopener">' + escapeHtml(primaryLabel) + '</a>' +
            '<a class="btn btn--ghost" href="#order" data-service="' + escapeHtml(p.type) + '">' + escapeHtml(dict['work.similar']) + '</a>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  html +=
    '<article class="project project--slot">' +
      '<div class="project__body">' +
        '<h3>' + escapeHtml(dict['work.slot.title']) + '</h3>' +
        '<p class="project__desc">' + escapeHtml(dict['work.slot.desc']) + '</p>' +
        '<div class="project__actions"><a class="btn btn--ghost" href="#order">' + escapeHtml(dict['work.slot.cta']) + '</a></div>' +
      '</div>' +
    '</article>';

  grid.innerHTML = html;

  // Прокрутка страницы внутри окна при наведении: считаем, насколько сдвинуть скриншот
  grid.querySelectorAll('.project__window').forEach(function (win) {
    var img = win.querySelector('img');
    var screen = win.querySelector('.window__screen');
    function setShift() {
      var shift = Math.max(0, img.offsetHeight - screen.offsetHeight);
      win.style.setProperty('--shift', '-' + shift + 'px');
      win.style.setProperty('--scroll-dur', Math.max(3, shift / 140) + 's');
    }
    if (img.complete) setShift(); else img.addEventListener('load', setShift);
    window.addEventListener('resize', setShift);
  });

  if (typeof window.onProjectsRendered === 'function') window.onProjectsRendered();
};
