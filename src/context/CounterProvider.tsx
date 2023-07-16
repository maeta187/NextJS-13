'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext
} from 'react'

const CounterContext = createContext<
  [number, Dispatch<SetStateAction<number>>] | undefined
>(undefined)

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider')
  }

  return context
}
