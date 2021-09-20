import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

export default function articleItem({article}) {
    return (
       <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
           
       </Link>
    )
}
