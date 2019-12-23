import { CsvFileMatchReader } from "./DataReaders/CompositionApproach/Readers/CsvFileMatchReader";
import { MatchReader } from "./DataReaders/CompositionApproach/MatchReader";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const matchReader = new MatchReader(new CsvFileMatchReader("football.csv"));
matchReader.load();

const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
