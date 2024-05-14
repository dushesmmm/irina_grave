// /pages/app.js

import Layout from '../app/layout'

export default function MyApp({ Component, pageProps }) {
    return (
      <Layout suppressHydrationWarning={true}>
        <Component {...pageProps} suppressHydrationWarning={true} />
      </Layout>
    )
  }
  