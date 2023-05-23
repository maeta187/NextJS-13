/**
 * 引数にparamsを受け取る
 * 「/user/[id]/page.tsx」の[id]の部分がparamsに入る
 */
const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>UserPage</h1>
      <p>UserID:{params.id}</p>
    </div>
  )
}

export default UserPage
