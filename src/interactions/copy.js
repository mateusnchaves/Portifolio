const RESET_AFTER_MS = 2400;

/**
 * Botões [data-copy] copiam o valor para a área de transferência e anunciam
 * o resultado na região [data-copy-status] ao lado. Eles começam ocultos e só
 * aparecem quando a Clipboard API está disponível.
 */
export function initCopy() {
  if (!navigator.clipboard?.writeText) return;

  document.querySelectorAll('[data-copy]').forEach((button) => {
    const status = button.parentElement.querySelector('[data-copy-status]');
    const idleLabel = button.textContent;
    let timer;

    button.hidden = false;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
      } catch {
        return;
      }

      button.textContent = button.dataset.copiedLabel;
      button.dataset.state = 'copied';
      if (status) status.textContent = button.dataset.copiedMessage;

      clearTimeout(timer);
      timer = setTimeout(() => {
        button.textContent = idleLabel;
        delete button.dataset.state;
        if (status) status.textContent = '';
      }, RESET_AFTER_MS);
    });
  });
}
