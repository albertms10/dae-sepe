import YAML from "yamljs";
import { generateXML, readTXT } from "./helpers";
import { generarSchema } from "./model/calculos";

generateXML(
  generarSchema(YAML.load("../input/info.yml"), readTXT("horas-ordinarias"))
);
