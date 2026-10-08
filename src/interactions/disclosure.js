/**
 * Abre e fecha o painel indicado em aria-controls de qualquer botão [data-disclosure].
 * Usa delegação de eventos, então também funciona para conteúdo renderizado depois.
 */
export function initDisclosures() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-disclosure]');
    if (!button) return;

    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;

    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.dataset.open = String(open);

    const label = button.querySelector('[data-disclosure-label]');
    if (label) label.textContent = open ? button.dataset.labelExpanded : button.dataset.labelCollapsed;
  });
}
