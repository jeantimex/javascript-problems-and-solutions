/**
 * Number of Intersected Rectangles
 *
 * Union-Find Solution
 */

const countIntersection = rectangles => {
  if (!rectangles || rectangles.length === 0) {
    return 0;
  }

  const n = rectangles.length;
  const parents = Array(n);

  for (let i = 0; i < n; i++) {
    parents[i] = i;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (intersect(rectangles[i], rectangles[j])) {
        const root1 = find(i, parents);
        const root2 = find(j, parents);

        if (root1 != root2) {
          parents[root1] = root2;
        }
      }
    }
  }

  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(find(i, parents));
  }

  return set.size();
};

const find = (val, parents) => {
  while (parents[val] !== val) {
    val = parents[val];
  }
  return val;
};

const intersect = (r1, r2) =>
  (r1[0][0] < r2[0][0] && r1[0][1] < r2[0][1] && r2[0][0] < r1[1][0] && r2[0][1] < r1[1][1]) ||
  (r1[0][0] < r2[1][0] && r1[0][1] < r2[1][1] && r2[1][0] < r1[1][0] && r2[1][1] < r1[1][1]);

export { countIntersection };
