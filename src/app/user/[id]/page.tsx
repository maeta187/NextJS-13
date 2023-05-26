import { users } from '@/mock'

/**
 * 引数にparamsを受け取る
 * 「/user/[id]/page.tsx」の[id]の部分がparamsに入る
 */

const UserPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  const user = users.find((user) => user.id === id)

  return (
    <div>
      <h1>UserPage</h1>
      {user ? (
        <div>
          <p>UserID:{user.id}</p>
          <p>UserName:{user.name}</p>
        </div>
      ) : (
        <p>不明なユーザー</p>
      )}
    </div>
  )
}

export default UserPage
