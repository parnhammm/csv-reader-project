import { MatchResult } from "./Enums/MatchResult";
import { CsvFileMatchReader } from "./CompositionApproach/Readers/CsvFileMatchReader";
import { MatchReader } from "./CompositionApproach/MatchReader";

const matchReader = new MatchReader(new CsvFileMatchReader("football.csv"));
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);