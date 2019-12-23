import { MatchResult } from "./Enums/MatchResult";
import { CsvFileMatchReader } from "./DataReaders/CompositionApproach/Readers/CsvFileMatchReader";
import { MatchReader } from "./DataReaders/CompositionApproach/MatchReader";

const matchReader = new MatchReader(new CsvFileMatchReader("football.csv"));
matchReader.load();



console.log(`Man United won ${manUnitedWins} games`);