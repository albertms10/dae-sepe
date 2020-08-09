import * as Codigos from "./codigos";

abstract class Entidad {
  constructor(readonly CIF_NIF: string) {}
}

export class Empresa implements Entidad {
  constructor(
    readonly CIF_NIF: string,
    readonly CCC: string,
    readonly Numero_ERE: string
  ) {}
}

export class Representante implements Entidad {
  constructor(
    readonly CIF_NIF: string,
    readonly Nombre: string,
    readonly Apellido1: string
  ) {}
}

export class DatosActividad {
  constructor(
    readonly Coeficiente_Actividad: string,
    readonly Periodo_Actividad: PeriodoActividad
  ) {}
}

export class PeriodoActividad {
  constructor(
    readonly Fecha_Inicio_Periodo: string,
    readonly Fecha_Fin_Periodo: string,
    readonly Intervalo_Actividad: IntervaloActividad[]
  ) {}
}

export class IntervaloActividad {
  constructor(
    readonly Fecha_Inicio: string,
    readonly Fecha_Fin: string,
    readonly Codigo_Actividad: Codigos.Periodos_Actividad
  ) {}
}

export class Trabajador {
  constructor(
    readonly NIF_NIE: string,
    readonly Datos_Actividad?: DatosActividad
  ) {}
}
