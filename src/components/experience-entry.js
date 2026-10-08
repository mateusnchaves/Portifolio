import { plurals, ui } from '../config.js';
import { countLabel, formatDuration, formatMonth, monthsBetween, tenure } from '../lib/format.js';
import { html } from '../lib/html.js';
import { tagList } from './ui.js';

const slug = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const range = ({ start, end }) => html`
  <time datetime="${start}">${formatMonth(start)}</time> —
  ${end ? html`<time datetime="${end}">${formatMonth(end)}</time>` : html`<span class="timeline__now">${ui.present}</span>`}`;

const role = (item) => html`
  <li class="timeline__item${item.end ? '' : ' is-current'}" data-reveal>
    <p class="timeline__period meta">
      <span>${range(item)}</span>
      <span>${formatDuration(monthsBetween(item.start, item.end))}</span>
    </p>
    <div class="timeline__content">
      <h4 class="timeline__role">${item.title}</h4>
      <ul class="timeline__highlights">
        ${item.highlights.map((text) => html`<li>${text}</li>`)}
      </ul>
      ${item.skills?.length > 0 && tagList(item.skills)}
    </div>
  </li>`;

export function experienceEntry(entry) {
  const id = `org-${slug(entry.company)}`;

  return html`
    <article class="org" aria-labelledby="${id}">
      <header class="org__aside" data-reveal>
        <h3 class="org__name" id="${id}">${entry.company}</h3>
        <p class="meta">${range(tenure(entry.roles))}</p>
        <p class="meta">${countLabel(entry.roles.length, plurals.role)}</p>
      </header>
      <ol class="timeline">
        ${entry.roles.map(role)}
      </ol>
    </article>`;
}
