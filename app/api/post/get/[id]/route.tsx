import { changeBlockquote } from '@/components/Editor/plugins/instagramchangeBlockquote'
import { hygraphClient } from '@/lib/hygraph'
import { gql } from 'graphql-request'
import { NextResponse } from 'next/server'

interface PostParams {
  params: {
    id: string
  }
}

export interface PostProps {
  id: string
  title: string
  subtitle?: string
  stage: string
  content?: string
  picture: {
    url: string
  }
}

const GetPost = gql`
  query GetPost($id: ID!) {
    post(where: { id: $id }, stage: DRAFT) {
      title
      content
      subtitle
      stage
      picture {
        url
      }
    }
  }
`

export async function GET(request: Request, { params }: PostParams) {
  const { id } = params
  const { post }: { post: PostProps } = await hygraphClient.request(GetPost, {
    id,
  })

  const returnData = {
    ...post,
    content: changeBlockquote(post.content || ''),
  }
  return NextResponse.json({ post: returnData })
}
