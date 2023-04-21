'use client'
import { List } from '@phosphor-icons/react'

export function Header() {
  return (
    <nav className="bg-black fixed w-screen z-30">
      <div className="container text-white mx-auto h-20 flex justify-between items-center px-5 md:p-0">
        <span className="font-black">Logo</span>
        <nav>
          <List size={32} />
        </nav>
      </div>
    </nav>
  )
}
