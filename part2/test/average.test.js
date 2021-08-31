const { average } = require('../utils/fot_testing')

describe.skip('average', () => {
  test('of one value', () => {
    expect(average([1])).toBe(1)
  })

  test('should many is calculated correctly', () => {
    expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5)
  })

  test('of empty array', () => {
    expect(average([])).toBe(0)
  })

  test('of null', () => {
    expect(average(null)).toBe(0)
  })
})
