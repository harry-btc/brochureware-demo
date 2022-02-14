import { useRouter } from 'next/router'
import Context from '../../context'
import { useContext, useEffect, useState } from 'react'
import styles from '../../styles/BlogEntryPage.module.css'
import Head from 'next/head'
import BlogImage from '../../components/BlogImage'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function BlogEntryPage(props) {
  const [entry, setEntry] = useState(null)
  const router = useRouter()
  const appContext = useContext(Context)
  useEffect(() => {
    const fetchData = async () => {
      const foundEntry = await appContext.fetchBlogEntryBySlug(router.query.slug)
      setEntry(foundEntry)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.slug])

  if (!entry) {
    return <p>Loading...</p>
  }

  const { title, body } = entry.fields

  return (
    <div className="container blog-entry-page">
      <Head>
        <title>{title} - BTC.com.au</title>
        <meta name="description" content="BTC.com.au blog" />
      </Head>
      <main className={styles.main}>
        <h2 className={styles.title}>{title}</h2>

        {body.content.map((node, index) => {
          if (node.nodeType === 'embedded-asset-block') {
            return <BlogImage key={index} data={node.data.target.fields} />
          } else if (node.nodeType === 'paragraph') {
            return <span key={`c-${index}`}>{documentToReactComponents(node)}</span>
          }
        })}
      </main>
    </div>
  )
}
