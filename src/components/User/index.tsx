'use client'

type UserProps = {
  id: number
  name: string
}

const User = (props: UserProps) => {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
    </div>
  )
}
export default User
