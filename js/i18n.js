/* =========================================================
   Переводы. Ключ → текст. Русский — язык по умолчанию.
   Элементы помечаются data-i18n="ключ" (текст)
   или data-i18n-placeholder="ключ" (placeholder у полей).
   ========================================================= */

window.I18N = {
  ru: {
    'nav.work': 'Работы',
    'nav.why': 'Почему я',
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.cta': 'Заказать сайт',

    'hero.status': 'Принимаю заказы на сентябрь',
    'hero.title': 'Готовый сайт для вашего бизнеса. Запуск за 7–⁠14 дней.',
    'hero.lead': 'Делаю быстрые продающие сайты для магазинов и услуг в Бишкеке: каталог, корзина, заявки прямо в Telegram. Вы получаете готовый продукт, а не проект на полгода.',
    'hero.cta1': 'Получить расчёт',
    'hero.cta2': 'Смотреть работы',
    'hero.fact1': 'Фиксированная цена и срок',
    'hero.fact2': 'Код и домен остаются вам',
    'hero.fact3': 'Загрузка меньше секунды',

    'work.title': 'Сайты, которые уже продают',
    'work.sub': 'Наведите на экран — страница прокрутится. Каждый проект открывается вживую.',
    'work.open': 'Открыть сайт',
    'work.similar': 'Заказать похожий',
    'work.code': 'Код на GitHub',
    'work.slot.title': 'Здесь будет ваш сайт',
    'work.slot.desc': 'Следующий проект в этом списке может быть вашим. Расскажите о задаче — через две недели покажу его здесь.',
    'work.slot.cta': 'Обсудить проект',

    'why.title': 'Почему готовый сайт у меня, а не конструктор или студия',
    'why.sub': 'Конструктор берёт абонентку и ограничивает дизайн. Студия считает часы. Я отдаю готовый результат за понятную цену.',
    'why.1.t': 'Цена и срок фиксируются до старта',
    'why.1.d': 'Договариваемся о стоимости и дате запуска на первом созвоне. Ничего не меняется по ходу — вы точно знаете, что и когда получите.',
    'why.2.t': 'Всё ваше: код, домен, хостинг',
    'why.2.d': 'Никаких абонентских платежей и привязки ко мне. Сайт можно передать любому разработчику.',
    'why.3.t': 'Скорость, которую видно',
    'why.3.d': 'Страницы открываются меньше чем за секунду даже на слабом мобильном интернете. Google это учитывает при ранжировании.',
    'why.4.t': 'Сначала телефон',
    'why.4.d': 'Большинство ваших клиентов зайдут с телефона. Дизайн и проверка начинаются с мобильной версии, а не заканчиваются ею.',
    'why.5.t': 'Заявки идут туда, где вы уже отвечаете',
    'why.5.d': 'Форма заказа, кнопки WhatsApp и Telegram, оплата и доставка так, как принято в Бишкеке. Клиенту не нужно регистрироваться, чтобы купить.',
    'why.6.t': '30 дней правок после запуска',
    'why.6.d': 'Поменять фото, цены, тексты, добавить товар — бесплатно в первый месяц. Дальше — по договорённости или сами: покажу как.',

    'services.title': 'Что можно заказать',
    'services.sub': 'Три формата под разные задачи. Не уверены, какой нужен — напишите, подберём вместе.',
    'services.time': 'Срок',
    'services.cta': 'Рассчитать стоимость',
    'services.popular': 'Чаще всего заказывают',
    'services.1.t': 'Лендинг',
    'services.1.for': 'Для услуг, мастеров, кафе, мероприятий — когда нужна одна страница, которая ведёт к звонку или заявке.',
    'services.1.i1': 'Одна страница, до 8 блоков',
    'services.1.i2': 'Форма заявки в Telegram или на почту',
    'services.1.i3': 'Кнопки WhatsApp и звонка',
    'services.1.i4': 'Карта, отзывы, галерея',
    'services.1.time': '5–7 дней',
    'services.2.t': 'Каталог или магазин',
    'services.2.for': 'Для товаров и сборок под заказ — когда клиент должен выбрать, сравнить и оформить заказ без звонка.',
    'services.2.i1': 'Каталог до 50 позиций с фильтрами',
    'services.2.i2': 'Корзина и заказ без регистрации',
    'services.2.i3': 'Уведомление о заказе в Telegram',
    'services.2.i4': 'Простое добавление товаров без программиста',
    'services.2.time': '10–14 дней',
    'services.3.t': 'Индивидуальный проект',
    'services.3.for': 'Для нестандартных задач: личный кабинет, калькулятор, бронирование, интеграция с вашей системой учёта.',
    'services.3.i1': 'Техническое задание вместе с вами',
    'services.3.i2': 'Дизайн-макет до начала разработки',
    'services.3.i3': 'Поэтапная сдача и оплата',
    'services.3.i4': 'Документация и обучение команды',
    'services.3.time': 'от 3 недель',

    'process.title': 'Как проходит работа',
    'process.sub': 'Четыре шага от первого сообщения до сайта, который работает.',
    'process.1.t': 'Бриф — 30 минут',
    'process.1.d': 'Созваниваемся или переписываемся: что продаёте, кому, какие сайты нравятся. Я называю цену и дату запуска.',
    'process.2.t': 'Макет — 2 дня',
    'process.2.d': 'Показываю дизайн главной страницы на телефоне и компьютере. Правим, пока вам не понравится — до кода.',
    'process.3.t': 'Разработка',
    'process.3.d': 'Собираю сайт, подключаю форму, наполняю вашими товарами и текстами. Каждые два дня присылаю ссылку на прогресс.',
    'process.4.t': 'Запуск и передача',
    'process.4.d': 'Подключаю домен, настраиваю аналитику, показываю, как менять цены и добавлять товары. Сайт и доступы — у вас.',

    'order.title': 'Расскажите о задаче — отвечу в течение дня',
    'order.sub': 'Достаточно пары предложений. Если удобнее голосом — напишите в мессенджер, созвонимся.',
    'order.email': 'Почта',

    'form.name': 'Как к вам обращаться',
    'form.namePh': 'Айгуль',
    'form.contact': 'Telegram, WhatsApp или телефон',
    'form.contactPh': '+996 ...',
    'form.type': 'Какой сайт нужен',
    'form.typeLanding': 'Лендинг — одна страница',
    'form.typeShop': 'Каталог или магазин',
    'form.typeCustom': 'Индивидуальный проект',
    'form.typeUnsure': 'Пока не знаю — подскажите',
    'form.msg': 'Пара слов о бизнесе',
    'form.msgPh': 'Продаю кроссовки в Instagram, хочу сайт с каталогом и корзиной',
    'form.submit': 'Отправить заявку',
    'form.sending': 'Отправляю…',
    'form.note': 'Без спама и рассылок. Отвечаю лично.',
    'form.ok': 'Заявка отправлена. Отвечу в течение дня — проверьте мессенджер, который указали.',
    'form.err': 'Не удалось отправить. Напишите мне напрямую в Telegram или WhatsApp — ссылки слева.',
    'form.required': 'Заполните имя и контакт, чтобы я мог ответить.',

    'footer.role': '— разработка сайтов, Бишкек'
  },

  en: {
    'nav.work': 'Work',
    'nav.why': 'Why me',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.cta': 'Order a website',

    'hero.status': 'Taking orders for September',
    'hero.title': 'A ready-to-launch website for your business. Live in 7–14 days.',
    'hero.lead': 'I build fast, sales-focused websites for shops and services in Bishkek: catalogue, cart, and enquiries straight to Telegram. You get a finished product, not a six-month project.',
    'hero.cta1': 'Get a quote',
    'hero.cta2': 'See the work',
    'hero.fact1': 'Fixed price and deadline',
    'hero.fact2': 'You own the code and domain',
    'hero.fact3': 'Loads in under a second',

    'work.title': 'Websites that already sell',
    'work.sub': 'Hover over a screen and the page scrolls. Every project opens live.',
    'work.open': 'Open website',
    'work.similar': 'Order one like this',
    'work.code': 'Code on GitHub',
    'work.slot.title': 'Your website goes here',
    'work.slot.desc': 'The next project in this list could be yours. Tell me about the task and I will show it here in two weeks.',
    'work.slot.cta': 'Discuss a project',

    'why.title': 'Why buy a ready-made site from me, not a builder or an agency',
    'why.sub': 'Builders charge monthly and limit the design. Agencies bill by the hour. I deliver a finished result for a clear price.',
    'why.1.t': 'Price and deadline fixed before we start',
    'why.1.d': 'We agree the cost and launch date on the first call. Nothing changes along the way — you know exactly what you get and when.',
    'why.2.t': 'Everything is yours: code, domain, hosting',
    'why.2.d': 'No subscriptions and no lock-in. The site can be handed to any developer.',
    'why.3.t': 'Speed you can see',
    'why.3.d': 'Pages open in under a second even on a weak mobile connection. Google counts that in rankings.',
    'why.4.t': 'Phone first',
    'why.4.d': 'Most of your customers arrive on a phone. Design and testing start with the mobile version rather than end with it.',
    'why.5.t': 'Enquiries go where you already answer',
    'why.5.d': 'Order form, WhatsApp and Telegram buttons, payment and delivery the way it is done in Bishkek. Customers never need an account to buy.',
    'why.6.t': '30 days of edits after launch',
    'why.6.d': 'Swap photos, prices, texts, add a product — free in the first month. After that by agreement, or do it yourself: I will show you how.',

    'services.title': 'What you can order',
    'services.sub': 'Three formats for different needs. Not sure which one — write to me and we will pick together.',
    'services.time': 'Timeline',
    'services.cta': 'Get a quote',
    'services.popular': 'Most popular',
    'services.1.t': 'Landing page',
    'services.1.for': 'For services, craftspeople, cafés, events — when one page should lead to a call or an enquiry.',
    'services.1.i1': 'One page, up to 8 sections',
    'services.1.i2': 'Enquiry form to Telegram or email',
    'services.1.i3': 'WhatsApp and call buttons',
    'services.1.i4': 'Map, reviews, gallery',
    'services.1.time': '5–7 days',
    'services.2.t': 'Catalogue or shop',
    'services.2.for': 'For products and made-to-order builds — when the customer should choose, compare and order without a call.',
    'services.2.i1': 'Catalogue up to 50 items with filters',
    'services.2.i2': 'Cart and checkout without sign-up',
    'services.2.i3': 'Order notifications in Telegram',
    'services.2.i4': 'Add products yourself, no developer needed',
    'services.2.time': '10–14 days',
    'services.3.t': 'Custom project',
    'services.3.for': 'For non-standard tasks: user accounts, calculators, booking, integration with your inventory system.',
    'services.3.i1': 'Specification written together',
    'services.3.i2': 'Design mock-up before development',
    'services.3.i3': 'Staged delivery and payment',
    'services.3.i4': 'Documentation and team training',
    'services.3.time': 'from 3 weeks',

    'process.title': 'How the work goes',
    'process.sub': 'Four steps from the first message to a website that works.',
    'process.1.t': 'Brief — 30 minutes',
    'process.1.d': 'A call or a chat: what you sell, to whom, which sites you like. I name the price and the launch date.',
    'process.2.t': 'Mock-up — 2 days',
    'process.2.d': 'I show the home page design on phone and desktop. We refine it until you like it — before any code.',
    'process.3.t': 'Development',
    'process.3.d': 'I build the site, connect the form, fill it with your products and texts. Every two days you get a progress link.',
    'process.4.t': 'Launch and handover',
    'process.4.d': 'I connect the domain, set up analytics and show you how to change prices and add products. The site and all access are yours.',

    'order.title': 'Tell me about the task — I reply within a day',
    'order.sub': 'A couple of sentences is enough. Prefer talking? Message me and we will set up a call.',
    'order.email': 'Email',

    'form.name': 'Your name',
    'form.namePh': 'Aigul',
    'form.contact': 'Telegram, WhatsApp or phone',
    'form.contactPh': '+996 ...',
    'form.type': 'What kind of website',
    'form.typeLanding': 'Landing page — one page',
    'form.typeShop': 'Catalogue or shop',
    'form.typeCustom': 'Custom project',
    'form.typeUnsure': 'Not sure yet — advise me',
    'form.msg': 'A few words about the business',
    'form.msgPh': 'I sell sneakers on Instagram and want a site with a catalogue and cart',
    'form.submit': 'Send enquiry',
    'form.sending': 'Sending…',
    'form.note': 'No spam, no newsletters. I answer personally.',
    'form.ok': 'Enquiry sent. I will reply within a day — check the messenger you specified.',
    'form.err': 'Could not send. Message me directly on Telegram or WhatsApp — links on the left.',
    'form.required': 'Fill in your name and a contact so I can reply.',

    'footer.role': '— web development, Bishkek'
  }
};

/* Применяет язык ко всем помеченным элементам и запоминает выбор */
window.applyLang = function (lang) {
  var dict = window.I18N[lang] || window.I18N.ru;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('.lang [data-lang]').forEach(function (el) {
    el.classList.toggle('is-on', el.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}

  // Карточки проектов перерисовываются на выбранном языке
  if (typeof window.renderProjects === 'function') window.renderProjects(lang);
};

window.t = function (key) {
  var lang = document.documentElement.getAttribute('data-lang') || 'ru';
  return (window.I18N[lang] && window.I18N[lang][key]) || window.I18N.ru[key] || key;
};
