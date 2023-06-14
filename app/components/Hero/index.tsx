'use client'

interface HeroProps {
  title: string
  shortDescription: string
}

export function Hero({ shortDescription, title }: HeroProps) {
  return (
    <section className="bg-white h-hero grid place-items-center  px-5 pb-20">
      <div className="container mx-auto flex items-center flex-col gap-20">
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-bold text-title font-title">{title}</h2>

          <h2 className="font-bold text-lg md:text-title font-title text-center">
            {shortDescription}
          </h2>
        </div>

        <button
          title="Agende sua maquiagem"
          className="bg-background/40 px-9 py-4 border font-bold uppercase hover:bg-background/75 transition-colors duration-500"
        >
          Agende sua Maquiagem
        </button>
      </div>
    </section>
  )
}
