'use client' // this is a client component 👈🏽

import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { PostCard } from '@/components/Post-Card'
import { Heading } from '@/components/Heading'
import { SliderComponent } from '@/components/Slider'
import { PortfolioCard } from '@/components/Portfolio-Card'
import { HobbieCard } from '@/components/Hobbie-Card/index'

const postsMock = [
  {
    title: '5 dicas para uma pele perfeita antes da maquiagem',
    date: new Date(2023, 0, 20),
  },
  {
    title: 'O guia definitivo para aplicação de cílios postiços',
    date: new Date(2023, 0, 15),
  },
  {
    title: 'Maquiagem para pele madura: dicas e truques para um look radiante',
    date: new Date(2023, 1, 2),
  },
  {
    title: 'Como escolher a cor de base ideal para sua pele',
    date: new Date(2023, 1, 8),
  },
  {
    title: 'Tendências de maquiagem para 2023: o que vem por aí?',
    date: new Date(2023, 1, 18),
  },
  {
    title: 'Maquiagem para festas: dicas para uma make arrasadora',
    date: new Date(2023, 2, 1),
  },
  {
    title: '10 erros comuns de maquiagem e como evitá-los',
    date: new Date(2023, 2, 8),
  },
  {
    title:
      'O poder das cores na maquiagem: como escolher a tonalidade certa para cada ocasião',
    date: new Date(2023, 2, 16),
  },
  {
    title: 'Maquiagem para noivas: como criar um look inesquecível',
    date: new Date(2023, 2, 27),
  },
  {
    title:
      'Os melhores produtos de maquiagem para pele oleosa: dicas e recomendações',
    date: new Date(2023, 3, 5),
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="sobre">
        <About />
      </section>
      <section className=" w-full bg-white flex flex-col py-16 gap-3" id="blog">
        <div className="container mx-auto px-16 ">
          <Heading>Ultimos posts do Blog</Heading>
        </div>
        <SliderComponent className="py-24">
          {postsMock.map((item) => (
            <PostCard key={item.title} {...item} />
          ))}
        </SliderComponent>
      </section>

      <section className="container mx-auto py-16 px-16" id="portfolio">
        <Heading>Portfólio</Heading>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-24 gap-14">
          <PortfolioCard
            title="Gestantes"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the"
            image="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/97319440_2533993973519901_7751963619029417984_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=H5EeckslGCUAX_eO9Mr&_nc_ht=scontent-gig2-1.xx&oh=00_AfDqOtQFjp0llz5gSO-XqZRm-Ko5-EUetwm_9dPpvmH95w&oe=6448CE03"
          />
          <PortfolioCard
            title="Maquiagem"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the"
            image="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/196694329_2836471656605463_4583705450766313014_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=1jzvuk18oR4AX934PMg&_nc_ht=scontent-gig2-1.xx&oh=00_AfBFAz1mtNvFwMnaaLvaiXekoSAp3Mef0EoStRPB3cVBlw&oe=6448BC86"
          />
        </div>
      </section>

      <section className="bg-white" id="curso">
        <div className="container mx-auto py-16 px-16">
          <Heading>Curso de Automaquiagem</Heading>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-28">
            <div className="flex flex-col justify-around lg:w-[412px] gap-5 md:gap-0">
              <p>
                Se você quer aprender a se maquiar sozinha e realçar ainda mais
                a sua beleza, o nosso Curso de Auto Maquiagem é a escolha
                perfeita para você! Neste curso, você aprenderá técnicas de
                maquiagem e truques para criar looks para diversas ocasiões. O
                curso é voltado para iniciantes e não é necessário ter
                experiência prévia em maquiagem.
              </p>
              <button className="bg-background/40 px-9 py-4 border font-bold uppercase hover:bg-background/75 transition-colors duration-500">
                Entre em contato
              </button>
            </div>
            <div className="md:w-[466px] md:h-80 w-full overflow-hidden rounded-3xl">
              <img src="/makeup.png" alt="Automaquiagem" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 my-22 " id="hobbies">
        <div className="px-16">
          <Heading>Hobbies</Heading>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-24 gap-24 px-10 md:p-0">
          <HobbieCard
            title="Fotografia"
            description="Fotografia é o meu hobby favorito. Capturar momentos e paisagens únicas me permite registrar lembranças especiais e expressar minha criatividade através das lentes da câmera."
            image="/image 4.png"
          />
          <HobbieCard
            title="Viagens"
            description="Viajar é minha paixão! Conhecer novos lugares, culturas e pessoas enriquece minha vida e me permite explorar o mundo de uma forma única. Cada viagem é uma aventura e uma oportunidade de criar memórias inesquecíveis."
            image="/image 5.png"
          />
        </div>
      </section>
    </main>
  )
}
