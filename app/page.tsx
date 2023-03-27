'use client' // this is a client component 👈🏽

import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { PostCard } from '@/components/Post-Card'
import { Heading } from '@/components/Heading'
import { useState } from 'react'
import { SliderComponent } from '@/components/Slider'
import { PortfolioCard } from '@/components/Portfolio-Card'
import { HobbieCard } from '../components/Hobbie-Card/index'

export default function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  return (
    <main>
      <Hero />
      <About />
      <section className=" w-full bg-white flex flex-col py-16 gap-3">
        <div className="container mx-auto px-16 ">
          <Heading>Ultimos posts do Blog</Heading>
        </div>
        <SliderComponent className="py-24">
          {items.map((item) => (
            <PostCard key={item} title={`${item}`} />
          ))}
        </SliderComponent>
      </section>

      <section className="container mx-auto py-16 px-16">
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

      <section className="bg-white">
        <div className="container mx-auto py-16 px-16">
          <Heading>Curso de Automaquiagem</Heading>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-28">
            <div className="flex flex-col justify-around lg:w-[412px] gap-5 md:gap-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
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

      <section className="container mx-auto py-16 ">
        <div className="px-16">
          <Heading>Hobbies</Heading>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-24 gap-24 px-10 md:p-0">
          <HobbieCard title="Fotografia" image="/image 4.png" />
          <HobbieCard title="Viagens" image="/image 5.png" />
        </div>
      </section>
    </main>
  )
}
