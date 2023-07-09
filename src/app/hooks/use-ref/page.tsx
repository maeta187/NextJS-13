'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useCallback, memo, useRef } from 'react'

const VoidComponent = memo(() => {
  console.log('VoidComponent')
  return <div>voidComponent</div>
})

export default function Page() {
  const countRef = useRef(0)
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    console.log('handleClick')
    countRef.current += 1
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const checkInputRef = () => {
    console.log(inputRef.current)
    console.log(inputRef.current?.value)
  }

  return (
    <div>
      <h3>useRef</h3>
      <ul className={styles.list}>
        <li>useRefは置き換え可能なrefオブジェクトを作成する</li>
        <li>refの主な使用用途はデータの保持とDOMの参照</li>
        <li>データの保持時は値の更新が入っても再レンダリングは発生しない</li>
        <li>なので描画に関係ないデータを保持する際に使用する</li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              {'{'}/* 値の更新が入ってもDOMに反映されない */{'}'}
              {'\n'}
              <p>
                count: {'{'}countRef.current{'}'}
              </p>
            </code>
          </pre>
        </li>
        <li>
          DOMを参照する際は、対象の要素にref属性を書き、useRefで宣言した変数を参照するようにする
        </li>
        <li>refの値を処理の中で参照する際は「.current」を付ける必要がある</li>
      </ul>
      {/* 値の更新が入ってもDOMに反映されない */}
      <p>count: {countRef.current}</p>
      <div>
        <button className={styles.btn} type='button' onClick={handleClick}>
          +
        </button>
      </div>
      <VoidComponent />
      <div>
        <input
          value={text}
          ref={inputRef}
          type='text'
          className='ref-input'
          onChange={handleChangeInput}
        />
        <button type='button' onClick={checkInputRef}>
          Add
        </button>
      </div>
    </div>
  )
}
