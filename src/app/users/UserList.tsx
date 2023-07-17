'use client'

import styles from './users.module.css'
import Link from 'next/link'

export type User = {
  id: string
  name: string
  email: string
}

const post = async () => {
  const response = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', email: 'john@example.com' })
  })

  const data = await response.json()
  console.log(data)
}

/**
 * Server Componentはサーバー側でfetchを実行するのでconsole.logがサーバー側で実行される
 * そのため、ブラウザのconsoleには出力されない
 */
const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  // const response = await fetch('http://localhost:3000/api')
  const response = await fetch('http://localhost:3000/api?name=John&id=1', {
    // cache を無効
    // cache: 'no-store'
    // 5秒の間はキャッシュを使用
    next: { revalidate: 5 }
  })
  if (!response.ok) throw new Error('Error fetching data')
  const users: User[] = await response.json()
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <button type='button' className={styles.btn} onClick={post}>
        POST
      </button>
    </div>
  )
}

export default UserList
