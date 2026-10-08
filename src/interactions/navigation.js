const DESKTOP_NAV = '(min-width: 60em)';

/** Mostra a borda do header quando a página sai do topo. */
function trackScroll(header) {
  const sentinel = document.createElement('div');
  sentinel.className = 'scroll-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.prepend(sentinel);

  new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-scrolled', !entry.isIntersecting);
  }).observe(sentinel);
}

/** Marca no menu a seção que cruza uma linha a ~40% da altura da tela. */
function trackCurrentSection(links, readout) {
  const linkById = new Map(links.map((link) => [link.hash.slice(1), link]));
  const fallback = readout?.textContent ?? '';

  const setCurrent = (id) => {
    const active = linkById.get(id);
    links.forEach((link) => {
      if (link === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (readout) readout.textContent = active ? active.dataset.readout : fallback;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -59% 0px' },
  );

  document.querySelectorAll('[data-section]').forEach((section) => observer.observe(section));
}

function setupMenu(nav, toggle) {
  const root = document.documentElement;
  const background = document.querySelectorAll('main, .site-footer');
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? toggle.dataset.labelExpanded : toggle.dataset.labelCollapsed;
    root.classList.toggle('is-menu-open', open);
    background.forEach((element) => {
      element.inert = open;
    });
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  nav.addEventListener('click', (event) => {
    if (isOpen() && event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia(DESKTOP_NAV).addEventListener('change', () => setOpen(false));
}

export function initNavigation() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const readout = document.querySelector('[data-current-section]');
  if (!header || !nav) return;

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  links.forEach((link) => {
    const index = link.querySelector('.site-nav__index')?.textContent ?? '';
    const label = link.querySelector('[data-label]')?.textContent ?? link.textContent;
    link.dataset.readout = `${index} ${label}`.trim();
  });

  trackScroll(header);
  trackCurrentSection(links, readout);
  if (toggle) setupMenu(nav, toggle);
}
