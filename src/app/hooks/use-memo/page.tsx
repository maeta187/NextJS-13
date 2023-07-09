'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useMemo } from 'react'

export default function Page() {
  const [fooCount, setFooCount] = useState(0)
  const [barCount, setBarCount] = useState(0)

  const fooResult = () => setFooCount(fooCount + 1)
  const barResult = () => setBarCount(barCount + 1)

  const square = () => {
    console.log('square')
    return barCount * barCount
  }

  const anotherSquare = useMemo(() => {
    console.log('anotherSquare')
    return barCount * barCount
  }, [barCount])

  return (
    <div>
      <h3>useMemo</h3>
      <ul className={styles.list}>
        <li>useMemoは値をmemo化するためのフック</li>
        <li>
          useMemoは第1引数には値を生成する関数を、第2引数には依存配列を渡す
        </li>
        <li>
          依存配列に含まれる値が変更された場合にのみ、第1引数の関数が実行される
        </li>
        <li>
          squareはfooCountと依存関係がないがfooCountに変更が入ったことにより再レンダリングが実行されその時に実行している
        </li>
        <li>
          anotherSquareはuseMemoを使用していることにより、fooCountの変更による再レンダリングでは実行されず、barCountの変更による再レンダリングのみ実行される
        </li>
      </ul>
      <p>fooResult: {fooCount}</p>
      <p>barCount: {barCount}</p>
      <p>square: {square()}</p>
      <p>square: {anotherSquare}</p>
      <button className={styles.btn} type='button' onClick={fooResult}>
        increment
      </button>
      <button className={styles.btn} type='button' onClick={barResult}>
        increment
      </button>
    </div>
  )
}
