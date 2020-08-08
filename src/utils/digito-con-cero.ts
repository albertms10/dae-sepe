/**
 * Devuelve el número con los ceros a la izquierda correspondientes.
 */
export default (n: number, maxLeading: number = 10): string =>
  n < maxLeading
    ? "0".repeat(Math.log10(maxLeading) - Math.floor(Math.log10(n))) + n
    : n.toString();
