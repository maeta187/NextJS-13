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
        <div
          style={{
            display: 'block',
            position: 'relative',
            width: '200px',
            height: '300px'
          }}
        >
          <Image
            alt='sample-image'
            src='/sample-image.jpg'
            sizes='100vw'
            fill
            style={{
              width: '100%'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveImage
