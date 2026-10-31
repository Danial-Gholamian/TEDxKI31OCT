const CONTACT_EMAIL = 'executiveteam@tedxki.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const EVENTS = [
  {
    year: 2026,
    theme: 'To be announced',
    date: 'To be announced',
    venue: 'To be announced',
    summary: 'The next TEDxKI is being planned now. The theme, speakers and tickets will be announced here first.',
    talks: [],
    hosts: [],
    performers: [],
  },
  {
    year: 2025,
    theme: 'Example theme: The Space Between',
    date: 'Example date',
    venue: 'Aula Medica, Solna',
    summary: 'Example content to preview a finished year. Replace these speakers, photos and videos with real ones.',
    talks: [
      { speaker: 'Maya Lindqvist', title: 'What sleep teaches us about memory', caption: 'Neuroscientist studying how the brain sorts the day while we sleep.', photo: 'images/people/person-01.jpg', thumb: 'images/frames/color-4.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
      { speaker: 'Daniel Okafor', title: 'Designing hospitals for people', caption: 'Architect who works with clinicians to rethink care spaces.', photo: 'images/people/person-02.jpg', thumb: 'images/frames/color-3.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
      { speaker: 'Sofia Bergman', title: 'The quiet power of listening', caption: 'Nurse and researcher in patient communication.', photo: 'images/people/person-03.jpg', thumb: 'images/frames/color-1.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
      { speaker: 'Elias Haddad', title: 'Data that saves lives', caption: 'Health informatician building early-warning tools for intensive care.', photo: 'images/people/person-04.jpg', thumb: 'images/frames/color-5.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
      { speaker: 'Hana Sato', title: 'Growing new skin', caption: 'Bioengineer working on tissue regeneration for burn patients.', photo: 'images/people/person-05.jpg', thumb: 'images/frames/color-6.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
      { speaker: 'Lukas Weber', title: 'Running with a broken heart', caption: 'Cardiologist and ultramarathon runner.', photo: 'images/people/person-06.jpg', thumb: 'images/frames/color-2.jpg', video: '', linkedin: 'https://www.linkedin.com/' },
    ],
    hosts: [
      { name: 'Jin Park', caption: 'Host', photo: 'images/people/person-07.jpg', linkedin: 'https://www.linkedin.com/' },
      { name: 'Omar Said', caption: 'Co-host', photo: 'images/people/person-08.jpg', linkedin: 'https://www.linkedin.com/' },
    ],
    performers: [
      { name: 'Clara Nyström', caption: 'Cello', photo: 'images/people/person-09.jpg', linkedin: 'https://www.linkedin.com/' },
      { name: 'Arjun Mehta', caption: 'Spoken word', photo: 'images/people/person-10.jpg', linkedin: 'https://www.linkedin.com/' },
    ],
  },
  {
    year: 2024,
    theme: 'Lights Out: What Happens Now',
    date: '23 March 2024',
    venue: 'Aula Medica, Solna',
    summary: 'How we navigate uncertainty when familiar things fade, through personal journeys, societal change and scientific innovation.',
    talks: [
      { speaker: 'Aron Anderson', title: '', caption: 'Cancer survivor, adventurer and keynote speaker who has climbed major peaks and swum from Sweden to Finland.', video: '', linkedin: '' },
      { speaker: 'Binette Seck', title: '', caption: 'Social entrepreneur and co-founder of ChangersTech, working to make technology open to everyone.', video: '', linkedin: '' },
      { speaker: 'Henrik Wahlström', title: '', caption: 'Author and creative director who speaks openly about mental health and fighting its stigma.', video: '', linkedin: '' },
      { speaker: 'Ida Kjos', title: '', caption: 'Former lawyer turned writer, podcaster and keynote speaker.', video: '', linkedin: '' },
      { speaker: 'Li Åslund', title: '', caption: 'Psychologist and researcher at Karolinska Institutet working on sleep and digital health care.', video: '', linkedin: '' },
      { speaker: 'P.J. Wall', title: '', caption: 'Academic researching the ethics of AI and global development.', video: '', linkedin: '' },
      { speaker: 'Paul Franks', title: '', caption: 'Director of Translational Medicine at the Novo Nordisk Foundation and researcher in precision diabetes medicine.', video: '', linkedin: '' },
    ],
    hosts: [
      { name: 'Host name', caption: 'Host', linkedin: '' },
    ],
    performers: [
      { name: 'Royal Swedish Ballet School', caption: 'Dance performance', linkedin: '' },
      { name: 'Yoonsuk Choe', caption: 'Music on Indian flute, handpan and harmonica', linkedin: '' },
    ],
  },
];

const TEAM_GROUPS = [
  { name: 'Executive', intro: 'Leads the event, holds the TEDx license and keeps every group moving in the same direction.' },
  { name: 'Speaker', intro: 'Finds, selects and coaches the speakers and performers.' },
  { name: 'Marketing', intro: 'Tells the story of the event online, in print and on campus.' },
  { name: 'Finance', intro: 'Manages the budget and works with our sponsors and partners.' },
  { name: 'Logistics', intro: 'Runs the venue, the stage, filming and everything on the day.' },
];

const TEAMS = [
  {
    year: 2026,
    members: {
      Executive: [
        { name: 'Emma Holm', role: 'Organizer', photo: 'images/people/person-03.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Noah Ali', role: 'Co-organizer', photo: 'images/people/person-02.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Yuna Kim', role: 'Executive producer', photo: 'images/people/person-07.jpg', linkedin: 'https://www.linkedin.com/' },
      ],
      Speaker: [
        { name: 'Leila Haddad', role: 'Speaker lead', photo: 'images/people/person-09.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Marcus Berg', role: 'Speaker coach', photo: 'images/people/person-12.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Aiko Tanaka', role: 'Curation', photo: 'images/people/person-05.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Samir Khan', role: 'Speaker coach', photo: 'images/people/person-08.jpg', linkedin: 'https://www.linkedin.com/' },
      ],
      Marketing: [
        { name: 'Ella Svensson', role: 'Marketing lead', photo: 'images/people/person-11.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Victor Lund', role: 'Design', photo: 'images/people/person-06.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Mina Cho', role: 'Social media', photo: 'images/people/person-01.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Alex Rahimi', role: 'Website', photo: 'images/people/person-10.jpg', linkedin: 'https://www.linkedin.com/' },
      ],
      Finance: [
        { name: 'Olivia Nord', role: 'Finance lead', photo: 'images/people/person-03.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Erik Dahl', role: 'Partnerships', photo: 'images/people/person-04.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Sara Lee', role: 'Sponsorships', photo: 'images/people/person-07.jpg', linkedin: 'https://www.linkedin.com/' },
      ],
      Logistics: [
        { name: 'Liam Ek', role: 'Logistics lead', photo: 'images/people/person-02.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Nora Falk', role: 'Venue and production', photo: 'images/people/person-09.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Adam Roos', role: 'Filming', photo: 'images/people/person-12.jpg', linkedin: 'https://www.linkedin.com/' },
        { name: 'Iris Wong', role: 'Volunteers', photo: 'images/people/person-05.jpg', linkedin: 'https://www.linkedin.com/' },
      ],
    },
  },
  {
    year: 2024,
    members: {
      Executive: [
        { name: 'Karolina Kublickiene', role: 'Organizer', photo: '', linkedin: '' },
        { name: 'Christina Hoecher', role: 'Co-organizer', photo: '', linkedin: '' },
      ],
      Speaker: [],
      Marketing: [
        { name: 'Jeanne Hochart', role: 'Marketing and communications', photo: '', linkedin: '' },
      ],
      Finance: [
        { name: 'Federico Picciau', role: 'Partnerships and sponsorship', photo: '', linkedin: '' },
      ],
      Logistics: [],
    },
  },
];

const SPONSOR_TIERS = [
  {
    id: 'platinum',
    name: 'Platinum',
    blurb: 'Our lead partners, with the most visibility before, during and after the event.',
    benefits: [
      'Largest logo on our sponsors page and event signage',
      'Logo on the screens during breaks',
      'Logo in the printed programme',
      'Six tickets to the event',
      'Dedicated thank-you post on our social media',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    blurb: 'Strong visibility for organisations that want to be part of the day.',
    benefits: [
      'Logo on our sponsors page and event signage',
      'Logo in the printed programme',
      'Four tickets to the event',
      'Thank-you post on our social media',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    blurb: 'A great way to support new ideas at Karolinska Institutet.',
    benefits: [
      'Logo on our sponsors page',
      'Name in the printed programme',
      'Two tickets to the event',
      'Group thank-you post on our social media',
    ],
  },
];

const SPONSORS = [
  { name: 'Sponsor One', tier: 'platinum', logo: '', url: '' },
  { name: 'Sponsor Two', tier: 'platinum', logo: '', url: '' },
  { name: 'Sponsor Three', tier: 'gold', logo: '', url: '' },
  { name: 'Sponsor Four', tier: 'gold', logo: '', url: '' },
  { name: 'Sponsor Five', tier: 'silver', logo: '', url: '' },
  { name: 'Sponsor Six', tier: 'silver', logo: '', url: '' },
];

const PAGES = ['home', 'events', 'team', 'sponsors', 'contact'];
const PAGE_ALIASES = { 'become-a-sponsor': { page: 'contact', tab: 'sponsor' } };
const DESKTOP_QUERY = '(min-width: 860px)';

const HERO_FRAMES = [
  { lines: 'images/hero-lines.jpg', color: 'images/hero-color.jpg' },
];

const SCENE_OPTIONS = {
  colorStart: 0.03,
  colorEnd: 0.8,
  framesEnd: 0.85,
  blend: 0.35,
  wordsStart: 0.3,
  wordStep: 0.08,
  actionsAt: 0.82,
};

const HELIX_OPTIONS = {
  holdMs: 2800,
  twistMs: 1500,
  logoWidth: 0.7,
  rungsPerHalfTurn: 7,
};

const COUNTER_OPTIONS = {
  duration: 1600,
  threshold: 0.6,
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => {
    if (value === null || value === undefined || value === false) return;
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value === true ? '' : value);
  });

  node.append(...children.flat().filter(Boolean));
  return node;
}

function icon(name) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  const use = document.createElementNS(SVG_NS, 'use');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('aria-hidden', 'true');
  use.setAttribute('href', `#icon-${name}`);
  svg.append(use);
  return svg;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter((part) => /\p{L}/u.test(part))
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function avatar(person, extraClass = '') {
  const content = person.photo
    ? el('img', { src: person.photo, alt: '', loading: 'lazy' })
    : document.createTextNode(initials(person.name));
  return el('div', { class: `avatar ${extraClass}`.trim(), 'aria-hidden': 'true' }, content);
}

function linkedinButton(person) {
  if (!person.linkedin) return null;
  return el(
    'a',
    {
      class: 'icon-btn',
      href: person.linkedin,
      target: '_blank',
      rel: 'noopener',
      'aria-label': `${person.name} on LinkedIn`,
    },
    icon('linkedin'),
  );
}

/* Header, navigation, pages */

function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initNavigation() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  if (!header || !nav || !burger) return;

  const desktop = window.matchMedia(DESKTOP_QUERY);
  const isOpen = () => nav.classList.contains('is-open');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', () => setOpen(!isOpen()));

  header.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen()) return;
    setOpen(false);
    burger.focus();
  });

  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

function initRouter() {
  const pages = new Map([...document.querySelectorAll('[data-page]')].map((page) => [page.dataset.page, page]));
  const links = document.querySelectorAll('.nav__link');
  let current = null;

  function resolve() {
    const hash = window.location.hash.slice(1);
    if (PAGES.includes(hash)) return { page: hash };
    if (PAGE_ALIASES[hash]) return PAGE_ALIASES[hash];
    if (!hash || current === null) return { page: 'home' };
    return null;
  }

  function show(fromNavigation) {
    const route = resolve();
    if (!route) return;

    const page = pages.get(route.page);
    const changed = route.page !== current;

    if (changed) {
      pages.forEach((section, id) => {
        section.hidden = id !== route.page;
      });

      links.forEach((link) => {
        if (link.getAttribute('href') === `#${route.page}`) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });

      document.title = page.dataset.title || 'TEDxKI';
    }

    if (current !== null) {
      if (changed) {
        page.classList.remove('is-entering');
        void page.offsetWidth;
        page.classList.add('is-entering');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (fromNavigation) page.querySelector('h1')?.focus({ preventScroll: true });
    }

    current = route.page;
    document.dispatchEvent(new CustomEvent('pagechange', { detail: route }));
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('a[href="#"]')) event.preventDefault();
  });

  window.addEventListener('hashchange', () => show(true));
  show(false);
}

/* Home: scroll scene */

function splitWords(element, options) {
  const words = element.textContent.trim().split(/\s+/);
  element.textContent = '';

  words.forEach((word, index) => {
    const span = el('span', { class: 'hero__word', text: word });
    span.style.setProperty('--at', (options.wordsStart + index * options.wordStep).toFixed(3));
    element.append(span, ' ');
  });
}

function buildFrames(art, frames) {
  const layers = frames.map((frame, index) => {
    const layer = el(
      'div',
      { class: 'hero__frame' },
      el('img', { class: 'hero__image', src: frame.lines, alt: '', decoding: 'async' }),
      el('img', { class: 'hero__image hero__image--color', src: frame.color, alt: '', decoding: 'async' }),
    );
    layer.style.opacity = index === 0 ? '1' : '0';
    return layer;
  });
  art.replaceChildren(...layers);
  return layers;
}

function showFrame(layers, position, blend) {
  const index = Math.min(Math.floor(position), layers.length - 1);
  const within = position - index;
  const fade = Math.min(Math.max((within - (1 - blend)) / blend, 0), 1);

  layers.forEach((layer, i) => {
    let opacity = 0;
    if (i === index) opacity = 1;
    else if (i === index + 1) opacity = fade;
    layer.style.opacity = String(opacity);
  });
}

function createScene(root, options) {
  const pin = root.querySelector('[data-scene-pin]');
  const art = root.querySelector('[data-scene-art]');
  const layers = HERO_FRAMES.length ? buildFrames(art, HERO_FRAMES) : [];
  const words = root.querySelector('[data-scene-words]');
  const actions = root.querySelector('[data-scene-actions]');
  const clamp = (value) => Math.min(Math.max(value, 0), 1);
  let frame = null;

  function progress() {
    if (reducedMotion.matches) return 1;
    const distance = root.offsetHeight - pin.offsetHeight;
    if (distance <= 0) return 1;
    const top = parseFloat(getComputedStyle(pin).top) || 0;
    return clamp((top - root.getBoundingClientRect().top) / distance);
  }

  function update() {
    frame = null;
    const value = progress();
    const color = clamp((value - options.colorStart) / (options.colorEnd - options.colorStart));
    const eased = color < 0.5 ? 2 * color * color : 1 - Math.pow(-2 * color + 2, 2) / 2;
    const visible = value >= options.actionsAt;

    root.style.setProperty('--progress', value.toFixed(4));
    root.style.setProperty('--spread', eased.toFixed(4));
    if (layers.length > 1) {
      const frames = clamp(value / options.framesEnd) * (layers.length - 1);
      showFrame(layers, frames, options.blend);
    }
    actions.classList.toggle('is-visible', visible);
    actions.inert = !visible;
  }

  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  splitWords(words, options);
  root.classList.add('is-live');
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  document.addEventListener('pagechange', requestUpdate);
  reducedMotion.addEventListener('change', requestUpdate);
  update();
}

function initScene() {
  const scene = document.querySelector('[data-scene]');
  if (scene) createScene(scene, SCENE_OPTIONS);
}

/* Year tabs (Events and Team) */

function createYearTabs(name, items, renderPanel, startIndex = 0) {
  const list = document.querySelector(`[data-tabs="${name}"]`);
  const panel = document.querySelector(`[data-tab-panel="${name}"]`);
  if (!list || !panel || !items.length) return;

  panel.className = 'tab-panel';
  panel.setAttribute('role', 'tabpanel');
  panel.id = `${name}-panel`;
  panel.tabIndex = 0;

  const tabs = items.map((item, index) =>
    el('button', {
      class: 'year-tab',
      type: 'button',
      role: 'tab',
      id: `${name}-tab-${item.year}`,
      'aria-controls': panel.id,
      text: String(item.year),
      onclick: () => select(index, true),
    }),
  );

  function select(index, animate) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[index].id);
    panel.replaceChildren(renderPanel(items[index]));

    if (animate) {
      panel.classList.remove('is-entering');
      void panel.offsetWidth;
      panel.classList.add('is-entering');
    }
  }

  list.addEventListener('keydown', (event) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in keys)) return;
    const index = tabs.indexOf(document.activeElement);
    const next = (index + keys[event.key] + tabs.length) % tabs.length;
    tabs[next].focus();
    select(next, true);
  });

  list.append(...tabs);
  select(Math.max(startIndex, 0), false);
}

/* Events */

function youtubeLink(talk, year) {
  if (talk.video) return `https://www.youtube.com/watch?v=${encodeURIComponent(talk.video)}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${talk.speaker} TEDxKI ${year}`)}`;
}

function renderTalk(talk, year) {
  const href = youtubeLink(talk, year);
  const thumb = talk.video
    ? el('img', { src: `https://i.ytimg.com/vi/${encodeURIComponent(talk.video)}/hqdefault.jpg`, alt: '', loading: 'lazy' })
    : talk.thumb
      ? el('img', { src: talk.thumb, alt: '', loading: 'lazy' })
      : el('span', { class: 'talk__initials', text: initials(talk.speaker) });

  return el(
    'article',
    { class: 'talk' },
    el(
      'a',
      { class: 'talk__media', href, target: '_blank', rel: 'noopener', 'aria-label': `Watch ${talk.speaker} on YouTube` },
      thumb,
      el('span', { class: 'talk__play' }, icon('play')),
    ),
    el(
      'div',
      { class: 'talk__body' },
      el('div', { class: 'talk__who' }, talk.photo && avatar({ name: talk.speaker, photo: talk.photo }, 'avatar--small'), el('h4', { class: 'talk__speaker', text: talk.speaker })),
      talk.title && el('p', { class: 'talk__title', text: talk.title }),
      el('p', { class: 'talk__caption', text: talk.caption }),
      el(
        'div',
        { class: 'talk__actions' },
        el('a', { class: 'watch-link', href, target: '_blank', rel: 'noopener' }, talk.video ? 'Watch talk' : 'Find on YouTube', icon('arrow')),
        linkedinButton({ name: talk.speaker, linkedin: talk.linkedin }),
      ),
    ),
  );
}

function renderPersonRow(person) {
  return el(
    'li',
    { class: 'person-row' },
    avatar(person, 'avatar--small'),
    el('div', {}, el('p', { class: 'person-row__name', text: person.name }), person.caption && el('p', { class: 'person-row__caption', text: person.caption })),
    linkedinButton(person),
  );
}

function renderBlock(title, count, content) {
  return el(
    'section',
    { class: 'block' },
    el('h3', { class: 'block__title' }, title, count !== null && el('span', { class: 'block__count', text: String(count) })),
    content,
  );
}

function renderPeopleBlock(title, people, emptyText) {
  const content = people.length
    ? el('ul', { class: 'person-list' }, people.map(renderPersonRow))
    : el('p', { class: 'empty-note', text: emptyText });
  return renderBlock(title, people.length || null, content);
}

function renderFact(iconName, label, value) {
  return el('div', { class: 'fact' }, icon(iconName), el('div', {}, el('dt', { text: label }), el('dd', { text: value })));
}

function renderEvent(event) {
  const talks = event.talks.length
    ? el('div', { class: 'talk-grid' }, event.talks.map((talk) => renderTalk(talk, event.year)))
    : el('p', { class: 'empty-note', text: 'Speakers will be announced here as they are confirmed.' });

  return el(
    'article',
    { class: 'event' },
    el(
      'header',
      { class: 'event__head' },
      el(
        'div',
        { class: 'event__intro' },
        el('p', { class: 'eyebrow', text: `TEDxKI ${event.year}` }),
        el('h2', { class: 'event__theme', text: event.theme }),
        el('p', { class: 'event__summary', text: event.summary }),
      ),
      el(
        'dl',
        { class: 'facts' },
        renderFact('calendar', 'Date', event.date),
        renderFact('pin', 'Venue', event.venue),
      ),
    ),
    renderBlock('Talks', event.talks.length || null, talks),
    el(
      'div',
      { class: 'event__people' },
      renderPeopleBlock('Hosts', event.hosts, 'Hosts will be announced.'),
      renderPeopleBlock('Performers', event.performers, 'Performers will be announced.'),
    ),
  );
}

function initEvents() {
  createYearTabs('events', EVENTS, renderEvent, EVENTS.findIndex((event) => event.talks.length));
}

/* Team */

function renderMember(person) {
  return el(
    'article',
    { class: 'member' },
    avatar(person),
    el(
      'div',
      { class: 'member__body' },
      el('div', {}, el('h4', { class: 'member__name', text: person.name }), el('p', { class: 'member__role', text: person.role })),
      linkedinButton(person),
    ),
  );
}

function renderTeam(team) {
  return el(
    'div',
    {},
    TEAM_GROUPS.map((group) => {
      const members = team.members[group.name] || [];
      const content = members.length
        ? el('div', { class: 'member-grid' }, members.map(renderMember))
        : el('p', { class: 'empty-note', text: 'Members will be added soon.' });

      return el(
        'section',
        { class: 'block team-group' },
        el('h3', { class: 'block__title' }, `${group.name} team`, members.length > 0 && el('span', { class: 'block__count', text: String(members.length) })),
        el('p', { class: 'team-group__intro', text: group.intro }),
        content,
      );
    }),
  );
}

function initTeam() {
  createYearTabs('team', TEAMS, renderTeam);
}

/* Sponsors */

function placeholderLogo(name, index) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = `${[700, 300, 800, 500][index % 4]} 64px Inter, system-ui, sans-serif`;
  const text = index % 3 === 1 ? name.toUpperCase() : name;
  const mark = 90;

  ctx.font = font;
  const textWidth = ctx.measureText(text).width;
  canvas.width = Math.ceil(mark + 24 + textWidth + 8);
  canvas.height = 120;

  ctx.font = font;
  ctx.fillStyle = '#161616';
  ctx.strokeStyle = '#161616';
  ctx.textBaseline = 'middle';

  const cx = mark / 2;
  const cy = canvas.height / 2;
  ctx.beginPath();
  if (index % 3 === 0) {
    ctx.arc(cx, cy, mark / 2 - 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (index % 3 === 1) {
    ctx.lineWidth = 12;
    ctx.strokeRect(10, cy - mark / 2 + 10, mark - 20, mark - 20);
  } else {
    ctx.moveTo(cx, cy - mark / 2 + 4);
    ctx.lineTo(mark - 4, cy + mark / 2 - 8);
    ctx.lineTo(4, cy + mark / 2 - 8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillText(text, mark + 24, cy + 4);
  return canvas;
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function sponsorLogo(sponsor, index) {
  if (sponsor.logo) return el('img', { src: sponsor.logo, alt: sponsor.name, loading: 'lazy' });
  const canvas = placeholderLogo(sponsor.name, index);
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', sponsor.name);
  return canvas;
}

function renderTiers() {
  const root = document.querySelector('[data-tiers]');
  if (!root) return;

  root.append(
    ...SPONSOR_TIERS.map((tier) =>
      el(
        'article',
        { class: `tier tier--${tier.id}` },
        el('h3', { class: 'tier__name', text: tier.name }),
        el('p', { class: 'tier__blurb', text: tier.blurb }),
        el('ul', { class: 'tier__list' }, tier.benefits.map((benefit) => el('li', {}, icon('check'), el('span', { text: benefit })))),
        el('a', { class: 'btn btn--ghost', href: '#become-a-sponsor', 'data-level': tier.name }, `Ask about ${tier.name}`),
      ),
    ),
  );

  root.addEventListener('click', (event) => {
    const link = event.target.closest('[data-level]');
    const select = document.querySelector('#sponsor-level');
    if (link && select) select.value = link.dataset.level;
  });
}

function renderSponsorGroups() {
  const root = document.querySelector('[data-sponsor-groups]');
  if (!root) return;

  SPONSOR_TIERS.forEach((tier) => {
    const sponsors = SPONSORS.filter((sponsor) => sponsor.tier === tier.id);
    if (!sponsors.length) return;

    const tiles = sponsors.map((sponsor) => {
      const logo = sponsorLogo(sponsor, SPONSORS.indexOf(sponsor));
      return el('li', {}, sponsor.url
        ? el('a', { class: 'logo-tile', href: sponsor.url, target: '_blank', rel: 'noopener' }, logo)
        : el('div', { class: 'logo-tile' }, logo));
    });

    root.append(el('section', {}, el('h3', { class: 'sponsor-group__title', text: `${tier.name} sponsors` }), el('ul', { class: 'logo-grid' }, tiles)));
  });
}

/* Sponsors: watercolour DNA helix with logos printed on the ribbon */

function createHelix(canvas, logos, options) {
  const ctx = canvas.getContext('2d');
  const band = canvas.closest('.helix-band');
  const toggle = band?.querySelector('[data-helix-toggle]');
  const ref = document.querySelector(canvas.dataset.maxWidthRef);
  const colors = { red: '200, 16, 46', ink: '38, 38, 40' };
  const state = {
    width: 0,
    height: 0,
    ratio: 1,
    halfTurn: 0,
    amplitude: 0,
    firstSlot: 0,
    slots: [],
    queue: 0,
    cycle: 0,
    clock: 0,
    last: 0,
    frame: null,
    visible: false,
    paused: false,
    splashes: [],
    cache: new Map(),
  };
  const period = options.holdMs + options.twistMs;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const face = (slot, cycle) => (slot + cycle) % 2;

  function nextLogo() {
    const index = state.queue % logos.length;
    state.queue += 1;
    return index;
  }

  function fitted(index) {
    const key = `${index}|${state.boxW}|${state.boxH}`;
    if (state.cache.has(key)) return state.cache.get(key);

    const source = logos[index];
    const sw = source.naturalWidth || source.width;
    const sh = source.naturalHeight || source.height;
    const scale = Math.min(state.boxW / sw, state.boxH / sh);
    const w = Math.max(1, Math.round(sw * scale * state.ratio));
    const h = Math.max(1, Math.round(sh * scale * state.ratio));
    const out = document.createElement('canvas');
    out.width = w;
    out.height = h;
    out.getContext('2d').drawImage(source, 0, 0, w, h);
    const entry = { canvas: out, w: w / state.ratio, h: h / state.ratio };
    state.cache.set(key, entry);
    return entry;
  }

  function layout() {
    const width = Math.round(canvas.clientWidth);
    const height = Math.round(canvas.clientHeight);
    if (!width || !height) return false;
    if (width === state.width && height === state.height) return true;

    state.ratio = Math.min(window.devicePixelRatio || 1, 2);
    state.width = width;
    state.height = height;
    canvas.width = Math.round(width * state.ratio);
    canvas.height = Math.round(height * state.ratio);
    ctx.setTransform(state.ratio, 0, 0, state.ratio, 0, 0);

    const count = width < 640 ? 1 : width < 1000 ? 2 : width < 1500 ? 3 : 4;
    state.halfTurn = count === 1 ? width * 0.85 : width / (count + 0.5);
    state.amplitude = Math.min(height * 0.36, state.halfTurn * 0.38);
    state.firstSlot = width / 2 - ((count - 1) / 2) * state.halfTurn;

    let boxW = state.halfTurn * options.logoWidth;
    if (ref?.offsetWidth) boxW = Math.min(boxW, ref.offsetWidth * 0.9);
    state.boxW = Math.round(boxW);
    state.boxH = Math.round(state.amplitude * 0.75);
    state.cache.clear();

    const previous = state.slots;
    state.slots = Array.from({ length: count }, (_, i) => {
      if (previous[i]) return { ...previous[i], x: state.firstSlot + i * state.halfTurn };
      const faces = [0, 0];
      faces[face(i, state.cycle)] = nextLogo();
      faces[1 - face(i, state.cycle)] = nextLogo();
      return { x: state.firstSlot + i * state.halfTurn, faces };
    });

    const random = (() => {
      let seed = 11;
      return () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    })();
    state.splashes = Array.from({ length: Math.round(width / 28) }, () => ({
      x: random() * width,
      y: height / 2 + (random() - 0.5) * state.amplitude * 2.9,
      r: 1 + random() * random() * 6,
      color: random() < 0.55 ? colors.red : colors.ink,
      alpha: 0.25 + random() * 0.5,
    }));
    return true;
  }

  function phase() {
    if (reducedMotion.matches) return state.cycle * Math.PI;
    const within = state.clock - state.cycle * period;
    const turn = within < options.holdMs ? 0 : ease((within - options.holdMs) / options.twistMs);
    return (state.cycle + turn) * Math.PI;
  }

  function strandPoints(offset, theta) {
    const points = [];
    for (let x = -10; x <= state.width + 10; x += 4) {
      const t = theta(x) + offset;
      points.push({ x, y: state.height / 2 - state.amplitude * Math.cos(t), depth: (Math.sin(t) + 1) / 2 });
    }
    return points;
  }

  function drawStrand(points, color, front) {
    const base = Math.max(5, state.amplitude * 0.085);
    ctx.lineCap = 'round';

    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1];
      const b = points[i];
      const depth = (a.depth + b.depth) / 2;
      if ((depth >= 0.5) !== front) continue;

      const width = base * (0.45 + depth * 0.75);
      ctx.strokeStyle = `rgba(${color}, ${0.1 + depth * 0.14})`;
      ctx.lineWidth = width * 2.1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      ctx.strokeStyle = `rgba(${color}, ${0.3 + depth * 0.55})`;
      ctx.lineWidth = width;
      ctx.stroke();

      if (front) {
        ctx.strokeStyle = `rgba(20, 20, 20, ${0.35 * depth})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y - width / 2);
        ctx.lineTo(b.x, b.y - width / 2);
        ctx.stroke();
      }
    }
  }

  function drawRungs(theta) {
    const gap = state.halfTurn / options.rungsPerHalfTurn;
    const clear = state.boxW / 2 + 14;
    const width = Math.max(4, Math.min(9, state.amplitude * 0.06));
    const first = state.firstSlot - Math.ceil(state.firstSlot / gap + 1) * gap + gap / 2;
    ctx.lineCap = 'round';

    for (let x = first; x <= state.width + gap; x += gap) {
      if (state.slots.some((slot) => Math.abs(x - slot.x) < clear)) continue;
      const reach = state.amplitude * Math.cos(theta(x));
      if (Math.abs(reach) < width * 2) continue;
      const top = state.height / 2 - reach;
      const bottom = state.height / 2 + reach;
      const middle = state.height / 2;
      const inset = Math.sign(reach) * width * 1.4;

      ctx.lineWidth = width;
      ctx.strokeStyle = `rgba(${colors.red}, 0.55)`;
      ctx.beginPath();
      ctx.moveTo(x, top + inset);
      ctx.lineTo(x, middle - Math.sign(reach) * 2);
      ctx.stroke();

      ctx.strokeStyle = `rgba(${colors.ink}, 0.5)`;
      ctx.beginPath();
      ctx.moveTo(x, middle + Math.sign(reach) * 2);
      ctx.lineTo(x, bottom - inset);
      ctx.stroke();
    }
  }

  function drawLogos(theta) {
    const strip = 2;
    state.slots.forEach((slot) => {
      slot.faces.forEach((logoIndex, faceIndex) => {
        const logo = fitted(logoIndex);
        const sign = faceIndex === 0 ? 1 : -1;
        const left = slot.x - logo.w / 2;

        for (let sx = 0; sx < logo.w; sx += strip) {
          const x = left + sx;
          const facing = Math.cos(theta(x + strip / 2)) * sign;
          if (facing < 0.04) continue;
          const h = logo.h * facing;
          ctx.globalAlpha = Math.min(1, facing * 1.4);
          ctx.drawImage(
            logo.canvas,
            sx * state.ratio,
            0,
            Math.min(strip, logo.w - sx) * state.ratio,
            logo.canvas.height,
            x,
            state.height / 2 - h / 2,
            Math.min(strip, logo.w - sx) + 0.4,
            h,
          );
        }
        ctx.globalAlpha = 1;
      });
    });
  }

  function draw() {
    const p = phase();
    const theta = (x) => (Math.PI * (x - state.firstSlot)) / state.halfTurn + p;
    const red = strandPoints(0, theta);
    const ink = strandPoints(Math.PI, theta);

    ctx.clearRect(0, 0, state.width, state.height);

    state.splashes.forEach((dot) => {
      ctx.fillStyle = `rgba(${dot.color}, ${dot.alpha})`;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fill();
    });

    drawStrand(red, colors.red, false);
    drawStrand(ink, colors.ink, false);
    drawRungs(theta);
    drawLogos(theta);
    drawStrand(red, colors.red, true);
    drawStrand(ink, colors.ink, true);
  }

  function tick(time) {
    const delta = state.last ? Math.min(time - state.last, 64) : 16;
    state.last = time;
    state.clock += delta;

    const cycle = Math.floor(state.clock / period);
    if (cycle !== state.cycle) {
      state.cycle = cycle;
      state.slots.forEach((slot, i) => {
        slot.faces[1 - face(i, cycle)] = nextLogo();
      });
    }

    draw();
    state.frame = requestAnimationFrame(tick);
  }

  function play() {
    if (state.frame || !state.visible || state.paused || reducedMotion.matches || !state.width) return;
    state.last = 0;
    state.frame = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(state.frame);
    state.frame = null;
  }

  function refresh() {
    if (!layout()) return;
    draw();
    play();
  }

  if (toggle) {
    toggle.hidden = reducedMotion.matches;
    toggle.addEventListener('click', () => {
      state.paused = !state.paused;
      toggle.setAttribute('aria-pressed', String(state.paused));
      toggle.querySelector('[data-icon-pause]').hidden = state.paused;
      toggle.querySelector('[data-icon-play]').hidden = !state.paused;
      toggle.querySelector('span').textContent = state.paused ? 'Play animation' : 'Pause animation';
      if (state.paused) stop();
      else play();
    });
  }

  reducedMotion.addEventListener('change', () => {
    if (toggle) toggle.hidden = reducedMotion.matches;
    stop();
    refresh();
  });

  new ResizeObserver(refresh).observe(canvas);
  new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    if (state.visible) refresh();
    else stop();
  }).observe(canvas);
}

async function initSponsors() {
  renderTiers();
  renderSponsorGroups();

  const canvas = document.querySelector('[data-helix]');
  if (!canvas || !SPONSORS.length) return;
  const logos = await Promise.all(
    SPONSORS.map(async (sponsor, index) => (await loadImage(sponsor.logo)) || placeholderLogo(sponsor.name, index)),
  );
  createHelix(canvas, logos, HELIX_OPTIONS);
}

/* Contact forms */

function initForms() {
  const tabs = [...document.querySelectorAll('[data-form-tab]')];
  const forms = new Map([...document.querySelectorAll('[data-form]')].map((form) => [form.dataset.form, form]));

  function selectForm(name) {
    tabs.forEach((tab) => {
      const active = tab.dataset.formTab === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    forms.forEach((form, key) => {
      form.hidden = key !== name;
    });
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => selectForm(tab.dataset.formTab)));

  document.addEventListener('pagechange', (event) => {
    if (event.detail.page === 'contact') selectForm(event.detail.tab || 'general');
  });

  forms.forEach((form) => form.addEventListener('submit', (event) => submitForm(event, form)));
}

function setStatus(form, type, content) {
  const status = form.querySelector('[data-form-status]');
  status.className = `form__status is-${type}`;
  status.replaceChildren(...[].concat(content));
  status.hidden = false;
}

function mailtoFallback(data, subject) {
  const body = Object.entries(data)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function submitForm(event, form) {
  event.preventDefault();

  const fields = [...form.querySelectorAll('[required]')];
  const invalid = fields.filter((field) => !field.checkValidity());
  fields.forEach((field) => field.setAttribute('aria-invalid', String(invalid.includes(field))));

  if (invalid.length) {
    setStatus(form, 'error', 'Please fill in the highlighted fields and tick the box so we can reply.');
    invalid[0].focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  if (data._honey) return;
  delete data._honey;
  data.consent = 'Yes';

  const subject = `${form.dataset.subject} from ${data.name}`;
  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  setStatus(form, 'info', 'Sending…');

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _subject: subject, _template: 'table', _captcha: 'false' }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || String(result.success) !== 'true') throw new Error('Not sent');

    form.reset();
    setStatus(form, 'success', 'Thank you! Your message has been sent. We usually reply within a few days.');
  } catch (error) {
    setStatus(form, 'error', [
      'We could not send your message right now. ',
      el('a', { class: 'text-link', href: mailtoFallback(data, subject) }, 'Send it by email instead'),
      ` or write to ${CONTACT_EMAIL}.`,
    ]);
  } finally {
    button.disabled = false;
  }
}

/* Counters and footer */

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || reducedMotion.matches) return;

  const format = new Intl.NumberFormat('en-US');
  const write = (element, value) => {
    element.textContent = `${format.format(Math.round(value))}${element.dataset.suffix || ''}`;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const target = Number(entry.target.dataset.count);
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / COUNTER_OPTIONS.duration, 1);
        write(entry.target, target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: COUNTER_OPTIONS.threshold });

  counters.forEach((counter) => observer.observe(counter));
}

function setCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = year;
  });
}

initHeader();
initNavigation();
initForms();
initScene();
initEvents();
initTeam();
initCounters();
setCurrentYear();
initRouter();
(document.fonts ? document.fonts.ready : Promise.resolve()).then(initSponsors);
