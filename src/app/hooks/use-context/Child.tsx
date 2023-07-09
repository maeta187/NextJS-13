'use client'

import styles from '@/app/hooks/hooks.module.css'
import { useContext } from 'react'
import { UserContext } from '@/app/hooks/use-context/page'

const Child = () => {
  const users = useContext(UserContext)

  return (
    <div>
      <h3>Child</h3>
      <ul className={styles.list}>
        {users.map((user) => (
          <li className={styles['non-list']} key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Child
