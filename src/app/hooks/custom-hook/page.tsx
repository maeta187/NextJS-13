'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useCallback, useState } from 'react'

/**
 * inputの値を管理するカスタムフック
 */
const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  // stateとonChangeを返す
  return [state, onChange] as const
}

export default function Page() {
  const [text, onChangeText] = useInput()

  return (
    <div>
      <h3>customHooks</h3>
      <ul className={styles.list}>
        <li>
          ReactHooksはループ、条件分岐、コールバック関数の中で呼び出すことができない
        </li>
        <li>もし、使用した時はビルドエラーもしくは、実行時エラーが発生する</li>
        <li>
          これはレンダリングごとに呼び出されるフックの数と順番を同じにするためのルール
        </li>
        <li>
          フックを使用する関数を新たに定義して関数コンポーネントのトップレベルで呼び出すことで、このルールを回避することができる
        </li>
        <li>
          inputの「onChange」が呼ばれたら内部の状態を更新するためuseStateとuseCallbackを組む合わせている
        </li>
        <li>
          関数コンポーネント内では状態と関数を受け取り、それをinputに渡している
        </li>
        <li>
          カスタムフックを定義することでコードが簡潔になり、再利用性が高くなる
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              const useInput = () =&gt; {'{'}
              {'\n'}
              {'  '}const [state, setState] = useState(''){'\n'}
              {'  '}const onChange = useCallback((e:
              React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {'{'}
              {'\n'}
              {'    '}setState(e.target.value){'\n'}
              {'  '}
              {'}'}, []){'\n'}
              {'\n'}
              {'  '}// stateとonChangeを返す{'\n'}
              {'  '}return [state, onChange] as const{'\n'}
              {'}'}
            </code>
          </pre>
        </li>
      </ul>
      <div>
        <p>inputの値: {text}</p>
        <input type='text' value={text} onChange={onChangeText} />
      </div>
    </div>
  )
}
