// 'use client'

import Image from 'next/image'
import styles from './image.module.css'

const ResponsiveImage = () => {
  return (
    <div className={styles.inner}>
      <div className={styles['responsive-image-area']}>
        <div className={'responsive-image-content'}>
          <h2>ResponsiveImage</h2>
        </div>
        <div className={styles.relative}>
          <Image
            src='/sample-image.jpg'
            alt='Sample Image'
            width={700}
            height={475}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              width: '100%',
              height: 'auto'
            }}
            className={styles['responsive-image']}
          />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveImage
