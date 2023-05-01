import { Heading } from '@/components/Heading'

interface AboutProps {
  title: string
  about: string
}

export function About({ title, about }: AboutProps) {
  return (
    <div className="container py-16 px-16 mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-28 relative">
      <div className="md:max-w-full max-w-xl flex flex-col gap-4">
        <div className="flex flex-col gap-16 sm:gap-2">
          <Heading>Sobre</Heading>

          <h3 className="font-bold font-title text-title">{title}</h3>
        </div>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: about }}></p>
      </div>
      <img
        src="/perfil.jpg"
        alt="IMAGE"
        className="md:w-80 md:h-80 w-32 h-32 object-contain rounded-full md:rounded md:relative absolute top-3 right-2"
      />
    </div>
  )
}
