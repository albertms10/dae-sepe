import * as XML from "xml:schema";

export default (Datos: XML.Datos): XML.Schema => {
  const _declaration: XML.AttributesDeclaration = {
    _attributes: {
      version: "1.0",
      encoding: "ISO-8859-1",
    },
  };

  const AttributesComunicacion_Unica: XML.AttributesComunicacion_Unica = {
    _attributes: {
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:noNamespaceSchemaLocation":
        "EsquemaComunicacionPeriodosActividadUnicav2.xsd",
    },
  };

  return {
    _declaration,
    Comunicacion_Unica: {
      ...AttributesComunicacion_Unica,
      ...Datos,
    },
  };
};
