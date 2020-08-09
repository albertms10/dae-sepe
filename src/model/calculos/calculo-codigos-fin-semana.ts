import * as Codigos from "../codigos";

export default (Horas_Ordinarias: (number | null)[], Fecha: Date) =>
  Horas_Ordinarias.map((Horas_Trabajadas, i) => {
    Fecha.setDate(i + 1);
    const numDia = Fecha.getDay();

    if (!Horas_Trabajadas)
      return numDia === 6 || numDia === 0
        ? Codigos.Jornada["D"]
        : Codigos.Jornada["X"];
    else return null;
  });
