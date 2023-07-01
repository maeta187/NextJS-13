'use client'
import styles from '@/app/hooks/hooks.module.css'
import { useState } from 'react'

export default function Page() {
  const [foo, setFoo] = useState('foo')

  const handleClick = () => {
    const value = foo === 'foo' ? 'bar' : 'foo'
    setFoo(value)
    console.log(foo)
  }

  return (
    <div>
      <h3>useState</h3>
      <ul className={styles.list}>
        <li>useStateはコンポーネント内で状態管理を行うもの</li>
        <li>Classコンポーネントと関数コンポーネントでは使用方法が違う</li>
        <li>「useState」で使用し、分割代入することで使用できる</li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>const [foo, setFoo] = useState('foo')</code>
          </pre>
        </li>
        <li>
          分割代入された「foo」でstateの値を参照し、「setFoo」でstateの値を更新する
        </li>
      </ul>
      <p>現在のstateの値: {foo}</p>
      <button type='button' onClick={handleClick}>
        更新
      </button>
    </div>
  )
}
