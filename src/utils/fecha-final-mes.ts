/**
 * Devuelve la fecha con el último día del mes.
 */
export default (Fecha: Date) =>
  new Date(Fecha.getFullYear(), Fecha.getMonth() + 1, 0);
