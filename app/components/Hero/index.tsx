"use client"
import { useEffect, useRef } from 'react'

export function Hero() {
  const refToTitle = useRef<HTMLHeadingElement | null>(null)
  const refToSubtitle = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      if (refToTitle.current) {
        sr().reveal(refToTitle.current, {origin: "right"})
      }
      if (refToSubtitle.current) {
        sr().reveal(refToSubtitle.current, {origin: "left"})
      }

    }
    animate()
  }, [])
  return (
    <section className="bg-white h-hero grid place-items-center  px-5 pb-20">
      <div className="container mx-auto flex items-center flex-col gap-20">
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-bold text-title font-title" ref={refToTitle}>JS Atelier</h2>
          <h2 className="font-bold text-title font-title text-center" ref={refToSubtitle}>
            Maquiadora Profissional
          </h2>
        </div>

        <button title="Agende sua maquiagem" className="bg-background/40 px-9 py-4 border font-bold uppercase hover:bg-background/75 transition-colors duration-500">
          Agende sua Maquiagem
        </button>
      </div>
    </section>
  )
}
