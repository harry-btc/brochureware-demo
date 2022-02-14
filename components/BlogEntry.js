import styles from './BlogEntry.module.css'
import Image from 'next/Image'
import Link from 'next/Link'

export default function BlogEntry({ data }) {
  return (
    <Link href={`/blog/${data.slug}`}>
      <a className={styles.thumbnailContainer}>
        <div className={styles.thumbnail}>
          <Image
            src={`https:${data.thumbnail.fields.file.url}`}
            alt={data.thumbnail.fields.title}
            className={styles.thumbnailImg}
            layout="fill"
          />
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.excerpt}>{data.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
