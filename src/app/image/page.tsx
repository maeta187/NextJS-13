import styles from '@/app/image/image.module.css'
import ImageOptionList from './ImageOptionList'
import ImageComponent from './ImageComponent'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h3>Image</h3>
        <ImageOptionList />
      <ImageComponent />
    </div>
  )
}
