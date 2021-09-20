import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/articleList'
import styles from '../styles/Layout.module.css'
import { server } from '../config'

export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
