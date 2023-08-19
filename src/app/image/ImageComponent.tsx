'use client'

import Image from 'next/image'
import BackgroundImage from './BackgroundImage'
import ResponsiveImage from './ResponsiveImage'

const ImageComponent = () => {
  return (
    <div>
      <div>
        <Image
          src='/sample-image.jpg'
          width={500}
          height={500}
          alt='Sample Image'
        />
      </div>
      <ResponsiveImage />
      <BackgroundImage />
    </div>
  )
}

export default ImageComponent
