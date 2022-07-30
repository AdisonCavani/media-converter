import { AppProps } from 'next/app'
import Layout from '@components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
