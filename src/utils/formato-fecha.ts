import { digitoConCero } from "./index";

/**
 * Formatea la fecha correspondiendo al patrón `YYYYMMDD`.
 */
export default (Fecha: Date) =>
  `${Fecha.getFullYear()}${digitoConCero(Fecha.getMonth() + 1)}${digitoConCero(
    Fecha.getDate()
  )}`;
