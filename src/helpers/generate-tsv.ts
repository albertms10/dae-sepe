import * as path from "path";
import * as fs from "fs";

/**
 * Genera y escribe un archivo TSV con los datos proporcionados.
 */
export default (Datos: any[][]) => {
  const outputPath = path.resolve(__dirname, "../../../output");

  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

  fs.writeFile(
    path.resolve(outputPath, "output.tsv"),
    Datos.map((Dato) => Dato.toString().replace(/,/g, "\t")).join("\n"),
    (err) => {
      if (err) console.error(err);
    }
  );
};
