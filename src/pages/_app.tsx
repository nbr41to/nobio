import Head from 'next/head'
import React from 'react'
import { Layout } from 'src/Layout'
import { GlobalStyle } from 'src/styles/GlobalStyle'
import '../styles/gou.css'
import '../styles/burger-styles.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>

        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
