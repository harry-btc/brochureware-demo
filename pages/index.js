import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BTC.com.au</title>
        <meta name="description" content="BTC.com.au home page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Home page</h1>
        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
