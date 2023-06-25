/**
 * Suspenseを使用することでコンポーネント毎にローディング中の表示を行うことができる
 */
import { Suspense } from 'react'
import UserList from './UserList'
import OtherUserList from './OtherUserList'

const Page = async () => {
  return (
    <div className='m-4'>
      <h1 className='text-lg font-bold'>ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Suspense>
      <Suspense fallback={<p>Loading OtherUserList...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <OtherUserList />
      </Suspense>
    </div>
  )
}

export default Page
