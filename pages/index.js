import { Box, Text, Link, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return <Layout title='Bel&Emi'>
    <Box height='100vh' bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('photo2.jpeg')" bgRepeat='no-repeat' bgSize='cover' bgPosition='right'>
      <Box height='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Text color='white' fontSize='55' mb='410'>Bel & Emi</Text>
        <Text color='white' fontSize='35'>Nos casamos</Text>
        <Text color='white' fontSize='30'>07.01.2022</Text>
      </Box>
    </Box>
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25' mb='5'>Queremos que seas parte</Text>
      <Text fontSize='20'>CIVIL</Text>
      <Text>14:00 PM</Text>
      <Text>Casa de la Cultura</Text>
      <Text>18 de Julio 820</Text>
      <Text>San Carlos, Maldonado</Text>
      <Link mt='5' textDecoration='underline' href='https://goo.gl/maps/gJGCLDgyizxha1C47' isExternal>Mapa</Link>
      <Box borderBottom='1px solid #c0c0c0' w='100%' marginY='5' display='flex' h='1' />
      <Text fontSize='20'>CELEBRACIÓN CIVIL</Text>
      <Text>19:00 PM</Text>
      <Text>Ejido y Ubaldina Maurente</Text>
      <Text>San Carlos, Maldonado</Text>
      <Text>Confirmar asistencia</Text>
      <Link mt='5' textDecoration='underline' href='https://goo.gl/maps/xm8dgn2kfkE7vLAP6' isExternal>Mapa</Link>
    </Box>
    <Box bg='#f2f2f2' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25'>Cuenta regresiva</Text>
      <Text>Timer</Text>
    </Box>
    <Image boxSize="100%" objectFit="cover" src="photo3-copy.jpeg" alt="Foto dos" />
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25' mb='5'>Colectivo</Text>
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text>CAJA AHORRO USD - Itaú</Text>
        <Text>Emiliano Castellano</Text>
        <Text>7134933</Text>
      </Box>
      <Box borderBottom='1px solid #c0c0c0' w='100%' marginY='5' display='flex' h='1' />
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text>CAJA AHORRO PESOS - Itaú</Text>
        <Text>María Belén Noguez</Text>
        <Text>2110561</Text>
      </Box>
    </Box>
    <Image boxSize="100%" objectFit="cover" src="photo5.jpeg" alt="Foto dos" />
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center' textAlign='center'>
      <Text fontSize='25'>#Bel&Emi</Text>
      <Text>Etiquétanos en Instagram con nuestro hashtag en fotos y videos</Text>
    </Box>
    <Carousel infiniteLoop renderThumbs={() => {}}>
      <Box w='100%'>
        <Image src="photo7.jpeg" alt='Carousel 1' />
      </Box>
      <Box w='100%'>
        <Image src="photo4.jpeg" alt='Carousel 2' />
      </Box>
      <Box w='100%'>
        <Image src="photo8.jpeg" alt='Carousel 3' />
      </Box>
      <Box w='100%'>
        <Image src="photo10.jpeg" alt='Carousel 4' />
      </Box>
      <Box w='100%'>
        <Image src="photo11.jpeg" alt='Carousel 5' />
      </Box>
      <Box w='100%'>
        <Image src="photo12.jpeg" alt='Carousel 6' />
      </Box>
      <Box w='100%'>
        <Image src="photo13.jpeg" alt='Carousel 7' />
      </Box>
      <Box w='100%'>
        <Image src="photo14.jpeg" alt='Carousel 8' />
      </Box>
    </Carousel>
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize='25'>EL AMOR ES LA CURA</Text>
    </Box>
  </Layout>
}
