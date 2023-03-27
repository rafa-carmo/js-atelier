export function Footer() {
  return (
    <footer className="py-16 bg-black px-5 md:px-0">
      <div className="container mx-auto">
        <p className="py-16 font-title text-title font-bold text-white">LOGO</p>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-14 md:gap-36">
          <div className="flex flex-col gap-5">
            <span className="font-title">Nome</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-title">Sobre</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.
            </span>
          </div>
          <div className="flex items-center md:justify-start justify-center gap-4">
            <span className="border border-white rounded-full p-3">Face</span>
            <span className="border border-white rounded-full p-3">Insta</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white mt-36">
        © 2023
      </div>
    </footer>
  )
}
