import { gql } from 'graphql-request'
import { hygraphClient } from '../hygraph'

interface createPostProps {
  createPost: {
    id: string
  }
}

export interface CreatePostProps {
  title: string
  slug: string
  subtitle: string
  content: string
  keywords: String
  userPage: {
    connect: {
      email: string
    }
  }
  picture: {
    connect: {
      id: string
    }
  }
}

export async function createPostHygraph(data: CreatePostProps) {
  const CreatePost = gql`
    mutation CreatePost($data: PostCreateInput!) {
      createPost(data: $data) {
        id
      }
    }
  `
  const { createPost }: createPostProps = await hygraphClient.request(
    CreatePost,
    { data },
  )

  return createPost
}
