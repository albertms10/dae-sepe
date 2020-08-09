import * as fs from "fs";
import * as path from "path";

/**
 * Comprueba que el directorio especificado exista y,
 * en caso contrario, lo crea. Devuelve la dirección
 * completa.
 */
export default (pathname: string) => {
  const inputPath = path.resolve(__dirname, pathname);

  if (!fs.existsSync(inputPath)) fs.mkdirSync(inputPath);

  return inputPath;
};
