import Head from 'next/head'
import React from 'react'
import { Layout } from 'src/Layout'
import { GlobalStyle } from 'src/styles/GlobalStyle'

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
