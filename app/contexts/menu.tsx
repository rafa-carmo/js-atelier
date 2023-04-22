'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type MenuContextProps = {
  active: boolean
  menuToogle: () => void
}

const MenuContext = createContext<MenuContextProps>({
  active: false,
  menuToogle: () => {},
})

export type MenuProviderProps = {
  children: ReactNode
}

export const MenuContextProvider = ({ children }: MenuProviderProps) => {
  const [active, setActive] = useState(false)

  const handleChange = () => {
    if (active) {
      setActive(false)
      return
    }
    setActive(true)
  }
  return (
    <MenuContext.Provider value={{ active, menuToogle: handleChange }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)
