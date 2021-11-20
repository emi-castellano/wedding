import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const Layout = ({ title, children }) => {
  return <section>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box>
      {children}
    </Box>
  </section>
}

export default Layout