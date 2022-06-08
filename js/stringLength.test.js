const stringLength = require('./stringLength');

test('return string Length', () => {
  expect(stringLength('amarachi')).toBe(8);
  expect(stringLength('amarachi')).not.toBe(11);
  expect(stringLength('favourezeugwa')).toBe('This is an Error');
  expect(stringLength('')).not.toBe(1);
});
