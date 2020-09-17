import { generateTSV } from "../../helpers";
import * as Codigos from "../codigos";
import { calculoCodigosFinSemana } from "./index";

export default (
  Jornada_Habitual: number,
  Horas_Ordinarias: (number | null)[],
  Fecha: Date
) => {
  const Codigos_Dias_Inicial = calculoCodigosFinSemana(Horas_Ordinarias, Fecha);

  const Horas_No_Trabajadas = Horas_Ordinarias.map((Horas_Trabajadas) =>
    Horas_Trabajadas ? Jornada_Habitual - Horas_Trabajadas : null
  );

  const Numero_Horas_No_Trabajadas =
    Horas_No_Trabajadas.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0) ??
    0;

  const Numero_Jornadas_No_Trabajadas =
    Jornada_Habitual === 0
      ? Jornada_Habitual
      : Math.round(Numero_Horas_No_Trabajadas / Jornada_Habitual);

  let Count_Jornadas = Numero_Jornadas_No_Trabajadas;

  const Codigos_Jornada = Codigos_Dias_Inicial.map((Codigo) =>
    Codigo === null && Count_Jornadas-- > 0 ? Codigos.Jornada["X"] : Codigo
  );

  generateTSV([Codigos_Jornada.map((_, i) => i + 1), Codigos_Jornada]);

  return Codigos_Jornada;
};
