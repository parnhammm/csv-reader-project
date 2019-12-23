import fs from "fs";

export abstract class CsvFileReader<T> {
  /** The data that is retrieved from the CSV */
  public data: T[] = [];

  /** The newline char used for the CSV */
  protected newLineChar = "\n";

  /**
   * Constructs the CsvFileReader object
   *
   * @param filename The name of the file to read
   * @param encoding Optional. The encoding expected within the file
   */
  constructor(public filename: string, protected encoding: string = "utf-8") {}

  /**
   * Used when iterating over each line in the CSV file to map the data structure T
   *
   * @param row
   */
  abstract mapRow(row: string[]): T;

  /**
   * Reads through the CSV and using the function supplied for mapRow, maps each line into a data
   * structure assigned to this.data
   */
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
