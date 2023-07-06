'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, memo } from 'react'

interface Props {
  value: string
  barValue?: string
}

/**
 * 親コンポーネントが再レンダリングすると、再レンダリングされるコンポーネント
 */
const NonMemoComponent = (props: Props) => {
  const { value } = props
  console.log('NonMemoComponent')
  return <div>{value}</div>
}

/**
 * 親コンポーネントのbarの値が変わると再レンダリングされるコンポーネント
 * fooの値が変わっても再レンダリングされない
 */
const MemoComponent = memo<Props>((props) => {
  const { value } = props
  console.log('MemoComponent')
  return <div>{value}</div>
})

export default function Page() {
  const [foo, setFoo] = useState('foo')
  const [bar, setBar] = useState('bar')

  const handleFooClick = () => {
    const value = foo === 'foo' ? 'bar' : 'foo'
    setFoo(value)
  }

  const handleBarClick = () => {
    const value = bar === 'bar' ? 'foo' : 'bar'
    setBar(value)
  }

  return (
    <div>
      <h3>memo</h3>
      <ul className={styles.list}>
        <li className={styles['non-list']}>
          ReactHookとは少し違うが、useMemo、useCallbackを理解するためにまとめる
        </li>
        <li className={styles['non-list']}>
          コンポーネントの再レンダリングは以下の3つの条件のいずれかを満たした場合に発生する
        </li>
        <li>propsやstateが変更された場合</li>
        <li>コンポーネント内で参照しているContextの値が変更された場合</li>
        <li>親コンポーネントが再レンダリングされた場合</li>
        <li>
          変更がない子コンポーネントを再レンダリングされるのを防ぐためにmemoを使用する
        </li>
        <li>
          NonMemoComponentはstateの値を受け取っていないがmemo化していないため再レンダリングされる
        </li>
        <li>
          MemoComponentはmemo化しているのでfooの値が変更されて発生する再レンダリングでは再レンダリングされず、barの値が変更されて発生する再レンダリングのみ再レンダリングされる
        </li>
      </ul>
      <NonMemoComponent value={'foo'} />
      <MemoComponent value={'foo'} barValue={bar} />
      <p>現在のfooの値: {foo}</p>
      <button type='button' onClick={handleFooClick}>
        Foo更新
      </button>
      <p>現在のbarの値: {bar}</p>
      <button type='button' onClick={handleBarClick}>
        Bar更新
      </button>
    </div>
  )
}
