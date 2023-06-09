// import { ArrowDown, MagnifyingGlass } from '@phosphor-icons/react'
import { PostCard } from '@/components/Post-Card'
import { gql } from 'graphql-request'
import { hygraphClient } from '@/lib/hygraph'

const QueryPosts = gql`
  query Posts {
    posts(orderBy: createdAt_DESC, first: 10) {
      id
      title
      slug
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

export const revalidate = 3600 // Por hora
export interface PostPageProps {
  id: string
  title: string
  slug: string
  content: string
  picture: {
    url: string
  }
  createdAt: string
}
export default async function Blog() {
  const { posts }: { posts: PostPageProps[] } = await hygraphClient.request(
    QueryPosts,
  )
  return (
    <>
      <div className="flex flex-col py-10 items-center container mx-auto gap-5 px-4 md:px-0">
        <h3 className="flex text-center font-bold md:font-light text-xl">
          Confira abaixo todas as minhas dicas e informações sobre maquiagem.
        </h3>
        <div className="md:w-2/4 w-full group relative overflow-hidden">
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:bg-zinc-200 focus:ring-zinc-200"
            placeholder="Digite algo que esteja procurando"
          />
          <button className="absolute right-0 top-0 bottom-0 px-2 flex items-center rounded opacity-50 transition-all duration-500 hover:bg-zinc-200 group-focus-within:opacity-100">
            {/* <MagnifyingGlass size={32} /> */}
          </button>
        </div>
      </div>

      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-stretch">
        {posts.map((item) => (
          <PostCard key={item.title} {...item} />
        ))}
      </main>
      <div className="flex items-center justify-center my-5 font-bold">
        <button className="bg-black py-2 px-4 rounded-lg transition-colors duration-500 flex gap-2 items-center text-white">
          {/* Carregar Mais <ArrowDown size={15} /> */}
        </button>
      </div>
    </>
  )
}
