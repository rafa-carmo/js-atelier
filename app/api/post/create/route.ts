import { gql } from 'graphql-request'
import { NextResponse } from 'next/server'

const CreatePost = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
    }
  }
`

interface PostBody {
  title: string
  subtitle: string
  imageId: string
  content: string
}

export async function POST(request: Request) {
  const { title, content, imageId, subtitle }: PostBody = await request.json()
  if (!title || !content || !imageId || !subtitle) {
    return NextResponse.json({ error: 'missing fields' })
  }

  //   return NextResponse.json({ imageUploaded })
}
