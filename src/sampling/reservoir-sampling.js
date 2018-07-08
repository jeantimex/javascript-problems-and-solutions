/**
 * Reservoir Sampling
 *
 * Given a big array (or stream) of numbers (to simplify), and we need to write an efficient
 * function to randomly select k numbers where 1 <= k <= n. Let the input array be stream[].
 *
 * How does this work?
 * To prove that this solution works perfectly, we must prove that the probability that any item
 * stream[i] where 0 <= i < n will be in final reservoir[] is k/n. Let us divide the proof in two
 * cases as first k items are treated differently.
 *
 * Case 1: For last n-k stream items, i.e., for stream[i] where k <= i < n
 * For every such stream item stream[i], we pick a random index from 0 to i and if the picked index
 * is one of the first k indexes, we replace the element at picked index with stream[i]
 *
 * To simplify the proof, let us first consider the last item. The probability that the last item is
 * in final reservoir = The probability that one of the first k indexes is picked for last item = k/n
 * (the probability of picking one of the k items from a list of size n)
 *
 * Let us now consider the second last item. The probability that the second last item is in final
 * reservoir[] = [Probability that one of the first k indexes is picked in iteration for
 * stream[n-2]] X [Probability that the index picked in iteration for stream[n-1] is not same as index
 * picked for stream[n-2] ] = [k/(n-1)]*[(n-1)/n] = k/n.
 *
 * Similarly, we can consider other items for all stream items from stream[n-1] to stream[k] and generalize the proof.
 *
 * Case 2: For first k stream items, i.e., for stream[i] where 0 <= i < k
 * The first k items are initially copied to reservoir[] and may be removed later in iterations for stream[k] to stream[n].
 * The probability that an item from stream[0..k-1] is in final array = Probability that the item is not picked when items
 * stream[k], stream[k+1], ... stream[n-1] are considered = [k/(k+1)] x [(k+1)/(k+2)] x [(k+2)/(k+3)] x … x [(n-1)/n] = k/n
 */

import { randomInt } from 'utils/random';

/**
 * @param {number[]} stream
 * @param {number} k
 * @return {number[]}
 */
const selectKItems = (stream, k) => {
  const n = stream.length;

  // reservoir[] is the output array. Initialize it with first k elements from stream[]
  const reservoir = Array(k);
  for (let i = 0; i < k; i++) {
    reservoir[i] = stream[i];
  }

  // iterate from the (k+1)th element to nth element
  for (let i = k; i < n; i++) {
    // pick a random index from 0 to i
    const j = randomInt(0, i, true);

    // If the randomly  picked index is smaller than k,
    // then replace the element present at the index
    // with new element from stream
    if (j < k) {
      reservoir[j] = stream[i];
    }
  }
};

export { selectKItems };
