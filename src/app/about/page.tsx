import Link from 'next/link'
import styles from '@/app/about/about.module.css'

const Page = () => {
  return (
    <nav>
      <Link href='/' className={styles.link}>
        Home
      </Link>
      <Link href='/about' className={styles.link} prefetch={false}>
        about
      </Link>
      <Link href='/users' className={styles.link} prefetch={false}>
        users
      </Link>
    </nav>
  )
}

export default Page
