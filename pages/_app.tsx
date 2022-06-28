import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { Header } from '../components'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Header />
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
