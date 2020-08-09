# Días de actividad equivalente para el Servicio Público de Empleo Estatal

![Node.js CI](https://github.com/albertms10/dae-sepe/workflows/Node.js%20CI/badge.svg)
![CodeQL](https://github.com/albertms10/dae-sepe/workflows/CodeQL/badge.svg)

Este programa está destinado a convertir las horas trabajadas a tiempo parcial en días de no actividad para que el SEPE pueda realizar los pagos de prestación.

## Cómo funciona

Para proveer de datos el programa, en el directorio `/input` deberán existir dos documentos:

```bash
input
├─ horas-ordinarias.txt
└─ info.yml
```

El primero, [`horas-ordinarias.txt`](https://github.com/albertms10/dae-sepe/blob/master/input/horas-ordinarias.txt), deberá contener, separadas por saltos de línea, las horas correspondientes a cada día del mes, uno por línea. Si un día no contiene horas trabajadas (p. ej. fines de semana), deberá dejarse la línea en blanco.

El segundo, [`info.yml`](https://github.com/albertms10/dae-sepe/blob/master/input/info.yml), contendrá la información necesaria relativa a la empresa, el representante y el trabajador, junto con la información del mes.
