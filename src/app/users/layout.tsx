import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users Sample Page',
  description: 'Users Sample Page'
}

/**
 * ページごとのLayoutを設定する
 * ここでmeta情報を設定することもできる
 * pages配下のファイルは全てこのLayoutを継承する
 * 他のpagesには影響しない
 */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
