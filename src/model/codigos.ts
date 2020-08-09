export const enum Jornada {
  /** No trabajado */
  X = "X",
  /** Descanso */
  D = "D",
}

export const enum Periodos_Actividad {
  /** Días no trabajados en el mes/periodo (días de pago de la prestación) */
  "01" = "01",
  /**
   * Días sin actividad laboral por no acudir al llamamiento
   * _Fijos discontinuos_ (excluidos del pago de la prestación)
   */
  "02" = "02",
  /** Días trabajados en el mes/periodo */
  "03" = "03",
  /** Días IT (excluidos del pago de la prestación por este sistema) */
  "04" = "04",
  /** Descanso semanal */
  "05" = "05",
  /** Vacaciones anuales retribuidas (excluidas del pago de la prestación) */
  "06" = "06",
}

export enum Meses {
  enero,
  febrero,
  marzo,
  abril,
  mayo,
  junio,
  julio,
  agosto,
  septiembre,
  octubre,
  noviembre,
  diciembre,
}
