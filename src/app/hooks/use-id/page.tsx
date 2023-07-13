'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useId } from 'react'

export default function Page() {
  const id = useId()
  return (
    <div>
      <h3>useId</h3>
      <ul className={styles.list}>
        <li>React18系から追加されたフック</li>
        <li>useIdはコンポーネント内でユニークなidを生成するもの</li>
        <li>任意のプレフィックスを付与することも可能</li>
        <li>map使用時のkey等には使用できないので注意</li>
      </ul>
      <div>
        <div>
          <input id={`${id}foo`} type='radio' name='foo' />
          <label htmlFor={`${id}foo`}>foo</label>
        </div>
        <div>
          <input id={`${id}bar`} type='radio' name='bar' />
          <label htmlFor={`${id}bar`}>bar</label>
        </div>
      </div>
    </div>
  )
}
