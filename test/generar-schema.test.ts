import { expect } from "chai";
import "mocha";
import { generarSchema } from "../src/model/calculos";

describe("Generate schema", () => {
  it("should return a valid schema", () => {
    const schema = generarSchema(
      {
        Representante: {
          CIF_NIF: "12345678Z",
          Nombre: "NOMBRE",
          Apellido1: "APELLIDO1",
        },
        Empresa: {
          CIF_NIF: "B12345678",
          CCC: "012345678901234",
          Numero_ERE: "000002020",
        },
        Trabajador: {
          NIF_NIE: "X1234567W",
          Jornada_Habitual: 7.1,
        },
        Mes: "julio",
      },
      [
        3.5,
        3.5,
        3.5,
        null,
        null,
        6.3,
        6.3,
        6.3,
        6.3,
        6.3,
        null,
        null,
        6.3,
        6.3,
        6.3,
        6.3,
        6.3,
        null,
        null,
        6.3,
        6.3,
        6.3,
        6.3,
        6.3,
        null,
        null,
        6.3,
        6.3,
        6.3,
        6.3,
        6.3,
      ]
    );

    expect(schema).to.deep.equal({
      Datos_Representante: {
        CIF_NIF: "12345678Z",
        Nombre: "NOMBRE",
        Apellido1: "APELLIDO1",
      },
      Datos_Empresa: {
        CIF_NIF: "B12345678",
        CCC: "012345678901234",
        Numero_ERE: "000002020",
      },
      Datos_Trabajador: {
        NIF_NIE: "X1234567W",
        Datos_Actividad: {
          Coeficiente_Actividad: "04",
          Periodo_Actividad: {
            Fecha_Inicio_Periodo: "20200701",
            Fecha_Fin_Periodo: "20200731",
            Intervalo_Actividad: [
              {
                Fecha_Inicio: "20200701",
                Fecha_Fin: "20200701",
                Codigo_Actividad: "01",
              },
              {
                Fecha_Inicio: "20200702",
                Fecha_Fin: "20200702",
                Codigo_Actividad: "01",
              },
              {
                Fecha_Inicio: "20200703",
                Fecha_Fin: "20200703",
                Codigo_Actividad: "01",
              },
              {
                Fecha_Inicio: "20200704",
                Fecha_Fin: "20200704",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200705",
                Fecha_Fin: "20200705",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200706",
                Fecha_Fin: "20200706",
                Codigo_Actividad: "01",
              },
              {
                Fecha_Inicio: "20200707",
                Fecha_Fin: "20200707",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200708",
                Fecha_Fin: "20200708",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200709",
                Fecha_Fin: "20200709",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200710",
                Fecha_Fin: "20200710",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200711",
                Fecha_Fin: "20200711",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200712",
                Fecha_Fin: "20200712",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200713",
                Fecha_Fin: "20200713",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200714",
                Fecha_Fin: "20200714",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200715",
                Fecha_Fin: "20200715",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200716",
                Fecha_Fin: "20200716",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200717",
                Fecha_Fin: "20200717",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200718",
                Fecha_Fin: "20200718",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200719",
                Fecha_Fin: "20200719",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200720",
                Fecha_Fin: "20200720",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200721",
                Fecha_Fin: "20200721",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200722",
                Fecha_Fin: "20200722",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200723",
                Fecha_Fin: "20200723",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200724",
                Fecha_Fin: "20200724",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200725",
                Fecha_Fin: "20200725",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200726",
                Fecha_Fin: "20200726",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200727",
                Fecha_Fin: "20200727",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200728",
                Fecha_Fin: "20200728",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200729",
                Fecha_Fin: "20200729",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200730",
                Fecha_Fin: "20200730",
                Codigo_Actividad: "03",
              },
              {
                Fecha_Inicio: "20200731",
                Fecha_Fin: "20200731",
                Codigo_Actividad: "03",
              },
            ],
          },
        },
      },
    });
  });
});
