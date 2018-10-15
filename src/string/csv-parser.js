/**
 * We're going to implement a simple CSV parsing function.
 * There are two things to focus on. The first (and most importantly)
 * is correctly parsing the CSV format. The second is writing
 * clean code that another engineer would enjoy using.
 *
 * You may assume that the CSV file is correctly formatted.
 * 
 * csv_lines = [
 *   'John,Smith,john.smith@gmail.com,Los Angeles,10',
 *   'Jane,Roberts,janer@msn.com,"San Francisco, CA",0',
 *   '"Alexandra ""Alex""",Menendez,alex.menendez@gmail.com,Miami,1',
 *   '1,2,,4,"5"'
 * ]

 *
 * An ideal parse will look like this:
 * [['John', 'Smith', 'john.smith@gmail.com', 'Los Angeles', '1'],
 * ['Jane', 'Roberts', 'janer@msn.com', 'San Francisco, CA', '0'],
 * ['Alexandra "Alex"', 'Menendez', 'alex.menendez@gmail.com', 'Miami', '1'],
 * ['1','2','','4','5']]
 */

/**
 * Parse one line of CSV
 * @param {string} text
 * @return {string[]}
 */
const parseCSVLine = text => {
  const arr = [''];
  let i = 0; // current index
  let p = ''; // previous character
  let s = true; // whether we have seen a pair of double quotes

  for (let c of text) {
    if (c === '"') {
      s = !s;
      if (p === '"') {
        arr[i] += '"'; // the previous character is also double quote
        c = ''; // reset previous character
      }
    } else if (s && c === ',') {
      c = arr[++i] = ''; // reset previous character
    } else {
      arr[i] += c;
    }

    p = c;
  }

  return arr;
};

/**
 * Parse CSV
 * @param {string[]} csvLines
 * @return {string[][]}
 */
const parseCSV = csvLines => csvLines.map(line => parseCSVLine(line));

export { parseCSV };
