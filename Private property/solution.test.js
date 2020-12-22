const Secret = require('./solution3')

test('first result to be undefined', () => {
  const result = new Secret('')

  expect(result.Secret).toBeUndefined()
})
test('to return the value', () => {
  const result = new Secret('Hey do you know my secret')
  expect(result.getSecret()).toBe('Hey do you know my secret')
})

test('set a new value', () => {
  const result = new Secret()

  expect(result.setSecret('new secret alert')).toBe('new secret alert')
})

test('get update val', () => {
  const result = new Secret('new secret alert')
  expect(result.getSecret()).toBe('new secret alert')
})
