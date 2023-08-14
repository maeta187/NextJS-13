import styles from '@/app/image/image.module.css'

const ImagePropsList = () => {
  return (
    <div className={styles.content}>
      <h4>Props</h4>
      <ul className={styles.list}>
        <li>
          <strong>style</strong>
        </li>
        <li className={styles['non-list']}>CSSのプロパティを設定する</li>
        <li>
          <strong>onLoadingComplete</strong>
        </li>
        <li className={styles['non-list']}>
          画像の読み込みが完了し、placeholderが削除された後に呼び出される関数
        </li>
        <li className={styles['non-list']}>
          onLoadingCompleteを使用するには、クライアントコンポートで使用する必要がある
        </li>
        <li>
          <strong>onLoad</strong>
        </li>
        <li className={styles['non-list']}>画像をロード時に実行される関数</li>
        <li className={styles['non-list']}>
          画像プレースホルダーが削除され、画像が完全にデコードされる前に読み込みイベントが発生する可能性があるので画像が完全にロードされるまで待ちたい場合は、onLoadingCompleteを使用する
        </li>
        <li className={styles['non-list']}>
          onLoadを使用するには、クライアントコンポートで使用する必要がある
        </li>
        <li>
          <strong>onError</strong>
        </li>
        <li className={styles['non-list']}>
          画像の読み込みに失敗したときに実行される関数
        </li>
        <li className={styles['non-list']}>
          onErrorを使用するには、クライアントコンポートで使用する必要がある
        </li>
        <li>
          <strong>loading</strong>
        </li>
        <li className={styles['non-list']}>画像の読み込み動作を指定する</li>

        <li className={styles['non-list']}>
          lazy:
          ビューポートから計算された距離に達するまで画像の読み込みを延期する
        </li>
        <li className={styles['non-list']}>eager: 画像をすぐに読み込む</li>
        <li className={styles['non-list']}>
          こちらを使用するとパフォーマンスにみ影響が出るので、特例がない限りはpriorityを使用する
        </li>
        <li>
          <strong>blurDataURL</strong>
        </li>
        <li className={styles['non-list']}>
          外部パスが読み込まれるまで表示される画像のURL
        </li>
        <li className={styles['non-list']}>
          「placeholder="blur"」が指定されている場合は、このプロパティを使用することができる
        </li>
        <li className={styles['non-list']}>
          Base64 でエンコードされた画像である必要がある
        </li>
        <li className={styles['non-list']}>
          拡大してぼやけてしまうため、非常に小さな画像（10px以下）を推奨する。
        </li>
        <li className={styles['non-list']}>
          大きな画像をプレースホルダとして含めると、アプリケーションのパフォーマンスに悪影響を及ぼす可能性がある。
        </li>
        <li>
          <strong>unoptimized</strong>
        </li>
        <li className={styles['non-list']}>
          true
          の場合、ソース画像は品質、サイズ、形式を変更せずにそのまま提供される
        </li>
        <li className={styles['non-list']}>デフォルトはfalse</li>
      </ul>
    </div>
  )
}

export default ImagePropsList
