import { Heading } from '@/components/Heading'

export function About() {
  return (
    <div className="container py-16 px-16 mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-28 relative">
      <div className="md:max-w-full max-w-xl flex flex-col gap-4">
        <div className="flex flex-col gap-16 sm:gap-2">
          <Heading>Sobre</Heading>
          <h3 className="font-bold font-title text-title">
            Bem Vindo a JS Atelier
          </h3>
        </div>
        <p className="text-sm">
          Oi, meu nome é Jeniffer e eu sou uma maquiadora apaixonada por beleza!
          Há anos venho trabalhando nessa área, atendendo a noivas, modelos e
          pessoas comuns que querem se sentir ainda mais bonitas e confiantes.
          <br />
          Eu acredito que a maquiagem é uma forma maravilhosa de realçar a
          beleza única de cada pessoa. Por isso, sempre busco criar looks que
          combinem com o estilo de vida e as características pessoais de cada
          cliente.
        </p>
      </div>
      <img
        src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/316412633_569799071821419_8949402289786106028_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=C-ruyTPKXagAX_VzCZ1&_nc_ht=scontent-gig2-1.xx&oh=00_AfBpqjGHeiVNYZ7uCBEMSq2YRtWQaN4YwuTbx6k3Wg3zYw&oe=6433DACC"
        alt="IMAGE"
        className="md:w-80 md:h-80 w-32 h-32 object-contain rounded-full md:rounded md:relative absolute top-3 right-2"
      />
    </div>
  )
}
