/** Substitui o conteúdo de [data-mount="<name>"] pelo HTML renderizado. */
export function mount(name, content) {
  const target = document.querySelector(`[data-mount="${name}"]`);
  if (target) target.innerHTML = String(content);
}

export function setText(selector, text) {
  const target = document.querySelector(selector);
  if (target) target.textContent = text;
}
