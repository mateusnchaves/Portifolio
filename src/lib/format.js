import { monthLabels, plurals } from '../config.js';

export const pad = (value) => String(value).padStart(2, '0');

export const plural = (count, [one, many]) => (count === 1 ? one : many);

/** 2 → '02 projetos' */
export const countLabel = (count, forms) => `${pad(count)} ${plural(count, forms)}`;

const toParts = (value) => {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
};

const currentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}`;
};

/** '2026-08' → 'Ago 2026' */
export const formatMonth = (value) => {
  const { year, month } = toParts(value);
  return `${monthLabels[month - 1]} ${year}`;
};

/** Meses de calendário entre início e fim, contando os dois (mesmo critério do LinkedIn). */
export const monthsBetween = (start, end) => {
  const from = toParts(start);
  const to = toParts(end || currentMonth());
  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
};

/** 14 → '1 ano e 2 meses' */
export const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years} ${plural(years, plurals.year)}`, rest && `${rest} ${plural(rest, plurals.month)}`]
    .filter(Boolean)
    .join(' e ');
};

/** Período total de uma lista de cargos. `end` é null enquanto algum cargo estiver em andamento. */
export const tenure = (roles) => {
  const start = roles.map((role) => role.start).sort()[0];
  const ongoing = roles.some((role) => !role.end);
  const end = ongoing ? null : roles.map((role) => role.end).sort().at(-1);
  return { start, end };
};
