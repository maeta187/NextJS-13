import type { NextPage } from 'next'
import Form from '@/components/Form'
import { users } from '@/mock'

const UserSearchFrom: NextPage = () => {
  return (
    <div>
      <h1 className={''}>UserSearchFrom</h1>
      <form action=''>
        <Form />
      </form>
    </div>
  )
}

export default UserSearchFrom
