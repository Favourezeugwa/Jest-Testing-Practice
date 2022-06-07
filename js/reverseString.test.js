const reverseString = require('./reverseString')

test('return reversed string', () => {
  expect(reverseString('hello')).toBe('olleh')
  expect(reverseString('favour')).toBe('ruovaf')
  expect(reverseString('favour')).not.toBe('favour')
})