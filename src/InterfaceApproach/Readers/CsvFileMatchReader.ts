import fs from "fs";
import { DataReader } from "../MatchReader";

export class CsvFileMatchReader implements DataReader {
  protected newLineChar = "\n";

  data: string[][] = [];

  constructor(public filename: string, protected encoding: string = "utf-8") {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: this.encoding
      })
      .split(this.newLineChar)
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
