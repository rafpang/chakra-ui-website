"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <Skills />
   <Projects />
   
   </>
  )
}
