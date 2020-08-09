import * as path from "path";
import * as fs from "fs";

/**
 * Lee e interpreta un archivo de texto.
 */
export default () => {
  let data;

  try {
    data = fs.readFileSync(path.resolve(__dirname, "../../in", "input.txt"));
  } catch (e) {
    return console.error(e);
  }

  return data
    .toString()
    .split("\n")
    .map((val) => (val ? parseFloat(val) : null));
};
