import '../styles/globals.css'
import Context from '../context'
import { useState } from 'react'
const contentful = require('contentful')

function MyApp({ Component, pageProps }) {
  const [blogEntries, setBlogEntries] = useState([])

  const fetchBlogEntries = async () => {
    if (blogEntries.length > 0) {
      return blogEntries
    }
    const client = contentful.createClient({
      space: '9d90orkkcm2j',
      accessToken: 'djQ0s0KxwBiuFVZAyLYo6YPw_WwU4tKjgbX2962EswQ'
    })

    try {
      const res = await client.getEntries()
      setBlogEntries(res.items)
      return res.items
    } catch (e) {
      console.log(e)
      return []
    }
  }

  const fetchBlogEntryBySlug = async slug => {
    if (!slug) {
      return null
    }
    const entries = await fetchBlogEntries()
    return entries.find(e => e.fields.slug === slug)
  }

  const value = {
    state: {
      blogEntries
    },
    fetchBlogEntries,
    fetchBlogEntryBySlug
  }

  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
