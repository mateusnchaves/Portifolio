import { ui } from '../config.js';
import { html } from '../lib/html.js';
import { isTodo } from '../lib/todo.js';

/** Ícones definidos no sprite SVG de index.html (#icon-<name>). */
export const icon = (name) =>
  html`<svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;

export const tagList = (items) => html`<ul class="tags">${items.map((item) => html`<li class="tag">${item}</li>`)}</ul>`;

export const externalLink = (href, label) =>
  html`<a class="link-arrow" href="${href}" target="_blank" rel="noopener noreferrer"><span>${label}<span class="visually-hidden"> ${ui.newTab}</span></span>${icon('arrow-ne')}</a>`;

export const placeholder = ({ hint }) =>
  html`<span class="placeholder"><span class="placeholder__tag">${ui.pending}</span>${hint}</span>`;

/** Renderiza `value`; se ele estiver marcado com todo(), mostra o placeholder. */
export const filled = (value, render = (content) => content) => (isTodo(value) ? placeholder(value) : render(value));
