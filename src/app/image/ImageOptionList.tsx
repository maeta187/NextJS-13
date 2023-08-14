import styles from '@/app/image/image.module.css'

const ImageOptionList = () => {
  return (
    <div>
      <h4>Option</h4>
      <ul className={styles.list}>
        <li>
          <strong>src</strong>
        </li>
        <li className={styles['non-list']}>
          静的にインポートされた画像ファイル
        </li>
        <li className={styles['non-list']}>外部パスか内部パスを指定する</li>
        <li className={styles['non-list']}>
          外部パスを使用する場合は、next.config.jsにドメインを追加する必要がある
        </li>
        <li>
          <strong>width</strong>
        </li>
        <li className={styles['non-list']}>画像の横幅を指定する</li>
        <li className={styles['non-list']}>
          fillプロパティを使用しない場合は必ず使用する必要がある
        </li>
        <li>
          <strong>height</strong>
        </li>
        <li className={styles['non-list']}>画像の高さを指定する</li>
        <li className={styles['non-list']}>
          fillプロパティを使用しない場合は必ず使用する必要がある
        </li>
        <li>
          <strong>alt</strong>
        </li>
        <li className={styles['non-list']}>
          スクリーン リーダーおよび検索エンジン用の画像を記述するために使用する
        </li>
        <li className={styles['non-list']}>
          画像が表示されない場合に代替テキストとして表示される
        </li>
        <li>
          <strong>loader</strong>
        </li>
        <li className={styles['non-list']}>
          ローカルの画像はNext.jsが自動的に最適化する
        </li>
        <li className={styles['non-list']}>
          画像を最適化するためにカスタムローダーを使用する場合は、loaderプロパティを使用する
        </li>
        <li>
          <strong>fill</strong>
        </li>
        <li className={styles['non-list']}>
          親要素が相対的である場合、画像のサイズを親要素に合わせる
        </li>
        <li className={styles['non-list']}>
          親要素は「position: "relative"」、「position: "fixed"」、「position:
          "absolute"」のいずれかである必要がある
        </li>
        <li className={styles['non-list']}>
          fillを使用した場合のImageコンポーネントには「position:
          "absolute"」が自動的に設定される
        </li>
        <li className={styles['non-list']}>
          Imageコンポートネントにスタイルが適用されていない場合は、親要素の領域に合わせて引き伸ばしされる
        </li>
        <li className={styles['non-list']}>
          画像表示アスペクトを調整するには「object-fit:
          "contain」、「object-fit: "cover"」、「overflow: "hidden"」を使用する
        </li>
        <li>
          <strong>sizes</strong>
        </li>
        <li className={styles['non-list']}>
          メディアクエリに似た文字列で、異なるブレイクポイントにおける画像の幅を設定する
        </li>
        <li className={styles['non-list']}>
          sizeの値は、fillを使用している画像、レスポンシブな画像のパフォーマンスに影響を与える
        </li>
        <li>
          <strong>quality</strong>
        </li>
        <li className={styles['non-list']}>画像の品質を指定する</li>
        <li className={styles['non-list']}>
          1~100のnumber型で指定し、デフォルトは75
        </li>
        <li>
          <strong>priority</strong>
        </li>
        <li className={styles['non-list']}>
          画像の優先度を指定する。trueの場合は画像を優先的に読み込む(デフォルトはfalse)
        </li>
        <li className={styles['non-list']}>
          ヒーローイメージなど、スクロールが発生しなくとも表示される画像に使用する
        </li>
        <li>
          <strong>placeholder</strong>
        </li>
        <li className={styles['non-list']}>画像を読み込み中に表示される</li>
        <li className={styles['non-list']}>
          自由なString型が設定できるのはなく、「empty」、「blur」、「data:image/...」のユニオン型
        </li>
        <li className={styles['non-list']}>
          empty:emptyの場合は何も表示されない
        </li>
        <li className={styles['non-list']}>
          blur:blurの場合はblurDataURLが使用され、画像が読み込まれるまでぼかし画像が表示される
        </li>
        <li className={styles['non-list']}>
          data:image/...:data:image/...の場合は外部パスが使用され、画像が読み込まれるまで指定した画像が表示される
        </li>
      </ul>
    </div>
  )
}

export default ImageOptionList
