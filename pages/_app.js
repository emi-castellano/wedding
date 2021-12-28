import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-sans-pro/700.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
