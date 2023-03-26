import React from 'react'
import './globals.css'
import { Header } from '@comp/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        {children}
      </body>
    </html>
  )
}
