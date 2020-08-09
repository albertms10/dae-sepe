import * as fs from "fs";
import * as path from "path";
import { checkDirExists } from "./index";

/**
 * Lee e interpreta un archivo de texto.
 */
export default () => {
  let data: Buffer;

  try {
    data = fs.readFileSync(
      path.resolve(checkDirExists("../../../input"), "input.txt")
    );
  } catch (e) {
    return console.error(e);
  }

  return data
    .toString()
    .split("\n")
    .map((val) => (val ? parseFloat(val) : null));
};
