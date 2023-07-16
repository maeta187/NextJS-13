type User = {
  id: string
  name: string
  email: string
}

/**
 * Server Componentはサーバー側でfetchを実行するのでconsole.logがサーバー側で実行される
 * そのため、ブラウザのconsoleには出力されない
 */
const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  // const response = await fetch('http://localhost:3000/api')
  const response = await fetch('http://localhost:3000/api?name=John&id=1', {
    cache: 'no-store'
  })
  if (!response.ok) throw new Error('Error fetching data')
  const users: User[] = await response.json()
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
