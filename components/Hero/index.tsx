export function Hero() {
  return (
    <section className="bg-white h-hero grid place-items-center">
      <div className="container mx-auto flex items-center flex-col gap-20">
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-bold text-3xl font-sans">JS Atelier</h2>
          <h2 className="font-bold text-3xl font-sans">
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
