'use client'
import { useMenuContext } from '@/contexts/menu'
import { List, X } from '@phosphor-icons/react'
import { Menu } from '@/components/Menu'

export function Header() {
  const { active, menuToogle } = useMenuContext()
  return (
    <>
      <Menu />
      <nav className="bg-black fixed w-screen z-30">
        <div className="container text-white mx-auto h-20 flex justify-between items-center px-5 md:p-0">
          <span className="font-black">Logo</span>
          <nav onClick={menuToogle} className="cursor-pointer">
            {active ? <X size={32} /> : <List size={32} />}
          </nav>
        </div>
      </nav>
    </>
  )
}
