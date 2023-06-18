import styles from './markeging.module.css'

/**
 * app直下のでディレクトリ名を括弧で囲むことによってルーティングに影響を与えない
 *　ただし、パスの解決はできない
 */

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className={styles.marketing}>{children}</div>
}
