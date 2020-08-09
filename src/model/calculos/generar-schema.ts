/// <reference path="../../interfaces/xml.schema.d.ts" />
import { Info } from "xml:schema";
import { fechaFinalMes, fechaInicioMes, formatoFecha } from "../../utils";
import { Meses } from "../codigos";
import * as Model from "../model";
import { calculoIntervaloActividad } from "./index";

export default (
  { Representante, Empresa, Trabajador, Mes }: Info,
  Horas_Ordinarias: (number | null)[]
) => {
  const Fecha = new Date(2020, Meses[Mes]);

  return {
    Datos_Representante: new Model.Representante(
      Representante.CIF_NIF,
      Representante.Nombre,
      Representante.Apellido1
    ),
    Datos_Empresa: new Model.Empresa(
      Empresa.CIF_NIF,
      Empresa.CCC,
      Empresa.Numero_ERE
    ),
    Datos_Trabajador: new Model.Trabajador(
      Trabajador.NIF_NIE,
      new Model.DatosActividad(
        "04",
        new Model.PeriodoActividad(
          formatoFecha(fechaInicioMes(Fecha)),
          formatoFecha(fechaFinalMes(Fecha)),
          calculoIntervaloActividad(
            Trabajador.Jornada_Habitual,
            Horas_Ordinarias,
            Fecha
          )
        )
      )
    ),
  };
};
