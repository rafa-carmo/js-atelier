"use client"
import React, { useEffect } from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MenuContextProvider } from '@/contexts/menu'
import scrollreveal from 'scrollreveal'

export const metadata = {
  title: 'JS Atelier',
  description: 'JS Atelier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    scrollreveal({
      reset: true,     
      distance: '80px',
      duration: 2000,
      delay: 200
  })
  }, [])
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="bg-background">
        <MenuContextProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  )
}
