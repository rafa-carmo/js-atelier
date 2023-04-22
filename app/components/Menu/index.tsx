import { useMenuContext } from '@/contexts/menu'
import { LinkMenu } from './link'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

export function Menu() {
  const { active, menuToogle } = useMenuContext()
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-black pointer-events-none z-20 transition-all duration-500 ease-in-out ${
          active ? ' opacity-50 pointer-events-auto ' : ' opacity-0'
        }`}
        onClick={menuToogle}
      ></div>

      <div
        className={`fixed top-10 bottom-0 w-52 bg-white z-30 transition-all duration-500 ease-in-out pt-10 flex flex-col justify-between [&>a]:border-black last:border-transparent ${
          active ? 'left-0 opacity-100' : '-left-56 opacity-0'
        }`}
      >
        <nav className=" flex flex-col" onClick={menuToogle}>
          <LinkMenu title="Inicio" link="/" />
          <LinkMenu title="Sobre" link="#sobre" />
          <LinkMenu title="Blog" link="/blog" />
          <LinkMenu title="Portfólio" link="#portfolio" />
          <LinkMenu title="Curso" link="#curso" />
          <LinkMenu title="Hobbies" link="#hobbies" />
        </nav>
        <div className="flex items-center justify-center gap-3 pb-3">
          <a href="#">
            <FacebookLogo size={24} />
          </a>
          <a href="#">
            <InstagramLogo size={24} />
          </a>
        </div>
      </div>
    </>
  )
}
