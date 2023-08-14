import styles from '@/app/image/image.module.css'
import ImageOptionList from './ImageOptionList'
import ImagePropsList from './ImagePropsList'
import ImageComponent from './ImageComponent'

export default function Page() {
  return (
    <div>
      <h3>Image</h3>
      <div className={styles['is-flex']}>
        <ImageOptionList />
        <ImagePropsList />
      </div>
      <ImageComponent />
    </div>
  )
}
