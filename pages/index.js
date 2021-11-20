import { Box, Text, Link, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'

export default function Home() {
  return <Layout title='Bienvenidos'>
    <Box height='100vh' bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('main-photo.jpeg')" bgRepeat='no-repeat' bgSize='cover'>
      <Box height='100%' display='flex' pt='150' alignItems='center' flexDirection='column'>
        <Text color='white' fontSize='35'>Nos casamos</Text>
        <Text color='white' fontSize='40' mt='20'>Belen & Emiliano</Text>
        <Text color='white' fontSize='24' mt='10'>02.04.2022</Text>
      </Box>
    </Box>
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25' mb='5'>Queremos que seas parte</Text>
      <Text></Text>
      <Text>5:00 PM</Text>
      <Text>Nombre del lugar</Text>
      <Text>Dirección - calle/número</Text>
      <Link mt='5' textDecoration='underline' href='https://www.google.com/maps' isExternal>Link al mapa</Link>
      <Image mt='10' boxSize="100%" objectFit="cover" src="second.jpeg" alt="Segun Adebayo"
  />
    </Box>
  </Layout>
}
