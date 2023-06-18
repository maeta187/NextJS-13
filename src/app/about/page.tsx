import Link from 'next/link'

const Page = () => {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about' className='underline' prefetch={false}>
        about
      </Link>
    </nav>
  )
}

export default Page
