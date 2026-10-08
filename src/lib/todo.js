class Todo {
  constructor(hint) {
    this.hint = hint;
  }
}

/**
 * Marca um campo que ainda precisa ser preenchido.
 * No site, ele aparece com a etiqueta "Pendente" e o texto de `hint`.
 */
export const todo = (hint) => new Todo(hint);

export const isTodo = (value) => value instanceof Todo;

/** Lista os campos pendentes de uma estrutura de dados, com o caminho de cada um. */
export function findTodos(value, path = '') {
  if (isTodo(value)) return [{ campo: path, pendente: value.hint }];
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => findTodos(child, path ? `${path}.${key}` : key));
  }
  return [];
}
