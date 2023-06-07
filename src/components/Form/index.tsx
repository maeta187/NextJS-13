'use client'
import { useState } from 'react'
import Button from '@/components/Button'
import { users } from '@/mock'

const Form = () => {
  const [userId, setUserId] = useState<string>('')
  const [userName, setUserName] = useState<string>('')

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const handleSubmit = () => {
    const user = users.find((user) => user.id === Number(userId))
    console.log(user)
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
