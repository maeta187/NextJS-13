'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useEffect } from 'react'

export default function Page() {
  const [foo, setFoo] = useState([1])

  useEffect(() => {
    console.log('useEffectが実行されました。')
  }, [])

  useEffect(() => {
    console.log('fooの値が更新されました。')
    return () => {
      console.log('クリーンアップ関数が実行されました。')
    }
  }, [foo])

  const handleClick = () => {
    const getLastValue = foo[foo.length - 1] + 1
    setFoo([...foo, getLastValue])
  }

  return (
    <div>
      <h3>useEffect</h3>
      <ul className={styles.list}>
        <li>
          useEffectは関数の実行タイミングをレンダリング後まで遅らせるhooks
        </li>
        <li>
          副作用の処理（DOMの書き換え、変数代入、API通信などUI構築以外の処理）を関数コンポーネントで扱える
        </li>
        <li>useEffectはレンダリングが完了した後に非同期的に実行される</li>
        <li>
          第1引数には副作用の処理を記述した関数を、第2引数には副作用の実行タイミングを指定する配列を渡す
        </li>
        <li>
          第2引数の配列が空の場合は初回のレンダリング時のみ実行され、配列に値がある場合は、その値が変更された時にも実行される
        </li>
        <li>
          コンポーネントが画面から消える場合にクリーンアップする必要があるようなリソース(addEventListenerの削除、タイマーのキャンセルなど)に使用する
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              useEffect(() =&gt; {'{'}
              {'\n'}
              {'    '}console.log('fooの値が更新されました。'){'\n'}
              {'    '}return () =&gt; {'{'}
              {'\n'}
              {'      '}console.log('クリーンアップ関数が実行されました。')
              {'\n'}
              {'    '}
              {'}'}
              {'\n'}
              {'  '}
              {'}'}, [foo])
            </code>
          </pre>
        </li>
      </ul>
      <button type='button' onClick={handleClick}>
        更新
      </button>
      <p>現在のstateの値</p>
      <ul>
        {foo.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
