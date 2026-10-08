const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

class SafeHtml {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

export const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ENTITIES[char]);

function serialize(value) {
  if (value === null || value === undefined || value === false) return '';
  if (Array.isArray(value)) return value.map(serialize).join('');
  if (value instanceof SafeHtml) return value.value;
  return escape(value);
}

/**
 * Template tag que escapa todos os valores interpolados.
 * Resultados de outros `html` são inseridos como estão; null, undefined e false são ignorados.
 */
export function html(strings, ...values) {
  return new SafeHtml(strings.reduce((out, string, i) => out + serialize(values[i - 1]) + string));
}
