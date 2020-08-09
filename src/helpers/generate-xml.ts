import fs from "fs";
import path from "path";
import { js2xml } from "xml-js";
import * as XML from "xml:schema";
import { prepareXML } from "./index";

/**
 * Genera y escribe un archivo XML con los datos proporcionados.
 */
export default (Datos: XML.Datos) => {
  const outputPath = path.resolve(__dirname, "../../../output");

  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

  fs.writeFile(
    path.resolve(outputPath, "output.xml"),
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
