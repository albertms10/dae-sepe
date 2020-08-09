import * as fs from "fs";
import * as path from "path";
import { checkDirExists } from "./index";

/**
 * Genera y escribe un archivo TSV con los datos proporcionados.
 */
export default (Datos: any[][]) => {
  fs.writeFile(
    path.resolve(checkDirExists("../../../output"), "output.tsv"),
    Datos.map((Dato) => Dato.toString().replace(/,/g, "\t")).join("\n"),
    (err) => {
      if (err) console.error(err);
    }
  );
};
