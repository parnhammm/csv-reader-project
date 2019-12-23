import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  protected newLineChar = "\n";

  constructor(public filename: string, protected encoding: string = "utf-8") {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: this.encoding
      })
      .split(this.newLineChar)
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
