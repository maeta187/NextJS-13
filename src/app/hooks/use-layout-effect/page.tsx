'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useEffect, useLayoutEffect } from 'react'

export default function Page() {
  const [foo, setFoo] = useState(0)
  const [bar, setBar] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log('useEffectが実行されました。')
      setFoo(1)
    }, 3000)
  }, [])

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log('useLayoutEffectが実行されました。')
      setBar(1)
    }, 3000)
  }, [])

  return (
    <div>
      <h3>useLayoutEffect</h3>
      <ul className={styles.list}>
        <li>機能はuseEffectとほぼ同様の機能</li>
        <li>useEffectとの違いは実行されるタイミングにある</li>
        <li>
          useEffectはレンダリング後に実行するが、useLayoutEffectはDOMが更新され、レンダリングされる前に実行される
        </li>
        <li>
          useLayoutEffectはレンダリング前に同期的に実行され、それによりパフォーマンスにも影響を与える可能性がある
        </li>
        <li>
          公式はuseEffectを使うように推奨しているが、DOMの更新前に何らかの処理を行いたい場合はuseLayoutEffectを使う(画面がちらつくのを防ぐなど)
        </li>
        <li>
          下記のコードを実行するとuseLayoutEffectの方が先に実行されることがわかる
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              {'  '}useEffect(() =&gt; {'{'}
              {'\n'}
              {'    '}setTimeout(() =&gt; {'{'}
              {'\n'}
              {'      '}console.log('useEffectが実行されました。'){'\n'}
              {'      '}setFoo(1){'\n'}
              {'    '}
              {'}'}, 3000){'\n'}
              {'  '}
              {'}'}, []){'\n'}
              {'\n'}
              {'  '}useLayoutEffect(() =&gt; {'{'}
              {'\n'}
              {'    '}setTimeout(() =&gt; {'{'}
              {'\n'}
              {'      '}console.log('useLayoutEffectが実行されました。'){'\n'}
              {'      '}setBar(1){'\n'}
              {'    '}
              {'}'}, 3000){'\n'}
              {'  '}
              {'}'}, []){'\n'}
            </code>
          </pre>
        </li>
      </ul>
      <div>
        <p>{`fooの値:${foo}`}</p>
        <p>{`barの値:${bar}`}</p>
      </div>
    </div>
  )
}
