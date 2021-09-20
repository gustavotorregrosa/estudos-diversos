import React from 'react'
import articleStyle from '../styles/Article.module.css'
import ArticleItem from './articleItem'

export default function articleList({articles}) {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article => <ArticleItem key={article.id} article={article} />)}
            
        </div>
    )
}
