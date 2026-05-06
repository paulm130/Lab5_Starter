// sum.test.js
import { sum } from '../code-to-unit-test/sum.js';

// comment with change
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4)
});
