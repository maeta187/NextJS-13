import type { NextPage } from 'next'
import { users } from '@/mock'
import styles from '@/app/users/users.module.css'

const UsersPage: NextPage = () => {
  return (
    <div>
      <h1 className={styles['users-title']}>UsersPage</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li>
            <p>UserID:{id}</p>
            <p>UserName:{name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
