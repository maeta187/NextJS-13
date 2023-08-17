'use client'

import Image from 'next/image'
import styles from './image.module.css'

const BackgroundImage = () => {
  return (
    <div>
      {/* 中の子要素の高さや余白分だけ画像が表示される */}
      <div className={`${styles.inner} ${styles['bg-img']}`}>
        <Image
          src='/sample-image.jpg'
          fill
          sizes='100vw'
          quality={100}
          alt='Sample Image'
          style={{ position: 'absolute', objectFit: 'cover', zIndex: -1 }}
        />
        <div>
          <h2 className={styles.title}>BackgroundImage</h2>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImage
