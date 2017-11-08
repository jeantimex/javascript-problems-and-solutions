import { assert } from 'chai';
import UndirectedGraphNode from 'common/undirected-graph-node';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';

describe('Graph Util', () => {
  const testCases = [null, '0', '0,1#1', '0,1,2#1#2', '0,1,2#1,2#2,2', '0,0', '0,0,1#1,1,2#2,2'];

  testCases.forEach((testCase, index) => {
    it(`should deserialize and serialize the graph ${index}: ${testCase}`, () => {
      const graph = deserializeUndirectedGraph(testCase);
      const encode = serializeUndirectedGraph(graph);
      assert.equal(encode, testCase);
    });
  });
});
