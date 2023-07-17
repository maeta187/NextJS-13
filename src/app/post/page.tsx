import { Post } from '@prisma/client'
import AddPost from './AddPost'

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  })
  const posts: Post[] = await response.json()

  return (
    <div>
      <h3>記事一覧</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <AddPost />
    </div>
  )
}
