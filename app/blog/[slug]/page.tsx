import { PostCard } from '@/components/Post-Card'
import { ShareButton } from '@/components/ShareButton'
import { hygraphClientPublic } from '@/lib/hygraph'
import { gql } from 'graphql-request'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const revalidate = 86400 // 1 dia

export interface PostResponse {
  title: string
  subtitle: string
  keywords: string
  publishedAt: string
  userPage: { name: string; email: string }
  picture: { url: string }
  content: string
}

interface PostsProps {
  id: string
  title: string
  slug: string
  content: string
  picture: {
    url: string
  }
  createdAt: string
}

interface PostProps {
  params: { slug: string }
}

export default async function Post({ params }: PostProps) {
  const { slug } = params
  if (!slug) {
    notFound()
  }

  const GetPostBySlug = gql`
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        title
        subtitle
        keywords
        publishedAt
        userPage {
          name
          email
        }
        picture {
          url
        }
        content
      }
      posts(orderBy: createdAt_DESC, first: 6) {
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

  const { post, posts }: { post: PostResponse; posts: PostsProps[] } =
    await hygraphClientPublic.request(GetPostBySlug, {
      slug,
    })

  if (!post) {
    notFound()
  }

  const postContent = `${post.content.replaceAll(
    '\n',
    '',
  )} <script src="https://www.instagram.com/embed.js"> </script>`
  return (
    <>
      <header className="px-5 md:px-0">
        <div className="text-center container mx-auto my-10 md:my-20">
          <h1 className=" font-bold text-2xl md:text-4xl">{post.title}</h1>
          <p className="mt-2 font-light text-sm md:text-base">
            Por: <b className="font-medium">{post.userPage.name}</b> -{' '}
            {format(new Date(post.publishedAt), "dd'/'mm'/'yyyy", {
              locale: ptBR,
            })}
          </p>
        </div>

        <h2 className="text-center font-bold md:text-xl">{post.subtitle}</h2>
      </header>

      <section className="container mx-auto flex flex-col px-5 md:px-10 mb-10">
        <div className="flex items-center justify-center overflow-hidden w-full h-96 px-2 mb-5 md:mb-24 mt-14 rounded-md">
          <img
            src={post.picture.url}
            alt="O poder das cores na maquiagem: como escolher a tonalidade certa para
          cada ocasião"
            className="w-full "
          />
        </div>
        <article
          className="space-y-10 text-lg"
          dangerouslySetInnerHTML={{
            __html: postContent,
          }}
        ></article>

        <div className="flex flex-col gap-3 mt-5">
          <p className="font-bold text-xl">Compartilhe:</p>
          <div className="flex gap-5 items-center flex-wrap">
            <ShareButton type="whatsapp" />
            <ShareButton type="facebook" />
            <ShareButton type="twitter" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-10 px-5 md:px-0">
        <h4 className="font-bold text-2xl">Ultimos Posts</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-stretch">
          {posts.slice(0, 6).map((item) => (
            <PostCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}
