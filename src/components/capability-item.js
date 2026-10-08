import { ui } from '../config.js';
import { pad } from '../lib/format.js';
import { html } from '../lib/html.js';
import { tagList } from './ui.js';

export const capabilityItem = (capability, index) => html`
  <li class="capability" data-reveal>
    <span class="capability__index meta" aria-hidden="true">${pad(index + 1)}</span>
    <h3 class="capability__title" lang="en">${capability.title}</h3>
    <div class="capability__body">
      <p class="capability__description">${capability.description}</p>
      <p class="capability__evidence">
        <span class="meta">${ui.appliedIn}</span>
        ${capability.evidence}
      </p>
      ${tagList(capability.tools)}
    </div>
  </li>`;
