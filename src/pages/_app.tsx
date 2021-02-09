import Head from 'next/head'
import React from 'react'
import { Layout } from 'src/Layout'
import { GlobalStyle } from 'src/styles/GlobalStyle'
// import '../styles/gou.css'
import '../styles/burger-styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>nobio</title>
          <meta charSet="utf-8" />
          <meta name='description' content='nobio | 小林信之の自己紹介ページ 数学 プログラミング 心理学 教育 フリーランス' />
          <meta property="og:title" content="nobio" />
          <meta property="og:description" content="小林信之の自己紹介ページ 数学 プログラミング 心理学 教育 フリーランス" />
          <meta property="og:url" content="https://nbr41.com" />
          <meta property="og:site_name" content="nobio" />
          <meta property="og:locale" content="ja_JP" />
          <meta name="twitter:site" content="@Knob_nbr41to" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
