import { About } from '@/components/About'
import { Hero } from '@/components/Hero'
import { Heading } from '@/components/Heading'
import { PortfolioCard } from '@/components/Portfolio-Card'
import { HobbieCard } from '@/components/Hobbie-Card/index'
import SliderPosts from '@/components/SliderPosts'
import { gql } from 'graphql-request'
import { hygraphClientPublic } from './lib/hygraph'
import { PostCardProps } from '@/components/Post-Card'

export const revalidate = 7200

const QueryHomePage = gql`
  query HomePage {
    page(where: { page: "home" }) {
      seo {
        title
        description
      }
      hero {
        title
        shortDescription
      }
      about {
        title
        about
      }
      portfolio {
        id
        title
        description
        picture {
          url
        }
      }
      courese {
        title
        description
        url
      }
      hobbies {
        id
        title
        description
        picture {
          url
        }
      }
    }
    posts(orderBy: postedAt_DESC, first: 10) {
      id
      title
      slug
      subtitle
      stage
      content
      picture {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 366, height: 208 } }
          }
        )
      }
      createdAt
    }
  }
`
interface HomePage {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    shortDescription: string
  }
  about: {
    title: string
    about: string
  }
  portfolio: {
    id: string
    title: string
    description: string
    picture: {
      url: string
    }
  }[]
  courese: {
    title: string
    description: string
    url: string
  }
  hobbies: {
    id: string
    title: string
    description: string
    picture: {
      url: string
    }
  }[]
}

export default async function Home() {
  const { page, posts }: { page: HomePage; posts: PostCardProps[] } =
    await hygraphClientPublic.request(QueryHomePage)

  return (
    <main>
      <Hero {...page.hero} />
      <section id="sobre">
        <About {...page.about} />
      </section>
      <section className=" w-full bg-white flex flex-col py-16 gap-3" id="blog">
        <div className="container mx-auto px-16 ">
          <Heading>Ultimos posts do Blog</Heading>
        </div>
        <SliderPosts posts={posts} />
      </section>

      <section className="container mx-auto py-16 px-16" id="portfolio">
        <Heading>Portfólio</Heading>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-24 gap-14">
          {page.portfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.picture}
            />
          ))}
        </div>
      </section>

      <section className="bg-white" id="curso">
        <div className="container mx-auto py-16 px-16">
          <Heading>{page.courese.title}</Heading>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-28">
            <div className="flex flex-col justify-around lg:w-[412px] gap-5 md:gap-0">
              <p>{page.courese.description}</p>
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
          {page.hobbies.map((hobbie) => (
            <HobbieCard
              key={hobbie.id}
              title={hobbie.title}
              description={hobbie.description}
              image={{ url: hobbie.picture.url, alt: hobbie.title }}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
