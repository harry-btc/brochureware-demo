import Head from 'next/Head'
import styles from '../../styles/Blog.module.css'
import BlogEntry from '../../components/BlogEntry'
import { useContext, useEffect } from 'react'
import Context from '../../context'

export default function BlogPage() {
  const appContext = useContext(Context)
  const entries = appContext.state.blogEntries

  useEffect(() => {
    appContext.fetchBlogEntries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Blog - BTC.com.au</title>
        <meta name="description" content="BTC.com.au blog" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Blog</h1>
        {entries.map(entry => (
          <BlogEntry key={entry.sys.id} data={entry.fields} />
        ))}
      </main>
    </div>
  )
}
