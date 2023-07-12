'use client'
import { useState } from 'react'
import Button from '@/components/Button'
import User from '@/components/User'
import { users } from '@/mock'

type User = {
  id: number
  name: string
}

const Form = () => {
  const [userState, setUserState] = useState<User>({} as User)
  const [userId, setUserId] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [displayFlag, setDisplayFlag] = useState<boolean>(false)

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const result = users.find(
            ({ id, name }) => id === Number(userId) || name === userName
          )
          if (result) {
            setUserState(result)
          } else {
            console.warn('User not found')
          }
          setDisplayFlag(!!result)
        }}
      >
        <div>
          <label htmlFor='user-id'>UserID</label>
          <input
            id='user-id'
            type='text'
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <div>
          <label htmlFor='user-name'>UserName</label>
          <input
            id='user-name'
            type='text'
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <Button text='Click' type='submit' />
      </form>
      {displayFlag && <User id={userState.id} name={userState.name} />}
    </div>
  )
}

export default Form
