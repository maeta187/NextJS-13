'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useCallback, memo } from 'react'

type ButtonProps = {
  onClick: () => void
}

type AnotherButtonProps = Pick<ButtonProps, 'onClick'> & {
  onAnotherClick: () => void
}

/** 通常の関数コンポーネント */
const DecrementComponent = (props: ButtonProps) => {
  const { onClick } = props
  console.log('DecrementComponent')
  return (
    <button className={styles.btn} onClick={onClick}>
      -
    </button>
  )
}

/** memo化した関数コンポーネント */
const IncrementComponent = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('IncrementComponent')
  return (
    <button className={styles.btn} onClick={onClick}>
      +
    </button>
  )
})

/** memo化した関数コンポーネント */
const DoubleIncrementComponent = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('DoubleIncrementComponent')
  return (
    <button className={styles.btn} onClick={onClick}>
      ++
    </button>
  )
})

/** memo化した関数コンポーネント */
const AnotherIncrementComponent = memo((props: AnotherButtonProps) => {
  const { onClick, onAnotherClick } = props
  console.log('DoubleIncrementComponent')
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        ++
      </button>
      <button className={styles.btn} onClick={onAnotherClick}>
        +
      </button>
    </div>
  )
})

export default function Page() {
  const [count, setCount] = useState(0)
  const [anotherCount, setAnotherCount] = useState(0)

  const handleDecrementClick = () => setCount((prev) => prev - 1)

  const handleIncrementClick = () => setCount((prev) => prev + 1)

  const handleDoubleIncrementClick = useCallback(() => {
    setCount((prev) => prev * 2)
  }, [])

  const handleAnotherIncrementClick = useCallback(() => {
    setAnotherCount((prev) => prev + 1)
  }, [anotherCount])

  return (
    <div>
      <h3>useCallback</h3>
      <ul className={styles.list}>
        <li>useCallbackは関数をmemo化するためのフック</li>
        <li>
          DecrementComponentは通常のコンポーネントなので親要素が再レンダリングされたら再レンダリングが発生する
        </li>
        <li>
          IncrementComponentはmemo化しているが親のstateの値が変わると再レンダリングが発生し、propsのonClickが新しくなるため再レンダリングが発生する
        </li>
        <li>
          DoubleIncrementComponentはmemo化し、onClickで実行するhandleDoubleIncrementClickはuseCallbackを使用している
        </li>
        <li>useCallbackの第1引数は関数で、第2引数は依存配列である</li>
        <li>関数の再描画が行われる時に依存配列の比較を行う</li>
        <li>比較結果が前回と一致した場合は、メモ化している関数を返す</li>
        <li>
          比較結果が前回と一致しなかった場合は、第1引数の関数をメモに保存する
        </li>
        <li>
          下記のサンプルだと第2引数が空なので初期レンダリングで生成された関数を常に返す
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              {'  '}const handleDoubleIncrementClick = useCallback(() =&gt;{' '}
              {'{'}
              {'\n'}
              {'    '}setCount((prev) =&gt; prev * 2){'\n'}
              {'  '}
              {'}'}, []){'\n'}
            </code>
          </pre>
        </li>
        <li>
          以下の関数とhandleDoubleIncrementClickを子コンポーネントから実装したとする
        </li>
        <li>
          handleDoubleIncrementClickは常に同じ関数を返すので、子コンポーネントは再レンダリングが発生しない
        </li>
        <li>
          handleAnotherIncrementClickはanotherCountの値が変わると第1引数の関数をメモに保存するので再レンダリングが発生する
        </li>
        <li className={styles['non-list']}>
          <pre className={styles.pre}>
            <code>
              {'  '}const handleAnotherIncrementClick = useCallback(() =&gt;{' '}
              {'{'}
              {'\n'}
              {'    '}setAnotherCount((prev) =&gt; prev + 1){'\n'}
              {'  '}
              {'}'}, [anotherCount]){'\n'}
            </code>
          </pre>
        </li>
      </ul>
      <p>Count: {count}</p>
      <DecrementComponent onClick={handleDecrementClick} />
      <IncrementComponent onClick={handleIncrementClick} />
      <DoubleIncrementComponent onClick={handleDoubleIncrementClick} />
      <p>AnotherCount: {anotherCount}</p>
      <AnotherIncrementComponent
        onClick={handleDoubleIncrementClick}
        onAnotherClick={handleAnotherIncrementClick}
      />
    </div>
  )
}
