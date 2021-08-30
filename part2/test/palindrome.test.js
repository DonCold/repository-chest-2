const { palindrome } = require('../utils/fot_testing')

describe('palindrome', () => {
  test('of midudev', () => {
    const result = palindrome('midudev')
    expect(result).toBe('vedudim')
  })

  test('of empty string', () => {
    const result = palindrome()
    expect(result).toBeUndefined()
  })

  test('of string with spaces', () => {
    const result = palindrome('midu dev')
    expect(result).toBe('ved udim')
  })
})
