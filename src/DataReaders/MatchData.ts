import { MatchResult } from "../Enums/MatchResult";

//Define a tuple for the result of the csv reading...
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
