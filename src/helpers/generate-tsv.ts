import * as path from "path";
import * as fs from "fs";

/**
 * Genera y escribe un archivo TSV con los datos proporcionados.
 */
export default (Datos: any[][]) => {
  fs.writeFile(
    path.resolve(__dirname, "../../out", "output.tsv"),
    Datos.map((Dato) => Dato.toString().replace(/,/g, "\t")).join("\n"),
    (err) => {
      if (err) console.error(err);
    }
  );
};
