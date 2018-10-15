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
    [
      [
        'John,Doe,120 jefferson st.,Riverside, NJ, 08075',
        'Jack,McGinnis,220 hobo Av.,Phila, PA,09119',
        '"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075',
        'Stephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234',
        ',Blankman,,SomeTown, SD, 00298',
        '"Joan ""the bone"", Anne",Jet,"9th, at Terrace plc",Desert City,CO,00123',
      ],
      [
        ['John', 'Doe', '120 jefferson st.', 'Riverside', ' NJ', ' 08075'],
        ['Jack', 'McGinnis', '220 hobo Av.', 'Phila', ' PA', '09119'],
        ['John "Da Man"', 'Repici', '120 Jefferson St.', 'Riverside', ' NJ', '08075'],
        ['Stephen', 'Tyler', '7452 Terrace "At the Plaza" road', 'SomeTown', 'SD', ' 91234'],
        ['', 'Blankman', '', 'SomeTown', ' SD', ' 00298'],
        ['Joan "the bone", Anne', 'Jet', '9th, at Terrace plc', 'Desert City', 'CO', '00123'],
      ],
    ],
  ];

  testCases.forEach(([csvLines, expected], index) => {
    it(`should parse the csv lines ${index}`, () => {
      const actual = parseCSV(csvLines);
      assert.deepEqual(actual, expected);
    });
  });
});
