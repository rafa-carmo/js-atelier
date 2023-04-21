export function Hero() {
  return (
    <section className="bg-white h-hero grid place-items-center pt-10 px-5 md:pt-32">
      <div className="container mx-auto flex items-center flex-col gap-20">
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-bold text-title font-title">JS Atelier</h2>
          <h2 className="font-bold text-title font-title text-center">
            Maquiadora Profissional
          </h2>
        </div>

        <button className="bg-background/40 px-9 py-4 border font-bold uppercase hover:bg-background/75 transition-colors duration-500">
          Agende sua Maquiagem
        </button>
      </div>
    </section>
  )
}
