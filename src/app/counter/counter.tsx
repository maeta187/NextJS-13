'use client'
import { useCounter } from '@/context/CounterProvider'

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useCounter()
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
