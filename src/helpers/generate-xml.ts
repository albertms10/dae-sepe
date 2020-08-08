import fs from "fs";
import path from "path";
import { js2xml } from "xml-js";
import * as XML from "xml:schema";
import { prepareXML } from "./index";

export default (Datos: XML.Datos) => {
  fs.writeFile(
    path.resolve(__dirname, "../../out", "output.xml"),
    js2xml(prepareXML(Datos), {
      compact: true,
      fullTagEmptyElement: true,
      ignoreComment: true,
      spaces: 4,
    }),
    (err) => {
      if (err) console.error(err);
    }
  );
};
