/**
 * Devuelve la fecha con el primer día del mes.
 */
export default (Fecha: Date) =>
  new Date(Fecha.getFullYear(), Fecha.getMonth(), 1);
