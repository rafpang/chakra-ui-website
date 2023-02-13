"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Education from '@/components/Education'
import { Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <Education />
   <Skills />
   <Projects />
  <Box bg={"#212226"}
     w='100%' p={0}  
     maxW={"100vw"}
    minH={"370px"} />
   
   </>
  )
}
