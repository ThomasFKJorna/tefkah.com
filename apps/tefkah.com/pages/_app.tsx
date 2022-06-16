import { AppProps } from 'next/app'
import type { NextPage } from 'next'
import Head from 'next/head'
import './styles.css'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>tefkah.</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>,
  )
}

export default CustomApp
