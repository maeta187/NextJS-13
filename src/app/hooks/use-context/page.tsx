'use client'

import styles from '@/app/hooks/hooks.module.css'
import { createContext } from 'react'
import Child from './Child'

type User = {
  id: string
  name: string
  email: string
}

export const UserContext = createContext<User[]>([])

export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await response.json()

  return (
    <div>
      <h3>useContext</h3>
      <ul className={styles.list}>
        <li>
          ContextはReactコンポーネントツリーに対して「グローバル」とみなすデータについて利用するように設計されている
        </li>
        <li>
          Contextを使用することで、propsを使用することなくコンポーネント間でデータを共有することができる
        </li>
        <li>但し、コンポーネントの再利用性を難しくするので慎重に使用する</li>
        <li>useContextはContextの機能をシンプルに使えるようになった機能</li>
        <li>createContextを使用してContextを作成</li>
        <li>作成したContextを使用するコンポーネントをContext.Providerで囲む</li>
        <li>Context.Providerのvalueでコンポーネントに値を渡す</li>
        <li>子コンポーネント側はuseContextを使用して値を受け取る</li>
        <li>親コンポーネントで作成したContextをインポートする</li>
      </ul>
      <UserContext.Provider value={users}>
        <Child />
      </UserContext.Provider>
    </div>
  )
}
