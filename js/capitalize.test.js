const capitalize = require('./capitalize')

test('first character is capitalized', () => {
  expect(capitalize('ezeugwa')).toBe('Ezeugwa')
  expect(capitalize('favour')).toBe('Favour')
  expect(capitalize('amarachi')).not.toEqual('amarachi')
  expect(capitalize('microverse')).not.toBe('microverse')

})