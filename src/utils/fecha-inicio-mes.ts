/**
 * Devuelve la fecha con el primer día del mes.
 */
export default (Fecha: Date) => {
  Fecha.setDate(1);
  return Fecha;
};
