import { CsvFileMatchReader } from "./DataReaders/CompositionApproach/Readers/CsvFileMatchReader";
import { MatchReader } from "./DataReaders/CompositionApproach/MatchReader";
import { Summary } from "./Summary";

const matchReader = new MatchReader(new CsvFileMatchReader("football.csv"));
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Liverpool");
summary.buildAndPrintReport(matchReader.matches);
