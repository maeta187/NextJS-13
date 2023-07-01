import styles from '@/app/hooks/hooks.module.css'

export default function Page() {
  return (
    <div>
      <h3>ReactHook</h3>
      <ul className={styles.list}>
        <li>ReactHookのおさらい</li>
        <li>ReactHookはSSRでは使用できない</li>
        <li>
          使用する場合はコンポーネントで「'use client'」で宣言する必要がある
        </li>
      </ul>
    </div>
  )
}
