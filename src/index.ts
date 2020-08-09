import { Info } from "xml:schema";
import YAML from "yamljs";
import { generateXML, readTXT } from "./helpers";
import { calculoIntervaloActividad } from "./model/calculos";
import { Meses } from "./model/codigos";
import * as Model from "./model/model";
import { fechaFinalMes, fechaInicioMes, formatoFecha } from "./utils";

const { Representante, Empresa, Trabajador, Mes }: Info = YAML.load(
  "../input/info.yml"
);
const Horas_Ordinarias = readTXT("horas-ordinarias");
const Fecha = new Date(2020, parseInt(Meses[Mes]));
const Coeficiente_Actividad = "04";

const Datos = {
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
      Coeficiente_Actividad,
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

generateXML(Datos);
