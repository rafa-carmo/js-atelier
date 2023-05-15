import { NextResponse } from 'next/server'
import { hygraphClientPublic } from '@/lib/hygraph'
import { gql } from 'graphql-request'

interface PostParams {
  slug: string
}

export async function GET(request: Request, { slug }: PostParams) {
  const GetPostBySlug = gql`
    query GetPostBySlug() {
      post(where: {slug: $slug}) {
        title
        subtitle
        keywords
        publishedAt
        userPage{
          name
          email
        }
        picture {
          url
        }
        content {
          text
        }
      }
      
    }
  `
  const { post } = await hygraphClientPublic.request(GetPostBySlug, {
    slug,
  })
  console.log(post)
  return null
  // return NextResponse.json({ data })
}
