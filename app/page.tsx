'use client' // this is a client component 👈🏽

import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { PostCard } from '@/components/Post-Card'
import { Heading } from '@/components/Heading'
import { useState } from 'react'
import { SliderComponent } from '@/components/Slider'

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
    </main>
  )
}
