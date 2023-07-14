'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useState, useDeferredValue } from 'react'

export default function Page() {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<string[]>([])
  const deferredList = useDeferredValue(list)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setList([e.target.value])
  }

  return (
    <div>
      <h3>useDeferredValue</h3>
      <ul className={styles.list}>
        <li>React18系から追加されたフック</li>
        <li>値の緊急度を下げるフック</li>
        <li>
          デバウンスやスロットルと違い、指定した時間の遅延ではなく、緊急性の高い更新が終わったタイミングまで遅延する
        </li>
      </ul>
      <div>
        <input value={value} onChange={handleChange} />
        <div>
          {deferredList.map((item, index) => (
            <span key={`item-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
