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
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
