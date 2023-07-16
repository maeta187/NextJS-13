import Counter from './counter'
import UserList from '../users/UserList'

export default function Page() {
  return (
    <div>
      <Counter>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Counter>
    </div>
  )
}
