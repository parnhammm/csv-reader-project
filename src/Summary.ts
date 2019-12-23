import { MatchData } from "./DataReaders/MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  public buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}
