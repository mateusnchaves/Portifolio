const STAGGER_MS = 80;

/**
 * Revela elementos [data-reveal] na primeira vez em que entram na tela.
 * O estado oculto só existe sob `.has-reveal`, então o conteúdo continua
 * visível se o JS falhar ou se o usuário preferir movimento reduzido.
 */
export function initReveal() {
  const prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  if (!prefersMotion || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, i) => {
          entry.target.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`);
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );

  document.documentElement.classList.add('has-reveal');
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}
