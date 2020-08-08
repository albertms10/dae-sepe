import { js2xml } from "xml-js";
import * as XML from "xml:schema";
import { prepareXML } from "./index";

export default (Datos: XML.Datos): string =>
  js2xml(prepareXML(Datos), {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  });
