'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useReducer } from 'react'

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT':
      return state + 1
    case 'DOUBLE':
      return state * 2
    case 'RESET':
      return 0
    default:
      return state
  }
}
export default function Page() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h3>useReducer</h3>
      <ul className={styles.list}>
        <li>useStateと同様状態管理のためのフック</li>
        <li>
          useStateでは更新する値を渡していましたが、useReducerでは更新関数(dispatch)にactionと呼ばれるデータを渡す
        </li>
        <li>現在の状態とactionを渡すのと、次の状態を返すreducerを使用する</li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>const [count, dispatch] = useReducer(reducer, 0)</code>
          </pre>
        </li>
        <li>
          複数の配列やオブジェクトなどのデータをまとめて状態として扱う場合に用いられることが多く、useStateよりも複雑な用途に向いている
        </li>
      </ul>
      <div>
        <p>count: {count}</p>
        <div>
          <button
            className={styles.btn}
            type='button'
            onClick={() => dispatch('DECREMENT')}
          >
            DECREMENT
          </button>
          <button
            className={styles.btn}
            type='button'
            onClick={() => dispatch('INCREMENT')}
          >
            DECREMENT
          </button>
          <button
            className={styles.btn}
            type='button'
            onClick={() => dispatch('DOUBLE')}
          >
            DOUBLE
          </button>
          <button
            className={styles.btn}
            type='button'
            onClick={() => dispatch('RESET')}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}
