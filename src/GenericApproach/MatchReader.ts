import { CsvFileReader } from "./FileReader/CsvFileReader";
import { dateStringToDate } from "../Utils/utils";
import { MatchResult } from "./MatchResult";

//Define a tuple for the result of the csv reading...
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
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
