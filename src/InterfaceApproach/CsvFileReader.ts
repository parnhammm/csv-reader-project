import fs from "fs";
import { dateStringToDate } from "../Utils/utils";
import { MatchResult } from "../Enums/MatchResult";

//Define a tuple for the result of the csv reading...
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  protected newLineChar = "\n";

  data: MatchData[] = [];

  constructor(public filename: string, protected encoding: string = "utf-8") {}

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

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}