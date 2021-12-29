import { useState, useEffect } from 'react'
import { Box, Text, Link, Image } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("1/7/2022 13:59:59")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
      }
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return <Layout title='Bel&Emi'>
    <Box height='100vh' bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('photo2.jpeg')" bgRepeat='no-repeat' bgSize='cover' bgPosition='right'>
      <Box height='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Text color='white' fontSize='55' mb='410'>Bel & Emi</Text>
        <Text color='white' fontSize='35'>Nos casamos</Text>
        <Text color='white' fontSize='30'>07.01.2022</Text>
      </Box>
    </Box>
    <Box bg='white' padding='10' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Text fontSize={{ base: '25', md: '30' }} mb='5'>Queremos que seas parte</Text>
      <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}>
        <Box textAlign='center' borderRight={{ base: 'none', md: '1px solid #c0c0c0' }}  padding={{ base: '0', md: '10px 70px 10px 10px' }}>
          <Text mb='2' fontSize='20'>CIVIL</Text>
          <Text>Viernes 7 de Enero - 14:00 PM</Text>
          <Text>Casa de la Cultura</Text>
          <Text>18 de Julio 820</Text>
          <Text>San Carlos, Maldonado</Text>
          <Link  mt='5' display='block' textDecoration='underline' href='https://goo.gl/maps/gJGCLDgyizxha1C47' isExternal>Mapa</Link>
        </Box>
        <Box display={{ base: 'flex', md: 'none', xl: 'none' }} borderBottom='1px solid #c0c0c0' w='100%' marginY='5' h='1' />
        <Box textAlign='center' padding={{ base: '0', md: '10px 10px 10px 70px' }}>
          <Text mb='2' fontSize='20'>CELEBRACIÓN CIVIL</Text>
          <Text>Viernes 7 de Enero - 19:00 PM</Text>
          <Text>Ejido y Ubaldina Maurente</Text>
          <Text>San Carlos, Maldonado</Text>
          <Text>Confirmar asistencia</Text>
          <Link mt='5' display='block' textDecoration='underline' href='https://goo.gl/maps/xm8dgn2kfkE7vLAP6' isExternal>Mapa</Link>
        </Box>
      </Box>
    </Box>
    <Box bg='#c9c293' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize={{ base: '25', md: '35' }} mb='5'>Solo faltan</Text>
      {partyTime ? (
        <Text fontSize='30'>Empezó 🎉</Text>
      ) : <Box display='flex'>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{days}</Text>
          </Box>
          <Text mt='1' fontSize='14'>días</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{hours}</Text>
          </Box>
          <Text mt='1' fontSize='14'>horas</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{minutes}</Text>
          </Box>
          <Text mt='1' fontSize='14'>minutos</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{seconds}</Text>
          </Box>
          <Text mt='1' fontSize='14'>segundos</Text>
        </Box>
      </Box>}
    </Box>
    <Image boxSize="100%" objectFit="cover" src="photo3-copy.jpeg" alt="Foto dos" />
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize={{ base: '25', md: '35' }} mb='5'>Colectivo</Text>
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
      <Text fontSize={{ base: '25', md: '35' }}>#Bel&Emi</Text>
      <Text fontSize={{ base: '16', md: '18' }}>Etiquétanos en Instagram con nuestro hashtag en fotos y videos</Text>
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
      <Text fontSize={{ base: '25', md: '35' }}>EL AMOR ES LA CURA</Text>
    </Box>
  </Layout>
}
