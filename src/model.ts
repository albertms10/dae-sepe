class Entidad {
  CIF_NIF: string;

  constructor(CIF_NIF: string) {
    this.CIF_NIF = CIF_NIF;
  }
}

class Persona {
  Nombre?: string;
  Apellido1?: string;

  constructor(Nombre?: string, Apellido1?: string) {
    this.Nombre = Nombre;
    this.Apellido1 = Apellido1;
  }
}

export class Empresa extends Entidad {
  CCC: string;
  Numero_ERE: string;

  constructor(CIF_NIF: string, CCC: string, Numero_ERE: string) {
    super(CIF_NIF);

    this.CCC = CCC;
    this.Numero_ERE = Numero_ERE;
  }
}

export class Representante extends Persona implements Entidad {
  CIF_NIF: string;

  constructor(CIF_NIF: string, Nombre?: string, Apellido1?: string) {
    super(Nombre, Apellido1);

    this.CIF_NIF = CIF_NIF;
  }
}

class DatosActividad {
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

class PeriodoActividad {
  Fecha_Inicio_Periodo: string;
  Fecha_Fin_Periodo: string;
  Intervalos_Actividad: IntervaloActividad[];

  constructor(
    Fecha_Inicio_Periodo: string,
    Fecha_Fin_Periodo: string,
    Intervalos_Actividad: IntervaloActividad[]
  ) {
    this.Fecha_Inicio_Periodo = Fecha_Inicio_Periodo;
    this.Fecha_Fin_Periodo = Fecha_Fin_Periodo;
    this.Intervalos_Actividad = Intervalos_Actividad;
  }
}

class IntervaloActividad {
  Fecha_Inicio: string;
  Fecha_Fin: string;
  Codigo_Actividad: string;

  constructor(
    Fecha_Inicio: string,
    Fecha_Fin: string,
    Codigo_Actividad: string
  ) {
    this.Fecha_Inicio = Fecha_Inicio;
    this.Fecha_Fin = Fecha_Fin;
    this.Codigo_Actividad = Codigo_Actividad;
  }
}

export class Trabajador extends Persona {
  NIF_NIE: string;
  Datos_Actividad: DatosActividad;

  constructor(
    NIF_NIE: string,
    Datos_Actividad: DatosActividad,
    Nombre?: string,
    Apellido1?: string
  ) {
    super(Nombre, Apellido1);

    this.NIF_NIE = NIF_NIE;
    this.Datos_Actividad = Datos_Actividad;
  }
}
