'use client'
import { useState } from 'react'
import Button from '@/components/Button'
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

  const handleSubmit = () => {
    const result = users.find(
      (result) => result.id === Number(userId) || result.name === userName
    )
    if (result) {
      setUserState(result)
    } else {
      console.warn('User not found')
    }
    setDisplayFlag(!!result)
  }

  return (
    <form action=''>
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
      <Button text='Click' handleClick={handleSubmit} />
    </form>
  )
}

export default Form
