import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'

export default function Home({
  allPostsData
}) {
  return (
    <Layout home>
      <Head>
        <title>Bio</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Sample bio here</p>
      </section>
      <Link href="/">← Back to home</Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
