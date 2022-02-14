import Image from 'next/image'
import styles from './BlogImage.module.css'

export default function BlogImage({ data }) {
  return (
    <div className={styles.image}>
      <Image
        src={`https:${data.file.url}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        alt={data.title}
      />
    </div>
  )
}
