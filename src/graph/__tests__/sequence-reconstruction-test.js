import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import { sequenceReconstructionDFS, sequenceReconstructionBFS } from '../sequence-reconstruction';

describe('Sequence Reconstruction', () => {
  const testCases = [
    [[1, 2, 3], [[1, 2], [1, 3]], false],
    [[1, 2, 3], [[1, 2]], false],
    [[3], [[1, 2]], false],
    [[3, 4], [[1, 2]], false],
    [[1, 2, 3], [[1, 2], [1, 3], [2, 3]], true],
    [[4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]], true],
  ];

  testCases.forEach((testCase, index) => {
    it(`should validate sequence reconstruction DFS ${index}`, () => {
      const org = testCase[0];
      const seqs = testCase[1];
      const expected = testCase[2];
      const actual = sequenceReconstructionDFS(org, seqs);
      assert.equal(actual, expected);
    });
  });

  testCases.forEach((testCase, index) => {
    it(`should validate sequence reconstruction BFS ${index}`, () => {
      const org = testCase[0];
      const seqs = testCase[1];
      const expected = testCase[2];
      const actual = sequenceReconstructionBFS(org, seqs);
      assert.equal(actual, expected);
    });
  });
});
