import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps, Image
} from '@chakra-ui/react';
import Link from 'next/link';
import Card from '@/components/Card';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { VscGithubInverted } from "react-icons/vsc";

export default function Hero() {
    const el = useRef("stuff");
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Data Science", "Data Engineering", "Machine Learning", "Web Development"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    function handleGithub() {
        window.open('https://github.com/rafpang/')
    }

    return (
    
        <div id="hero">
    <Container maxW={'100vw'} minH={'50vh'} bgGradient='linear(to-l, #7928CA, #FF0080)' color={'black'} borderRadius={10}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
            
          {/* Hi, I'm {' '} */}
          <Text as={'span'} color={'white'} textShadow='3px 3px #f4db7d'>
            Hi, I'm Rafi
          </Text>
        </Heading>
      <Image src="/assets/rafi-circular.png"
          alt="Picture of the author"
          width={200}
          height={200} />
          <Flex maxW={'100vw'}>
          <Heading 
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'} textShadow='3px 3px #f4db7d'>
         
           <Text  as={'span'} color={'black'} ref={el} >
           </Text>
           </Heading>
         
        </Flex>
          
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}
            onClick={handleGithub}>
             GitHub
          </Button>
        
            <Link  href="/files/Resume.pdf" locale="false" target="_blank"><Button rounded={'full'} px={6} bg={'gray.500'} color={'white'} > Resume </Button></Link>
            Resume
        
          
        </Stack>
      
        
      </Stack >
    
    </Container>
    
    </div>
  )
    }