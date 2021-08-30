const suma = (a, b) => {
  return a - b
}

const checks = [
  { a: 0, b: 0, expected: 0 },
  { a: 1, b: 1, expected: 2 },
  { a: 2, b: 1, expected: 3 }
]

checks.forEach(({ a, b, expected }) => {
  console.assert(
    suma(a, b) === expected,
    `Expected ${expected} but got ${suma(a, b)}`
  )
})
