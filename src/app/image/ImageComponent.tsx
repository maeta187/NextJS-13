'use client'

import Image from 'next/image'

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
    </div>
  )
}

export default ImageComponent
