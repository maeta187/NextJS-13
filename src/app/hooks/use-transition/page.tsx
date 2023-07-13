'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useTransition } from 'react'

export default function Page() {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    startTransition(() => {
      setList([e.target.value])
    })
  }

  return (
    <div>
      <h3>useTransition</h3>
      <ul className={styles.list}>
        <li>React18系から追加されたフック</li>
        <li>処理の緊急度を下げる処理</li>
        <li>
          緊急度の高い処理は、デキストエリア、ドロップダウンなどのユーザーの操作に対して即座に反映されるもの
        </li>
        <li>
          useTransitionは実行中の状態(boolean型)とトランジションを開始するための関数を渡す
        </li>
        <li>
          下記の処理だと値の更新と際レンダリングが同時行われず一瞬チラつきが発生する
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              {'  '}const handleChange = (e:
              React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {'{'}
              {'\n'}
              {'    '}setValue(e.target.value){'\n'}
              {'    '}startTransition(() =&gt; {'{'}
              {'\n'}
              {'      '}setList([e.target.value]){'\n'}
              {'    '}
              {'}'}){'\n'}
              {'  '}
              {'}'}
            </code>
          </pre>
        </li>
      </ul>
      <input value={value} onChange={handleChange} />
      {isPending && <p>Pending...</p>}
      <div>
        {list.map((item, index) => (
          <span key={`item-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}
