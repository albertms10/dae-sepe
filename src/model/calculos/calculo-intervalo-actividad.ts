import { calculoCodigosJornada, codigosAIntervalos } from "./index";

export default (
  Jornada_Habitual: number,
  Horas_Ordinarias: (number | null)[],
  Fecha: Date
) =>
  codigosAIntervalos(
    calculoCodigosJornada(Jornada_Habitual, Horas_Ordinarias, Fecha),
    Fecha
  );
