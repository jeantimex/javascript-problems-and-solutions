/**
 * Word Ladder II
 *
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find all shortest transformation sequence(s) from beginWord to endWord, such that:
 *
 * 1. Only one letter can be changed at a time
 * 2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Note:
 *
 * - Return an empty list if there is no such transformation sequence.
 * - All words have the same length.
 * - All words contain only lowercase alphabetic characters.
 * - You may assume no duplicates in the word list.
 * - You may assume beginWord and endWord are non-empty and are not the same.
 *
 * Example 1:
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output:
 * [
 *   ["hit","hot","dot","dog","cog"],
 *   ["hit","hot","lot","log","cog"]
 * ]
 *
 * Example 2:
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: []
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  const result = {
    list: [],
    min: wordList.length,
  };

  backtracking(beginWord, endWord, dict, [beginWord], result);

  return result.list;
};

const backtracking = (beginWord, endWord, dict, solution, result) => {
  if (beginWord === endWord) {
    const path = solution.slice();

    if (path.length < result.min) {
      result.list = [path];
      result.min = path.length;
    } else if (path.length === result.min) {
      result.list.push(path);
    }
    return;
  }

  if (solution.length >= result.min) {
    return;
  }

  const characters = beginWord.split('');

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];

    for (let j = 0; j < 26; j++) {
      characters[i] = String.fromCharCode(97 + j);
      const newWord = characters.join('');

      if (newWord === beginWord) {
        continue;
      }

      if (dict.has(newWord)) {
        dict.delete(newWord);
        solution.push(newWord);

        backtracking(newWord, endWord, dict, solution, result);

        solution.pop();
        dict.add(newWord);
      }
    }

    characters[i] = char;
  }
};

export { findLadders };

// const beginWord = 'hit';
// const endWord = 'cog';
// const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

// const beginWord = 'game';
// const endWord = 'thee';
// const wordList = ['frye', 'heat', 'tree', 'thee', 'game', 'free', 'hell', 'fame', 'faye'];

const beginWord = 'magic';
const endWord = 'pearl';
const wordList = [
  'flail',
  'halon',
  'lexus',
  'joint',
  'pears',
  'slabs',
  'lorie',
  'lapse',
  'wroth',
  'yalow',
  'swear',
  'cavil',
  'piety',
  'yogis',
  'dhaka',
  'laxer',
  'tatum',
  'provo',
  'truss',
  'tends',
  'deana',
  'dried',
  'hutch',
  'basho',
  'flyby',
  'miler',
  'fries',
  'floes',
  'lingo',
  'wider',
  'scary',
  'marks',
  'perry',
  'igloo',
  'melts',
  'lanny',
  'satan',
  'foamy',
  'perks',
  'denim',
  'plugs',
  'cloak',
  'cyril',
  'women',
  'issue',
  'rocky',
  'marry',
  'trash',
  'merry',
  'topic',
  'hicks',
  'dicky',
  'prado',
  'casio',
  'lapel',
  'diane',
  'serer',
  'paige',
  'parry',
  'elope',
  'balds',
  'dated',
  'copra',
  'earth',
  'marty',
  'slake',
  'balms',
  'daryl',
  'loves',
  'civet',
  'sweat',
  'daley',
  'touch',
  'maria',
  'dacca',
  'muggy',
  'chore',
  'felix',
  'ogled',
  'acids',
  'terse',
  'cults',
  'darla',
  'snubs',
  'boats',
  'recta',
  'cohan',
  'purse',
  'joist',
  'grosz',
  'sheri',
  'steam',
  'manic',
  'luisa',
  'gluts',
  'spits',
  'boxer',
  'abner',
  'cooke',
  'scowl',
  'kenya',
  'hasps',
  'roger',
  'edwin',
  'black',
  'terns',
  'folks',
  'demur',
  'dingo',
  'party',
  'brian',
  'numbs',
  'forgo',
  'gunny',
  'waled',
  'bucks',
  'titan',
  'ruffs',
  'pizza',
  'ravel',
  'poole',
  'suits',
  'stoic',
  'segre',
  'white',
  'lemur',
  'belts',
  'scums',
  'parks',
  'gusts',
  'ozark',
  'umped',
  'heard',
  'lorna',
  'emile',
  'orbit',
  'onset',
  'cruet',
  'amiss',
  'fumed',
  'gelds',
  'italy',
  'rakes',
  'loxed',
  'kilts',
  'mania',
  'tombs',
  'gaped',
  'merge',
  'molar',
  'smith',
  'tangs',
  'misty',
  'wefts',
  'yawns',
  'smile',
  'scuff',
  'width',
  'paris',
  'coded',
  'sodom',
  'shits',
  'benny',
  'pudgy',
  'mayer',
  'peary',
  'curve',
  'tulsa',
  'ramos',
  'thick',
  'dogie',
  'gourd',
  'strop',
  'ahmad',
  'clove',
  'tract',
  'calyx',
  'maris',
  'wants',
  'lipid',
  'pearl',
  'maybe',
  'banjo',
  'south',
  'blend',
  'diana',
  'lanai',
  'waged',
  'shari',
  'magic',
  'duchy',
  'decca',
  'wried',
  'maine',
  'nutty',
  'turns',
  'satyr',
  'holds',
  'finks',
  'twits',
  'peaks',
  'teems',
  'peace',
  'melon',
  'czars',
  'robby',
  'tabby',
  'shove',
  'minty',
  'marta',
  'dregs',
  'lacks',
  'casts',
  'aruba',
  'stall',
  'nurse',
  'jewry',
  'knuth',
];

console.log(findLadders(beginWord, endWord, wordList));

// console.log([
//   ['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'party', 'parry', 'perry', 'peary', 'pearl'],
//   ['magic', 'manic', 'mania', 'maria', 'maris', 'paris', 'parks', 'perks', 'peaks', 'pears', 'pearl'],
//   ['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'marry', 'merry', 'perry', 'peary', 'pearl'],
//   ['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'marry', 'parry', 'perry', 'peary', 'pearl'],
//   ['magic', 'manic', 'mania', 'maria', 'maris', 'marks', 'parks', 'perks', 'peaks', 'pears', 'pearl'],
// ]);
