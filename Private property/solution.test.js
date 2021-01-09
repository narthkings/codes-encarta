const Secret = require('./solution3')
const {
  dividedBy, times, plus, minus, one, two, zero, four, five, six, seven, eight, nine,three
} = require('./closuresFp')

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

test('to get a value of 35', ()=>{
  expect(seven(times(five()))).toBe(35)
})

test('to get a value of 13', ()=>{
  expect(four(plus(nine()))).toBe(13)
})

test('to get a value of 35', ()=>{
  expect(eight(minus(three()))).toBe(5)
})

test('to get a value of 35', ()=>{
  expect(six(dividedBy(two()))).toBe(3)
})


