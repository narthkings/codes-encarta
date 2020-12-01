const Secret = require('./solution')

test('first result to be undefined', () => {
  const result = new Secret()

  expect(result.Secret).toBeUndefined()
})
test('to return the value', () => {
  const result = new Secret('our secret')

  expect(result.getSecret()).toBe('our secret')
})

test('set a new value', () => {
  const result = new Secret('our secret')

  expect(result.setSecret('new secret alert')).toBe('new secret alert')
})

test('get same old val', () => {
  const result = new Secret('new secret alert')

  expect(result.getSecret()).toBe('new secret alert')
})
