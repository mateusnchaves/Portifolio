const isTyping = (target) => target instanceof Element && target.closest('input, textarea, select, [contenteditable="true"]');

/** Exibe o grid de 12 colunas do layout. Alterna com a tecla G ou com o botão do rodapé. */
export function initGridOverlay() {
  const overlay = document.querySelector('[data-grid-overlay]');
  const toggle = document.querySelector('[data-grid-toggle]');
  if (!overlay) return;

  const columns = getComputedStyle(document.documentElement).getPropertyValue('--columns').trim() || 12;
  overlay.innerHTML = `<div class="container grid">${'<span></span>'.repeat(Number(columns))}</div>`;

  const setVisible = (visible) => {
    overlay.hidden = !visible;
    toggle?.setAttribute('aria-pressed', String(visible));
  };

  toggle?.addEventListener('click', () => setVisible(overlay.hidden));

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() !== 'g' || event.repeat) return;
    if (event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
    setVisible(overlay.hidden);
  });
}
