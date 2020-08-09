import * as path from "path";
import * as fs from "fs";

/**
 * Lee e interpreta un archivo de texto.
 */
export default () => {
  const inputPath = path.resolve(__dirname, "../../../input");

  if (!fs.existsSync(inputPath)) fs.mkdirSync(inputPath);

  let data;

  try {
    data = fs.readFileSync(path.resolve(inputPath, "input.txt"));
  } catch (e) {
    return console.error(e);
  }

  return data
    .toString()
    .split("\n")
    .map((val) => (val ? parseFloat(val) : null));
};
