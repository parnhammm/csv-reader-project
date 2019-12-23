import fs from "fs";
import { MatchResult } from "./MatchResult";

//Define a tuple for the result of the csv reading...
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  protected newLineChar = "\n";

  data: MatchData[] = [];

  constructor(public filename: string, protected encoding: string = "utf-8") {}
  
  abstract mapRow(row: string[]): MatchData;

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
