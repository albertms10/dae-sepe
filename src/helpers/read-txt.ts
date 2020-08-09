import * as fs from "fs";
import * as path from "path";
import { checkDirExists } from "./index";

/**
 * Lee e interpreta un archivo de texto.
 */
export default (archivo: string) => {
  let data: Buffer;

  try {
    data = fs.readFileSync(
      path.resolve(checkDirExists("../../input"), `${archivo}.txt`)
    );
  } catch (e) {
    console.error(e);
    return [];
  }

  return data
    .toString()
    .split("\n")
    .map((val) => (val ? parseFloat(val) : null));
};
