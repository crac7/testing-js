const  { sum, divide, multiply } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('mutiply', () => {
  expect(multiply(2, 2)).toBe(4);
});



test('divide', () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(6, 0)).toBeNull();
});
