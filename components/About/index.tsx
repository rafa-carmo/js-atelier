import { Heading } from '@comp/Heading'

export function About() {
  return (
    <div className="container py-16 px-16 mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-28 relative">
      <div className="md:max-w-full max-w-xl flex flex-col gap-4">
        <div className="flex flex-col gap-16 sm:gap-2">
          <Heading>Sobre</Heading>
          <h3 className="font-bold text-3xl">Bem Vindo a JS Atelier</h3>
        </div>
        <p className="text-sm">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum.
        </p>
      </div>
      <img
        src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/223266080_2865183517067610_2744943178628486717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D-TRjxlP-igAX-BlxX9&_nc_ht=scontent-gig2-1.xx&oh=00_AfD0LGcr7z_xM2mC4Yp9QIHjLxGcw9__bIYsaVN2GXqi2A&oe=64255079"
        alt="IMAGE"
        className="md:w-80 md:h-80 w-32 h-32 object-contain rounded-full md:rounded md:relative absolute top-3 right-2"
      />
    </div>
  )
}
