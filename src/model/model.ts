import * as Codigos from "./codigos";

abstract class Entidad {
  CIF_NIF: string;

  constructor(CIF_NIF: string) {
    this.CIF_NIF = CIF_NIF;
  }
}

export class Empresa implements Entidad {
  CIF_NIF: string;
  CCC: string;
  Numero_ERE: string;

  constructor(CIF_NIF: string, CCC: string, Numero_ERE: string) {
    this.CIF_NIF = CIF_NIF;
    this.CCC = CCC;
    this.Numero_ERE = Numero_ERE;
  }
}

export class Representante implements Entidad {
  CIF_NIF: string;
  Nombre: string;
  Apellido1: string;

  constructor(CIF_NIF: string, Nombre: string, Apellido1: string) {
    this.CIF_NIF = CIF_NIF;
    this.Nombre = Nombre;
    this.Apellido1 = Apellido1;
  }
}

export class DatosActividad {
  Coeficiente_Actividad: string;
  Periodo_Actividad: PeriodoActividad;

  constructor(
    Coeficiente_Actividad: string,
    Periodo_Actividad: PeriodoActividad
  ) {
    this.Coeficiente_Actividad = Coeficiente_Actividad;
    this.Periodo_Actividad = Periodo_Actividad;
  }
}

export class PeriodoActividad {
  Fecha_Inicio_Periodo: string;
  Fecha_Fin_Periodo: string;
  Intervalo_Actividad: IntervaloActividad[];

  constructor(
    Fecha_Inicio_Periodo: string,
    Fecha_Fin_Periodo: string,
    Intervalo_Actividad: IntervaloActividad[]
  ) {
    this.Fecha_Inicio_Periodo = Fecha_Inicio_Periodo;
    this.Fecha_Fin_Periodo = Fecha_Fin_Periodo;
    this.Intervalo_Actividad = Intervalo_Actividad;
  }
}

export class IntervaloActividad {
  Fecha_Inicio: string;
  Fecha_Fin: string;
  Codigo_Actividad: Codigos.Periodos_Actividad;

  constructor(
    Fecha_Inicio: string,
    Fecha_Fin: string,
    Codigo_Actividad: Codigos.Periodos_Actividad
  ) {
    this.Fecha_Inicio = Fecha_Inicio;
    this.Fecha_Fin = Fecha_Fin;
    this.Codigo_Actividad = Codigo_Actividad;
  }
}

export class Trabajador {
  NIF_NIE: string;
  Datos_Actividad: DatosActividad;

  constructor(NIF_NIE: string, Datos_Actividad: DatosActividad) {
    this.NIF_NIE = NIF_NIE;
    this.Datos_Actividad = Datos_Actividad;
  }
}
