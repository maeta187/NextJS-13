'use client'
import { useState } from 'react'

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>count: {count}</p>
      <button type='button' onClick={increment}>
        Increment
      </button>
      {children}
    </div>
  )
}

export default Counter
