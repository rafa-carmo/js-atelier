import { Heading } from '@comp/Heading'

export function About() {
  return (
    <div className="container py-16 mx-auto w-full flex items-center justify-center gap-28">
      <div className="max-w-md flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Heading>Sobre</Heading>
          <h3 className="font-bold text-2xl">Bem Vindo a JS Atelier</h3>
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
        className="w-80 h-80 object-contain rounded"
      />
    </div>
  )
}
