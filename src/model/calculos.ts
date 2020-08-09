import * as Codigos from "../model/codigos";
import * as Model from "../model/model";
import { formatoFecha } from "../utils";

const calculoCodigosFinSemana = (
  Horas_Ordinarias: (number | null)[],
  Fecha: Date
) =>
  Horas_Ordinarias.map((Horas_Trabajadas, i) => {
    Fecha.setDate(i + 1);
    const numDia = Fecha.getDay();

    if (!Horas_Trabajadas)
      return numDia === 6 || numDia === 0
        ? Codigos.Jornada["D"]
        : Codigos.Jornada["X"];
    else return null;
  });

const calculoCodigosJornada = (
  Jornada_Habitual: number,
  Horas_Ordinarias: (number | null)[],
  Fecha: Date
) => {
  const Codigos_Dias_Inicial = calculoCodigosFinSemana(Horas_Ordinarias, Fecha);

  const Horas_No_Trabajadas = Horas_Ordinarias.map((Horas_Trabajadas) =>
    Horas_Trabajadas ? Jornada_Habitual - Horas_Trabajadas : null
  );

  const Numero_Horas_No_Trabajadas =
    Horas_No_Trabajadas.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0)) ?? 0;

  const Numero_Jornadas_No_Trabajadas =
    Jornada_Habitual === 0
      ? Jornada_Habitual
      : Math.round(Numero_Horas_No_Trabajadas / Jornada_Habitual);

  let Count_Jornadas = Numero_Jornadas_No_Trabajadas;

  return Codigos_Dias_Inicial.map((Codigo) =>
    Codigo === null && Count_Jornadas-- > 0 ? Codigos.Jornada["X"] : Codigo
  );
};

const codigosAIntervalos = (
  Codigos_Dias: (Codigos.Jornada | null)[],
  Fecha: Date
) =>
  Codigos_Dias.map((Codigo, i) => {
    Fecha.setDate(i + 1);

    return new Model.IntervaloActividad(
      formatoFecha(Fecha),
      formatoFecha(Fecha),
      Codigo === Codigos.Jornada["X"]
        ? Codigos.Periodos_Actividad["01"]
        : Codigos.Periodos_Actividad["03"]
    );
  });

export const calculoIntervaloActividad = (
  Jornada_Habitual: number,
  Horas_Ordinarias: (number | null)[],
  Fecha: Date
) =>
  codigosAIntervalos(
    calculoCodigosJornada(Jornada_Habitual, Horas_Ordinarias, Fecha),
    Fecha
  );
