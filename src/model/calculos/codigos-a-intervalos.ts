import { formatoFecha } from "../../utils";
import * as Codigos from "../codigos";
import * as Model from "../model";

export default (Codigos_Dias: (Codigos.Jornada | null)[], Fecha: Date) =>
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
