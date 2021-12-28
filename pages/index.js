import { Box, Text, Link, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'

export default function Home() {
  return <Layout title='Bienvenidos'>
    <Box height='100vh' bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('photo1.jpeg')" bgRepeat='no-repeat' bgSize='cover' bgPosition='center'>
      <Box height='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Text color='white' fontSize='55' mb='40'>Bel&Emi</Text>
        <Text color='white' fontSize='35' mt='70' mb='50'>Nos casamos</Text>
        <Text color='white' fontSize='30'>07.01.2022</Text>
      </Box>
    </Box>
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25' mb='5'>Queremos que seas parte</Text>
      <Text fontSize='20'>CIVIL</Text>
      <Text>14:00 PM</Text>
      <Text>Casa de la Cultura</Text>
      <Text>18 de Julio 820 - San Carlos, Maldonado</Text>
      <Link mt='5' textDecoration='underline' href='https://www.google.com/maps/place/Usina+Cultural+San+Carlos/@-34.7928682,-54.9157683,19.49z/data=!4m9!1m2!2m1!1scasa+de+la+cultura+san+carlos!3m5!1s0x957518f60b6522dd:0x15df47918625313a!8m2!3d-34.7926934!4d-54.9158927!15sCh1jYXNhIGRlIGxhIGN1bHR1cmEgc2FuIGNhcmxvc5IBEGNvcnBvcmF0ZV9vZmZpY2U' isExternal>Mapa</Link>
    </Box>
    <Image boxSize="100%" objectFit="cover" src="photo2.jpeg" alt="Segun Adebayo" />
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text textAlign='center' fontSize='20'>Si desean hacernos un regalo, pueden colaborar en las siguientes cuentas</Text>
      <Box mt='10' display='flex' alignItems='center' flexDirection='column'>
        <Text>CAJA DE AHORRO - USD</Text>
        <Text>7134933</Text>
      </Box>
      <Box borderBottom='1px solid #c0c0c0' w='100%' marginY='5' display='flex' h='1' />
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text>CAJA DE AHORRO - PESOS</Text>
        <Text>8299608</Text>
      </Box>
    </Box>
  </Layout>
}
