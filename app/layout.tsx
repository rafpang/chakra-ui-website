"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar"

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        
        <ChakraProvider>
          <Navbar>
          {children}
          </Navbar>
        </ChakraProvider>
      </body>
    </html>
  )
}
