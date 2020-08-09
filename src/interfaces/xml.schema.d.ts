declare module "xml:schema" {
  interface AttributesDeclaration {
    _attributes: {
      version: string;
      encoding: string;
    };
  }

  interface AttributesComunicacion_Unica {
    _attributes: {
      "xmlns:xsi": string;
      "xsi:noNamespaceSchemaLocation": string;
    };
  }

  interface Datos {
    Datos_Representante: import("../model/model").Representante;
    Datos_Empresa: import("../model/model").Empresa;
    Datos_Trabajador: import("../model/model").Trabajador;
  }

  interface Comunicacion_Unica extends AttributesComunicacion_Unica, Datos {}

  interface Schema {
    _declaration: AttributesDeclaration;
    Comunicacion_Unica: Comunicacion_Unica;
  }

  interface Info {
    Representante: {
      CIF_NIF: string;
      Nombre: string;
      Apellido1: string;
    };
    Empresa: {
      CIF_NIF: string;
      CCC: string;
      Numero_ERE: string;
    };
    Trabajador: {
      NIF_NIE: string;
      Jornada_Habitual: 7.1;
    };
    Mes: import("../model/codigos").Meses;
  }
}
