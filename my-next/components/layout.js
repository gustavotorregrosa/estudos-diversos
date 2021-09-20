import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                 <title>Webdev news</title>
            </Head>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            
            </div>
        
        
        </>


    )
}
