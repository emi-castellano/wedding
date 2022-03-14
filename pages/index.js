import { useState, useEffect, useRef } from 'react'
import { 
  Box,
  Text, 
  Link,
  Image, 
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  useEffect(() => {
    const target = new Date("04/2/2022 16:59:59")

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
    <Box height='100vh' bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('photo14-copy.jpg')" bgRepeat='no-repeat' bgSize='cover' bgPosition='center'>
      <Box height='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Text color='white' fontSize='55' mb='410'>Bel & Emi</Text>
        <Text color='white' fontSize='35'>Nuestro festejo</Text>
        <Text color='white' fontSize='30'>02.04.2022</Text>
      </Box>
    </Box>
    <Box bg='white' padding='10' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Text fontSize={{ base: '25', md: '30' }} mb='5'>Queremos que seas parte</Text>
      <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}>
        <Box textAlign='center' padding={{ base: '0', md: '10px 70px 10px 10px' }}>
          <Text mb='2' fontSize='20'>LA FIESTA</Text>
          <Text>Sábado 2 de Abril - 17:00 hs</Text>
          <Text fontWeight="bold">Pueblo Coyote</Text>
          <Text>Ruta 104 km 1,5 - Mangrullos de Punta Piedras</Text>
          <Text>Manantiales, Punta del Este</Text>
          <Link  mt='5' display='block' textDecoration='underline' href='https://goo.gl/maps/GsVJJSqwAirRoHEF8' isExternal>Ver mapa</Link>
          <Button mt="20px" variant="outline" onClick={() => onOpen(true)}>Ver información adicional</Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Información adicional</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text mb="10px">El lugar tiene dos entradas como la de la foto. Por eso, debes tener en cuenta lo siguiente:</Text>
              <Text mb="5px">- Yendo desde San Carlos, tomar la segunda entrada (a mano izquierda).</Text>
              <Text mb="5px">- Yendo desde Manantiales, tomar la primer entrada (a mano derecha).</Text>
              <Box bgImage="url('entrada.png')" bgRepeat="no-repeat" bgSize='cover' bgPosition='center' height={{ base: '250px', md: '250px', lg: '310px' }} />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cerrar
              </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>
      </Box>
    </Box>
    <Box bgImage="url('mapa.png')" bgRepeat="no-repeat" bgSize='cover' bgPosition='center' height={{ base: '400px', md: '400px', lg: '750px' }} />
    <Box bg='white' padding='10' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Text fontSize={{ base: '25', md: '30' }} textAlign='center' mb='5'>Vestimenta formal</Text>
      <Box textAlign='center' padding={{ base: '0', md: '10px 70px 10px 10px', lg: '0' }}>
        <Text>Prepárate para una noche única!</Text>
        <Text>La autoestima en el cielo y el perreo hasta el suelo.</Text>
      </Box>
    </Box>
    <Box bg='#7e9472' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text color="white" fontWeight='bold' fontSize={{ base: '25', md: '35' }} mb='5'>Solo faltan</Text>
      {partyTime ? (
        <Text fontSize='30'>Empezó 🎉</Text>
      ) : <Box display='flex'>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{days}</Text>
          </Box>
          <Text color="white" mt='1' fontSize='14'>días</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{hours}</Text>
          </Box>
          <Text color="white" mt='1' fontSize='14'>horas</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' paddingRight='3'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{minutes}</Text>
          </Box>
          <Text color="white" mt='1' fontSize='14'>minutos</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
          <Box borderRadius='50%' h='50px' w='50px' bg='white' display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='20'>{seconds}</Text>
          </Box>
          <Text color="white" mt='1' fontSize='14'>segundos</Text>
        </Box>
      </Box>}
    </Box>
    <Image boxSize="100%" objectFit="cover" src="photo3-copy.jpeg" alt="Foto dos" />
    <Box bg='white' padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontSize={{ base: '25', md: '35' }} mb='5' fontWeight='bold'>Colectivo</Text>
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text>CAJA AHORRO USD - Itaú</Text>
        <Text>María Belén Noguez</Text>
        <Text>0465224</Text>
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
      <Text fontSize="18px">Estamos felices de celebrar nuestro amor con ustedes.</Text>
      <Text fontSize='18px'>Por favor, confírmanos tu asistencia.</Text>
    </Box>
    <Carousel infiniteLoop renderThumbs={() => {}}>
      <Box w='100%'>
        <Image src="photo19.jpeg" alt='Carousel 6' />
      </Box>
      <Box w='100%'>
        <Image src="photo8.jpeg" alt='Carousel 3' />
      </Box>
      <Box w='100%'>
        <Image src="photo18.jpg" alt='Carousel 8' />
      </Box>
      <Box w='100%'>
        <Image src="photo10.jpeg" alt='Carousel 4' />
      </Box>
      <Box w='100%'>
        <Image src="photo4.jpeg" alt='Carousel 5' />
      </Box>
      <Box w='100%'>
        <Image src="photo12.jpeg" alt='Carousel 7' />
      </Box>
    </Carousel>
    <Box bg='#7e9472' marginTop="-10px" padding='10' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Text fontWeight="bold" color='white' fontSize={{ base: '25', md: '35' }}>EL AMOR ES LA CURA</Text>
    </Box>
  </Layout>
}
