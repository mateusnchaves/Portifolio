import { html } from '../lib/html.js';

export const currentlyItem = (item) => html`
  <li class="now__item" data-reveal>
    <h3 class="now__label meta" lang="en">${item.label}</h3>
    <p class="now__text">${item.text}</p>
  </li>`;
