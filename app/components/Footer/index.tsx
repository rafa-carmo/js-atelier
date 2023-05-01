'use client'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="py-16 bg-black px-5 md:px-0">
      <div className="container mx-auto">
        <p className="py-16 font-title text-title font-bold text-white">LOGO</p>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-14 md:gap-36">
          <div className="flex flex-col gap-5">
            <span className="font-title">Nome</span>
            <span>
              JS Atelier é onde a arte encontra a beleza, com um toque pessoal e
              atenção aos detalhes.
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-title">Sobre</span>
            <span>
              Oi, meu nome é Jeniffer e eu sou uma maquiadora apaixonada por
              beleza!
            </span>
          </div>
          <div className="flex items-center md:justify-start justify-center gap-4">
            <span className="border border-white rounded-full p-3">
              <FacebookLogo size={24} />
            </span>
            <span className="border border-white rounded-full p-3">
              <InstagramLogo size={24} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white mt-36">
        © 2023
      </div>
    </footer>
  )
}
