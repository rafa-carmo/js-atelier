import PostTable from '@/components/PostTable'
import { hygraphClient } from '@/lib/hygraph'
import { gql } from 'graphql-request'
import Link from 'next/link'

const QueryPosts = gql`
  query Posts {
    posts(orderBy: createdAt_DESC, stage: DRAFT) {
      id
      title
      slug
      subtitle
      stage
      createdAt
    }
  }
`
export const revalidate = 0
export interface PostProps {
  id: string
  title: string
  slug: string
  subtitle?: string
  stage: string
  createdAt: string
}
export default async function Admin() {
  const { posts }: { posts: PostProps[] } = await hygraphClient.request(
    QueryPosts,
  )

  return (
    <section className="bg-gray-100 text-gray-600 h-screen md:px-4 py-10">
      <div className="flex flex-col h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 container">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800 text-center">
              Postagens
            </h2>
          </header>
          <div className="md:p-3">
            <div className="w-full flex items-center justify-end pr-2 pb-3">
              <Link href="/admin/create/post">
                <button className="bg-black border rounded-md text-white flex items-center gap-2 px-2 py-1">
                  <span>Novo Post</span>
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <PostTable posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
