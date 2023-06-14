'use client'
import React from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MenuContextProvider } from '@/contexts/menu'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="bg-background min-h-screen">
        <SessionProvider>
          <MenuContextProvider>
            <Head>
              <title>JS Atelier</title>
            </Head>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </MenuContextProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
