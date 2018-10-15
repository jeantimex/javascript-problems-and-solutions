import { assert } from 'chai';
import { parseCSV } from '../csv-parser';

describe('CSV Parser', () => {
  const testCases = [
    [
      [
        'John,Smith,john.smith@gmail.com,Los Angeles,10',
        'Jane,Roberts,janer@msn.com,"San Francisco, CA",0',
        '"Alexandra ""Alex""",Menendez,alex.menendez@gmail.com,Miami,1',
        '1,2,,4,"5"',
      ],
      [
        ['John', 'Smith', 'john.smith@gmail.com', 'Los Angeles', '10'],
        ['Jane', 'Roberts', 'janer@msn.com', 'San Francisco, CA', '0'],
        ['Alexandra "Alex"', 'Menendez', 'alex.menendez@gmail.com', 'Miami', '1'],
        ['1', '2', '', '4', '5'],
      ],
    ],
    [
      ['"one","two with escaped """" double quotes""","three, with, commas",four with no quotes,five for fun'],
      [['one', 'two with escaped "" double quotes"', 'three, with, commas', 'four with no quotes', 'five for fun']],
    ],
  ];

  testCases.forEach(([csvLines, expected], index) => {
    it(`should parse the csv lines ${index}`, () => {
      const actual = parseCSV(csvLines);
      assert.deepEqual(actual, expected);
    });
  });
});
