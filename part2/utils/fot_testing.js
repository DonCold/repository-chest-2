const palindrome = (string) => {
  if (typeof string !== 'string') return undefined
  return string.split('').reverse().join('')
}

const average = array => {
  if (!Array.isArray(array) || array.length === 0) return 0
  return array.reduce((a, b) => a + b, 0) / array.length
}

module.exports = {
  palindrome,
  average
}
