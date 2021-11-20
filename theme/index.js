import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  styles: {
    global: {
      html: {
        height: '100%'
      },
      body: {
        backgroundColor: '#FAFAFE',
        height: '100%'
      }
    }
  },
  fonts: {
    heading: 'Source Sans Pro',
    body: 'Source Sans Pro'
  }
})