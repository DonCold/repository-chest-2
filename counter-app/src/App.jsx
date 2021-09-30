import React, { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increase = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  const reset = () => setCount(initialValue)

  return { count, increase, decrement, reset }
}

function App() {
  const counterLeft = useCounter()
  const counterRight = useCounter(12)

  return (
    <div>
      <div>{ counterLeft.count }</div>
      <button type="button" onClick={counterLeft.increase}>+</button>
      <button type="button" onClick={counterLeft.decrement}>-</button>
      <button type="button" onClick={counterLeft.reset}>reset</button>
      <hr />
      <div>{ counterRight.count }</div>
      <button type="button" onClick={counterRight.increase}>+</button>
      <button type="button" onClick={counterRight.decrement}>-</button>
      <button type="button" onClick={counterRight.reset}>reset</button>
    </div>
  )
}

export default App
