import { gql } from 'graphql-request'
import { hygraphClient } from '../hygraph'

const MutationUpdatePost = gql`
  mutation UpdatePost($data: PostUpdateInput!, $id: ID!) {
    updatePost(data: $data, where: { id: $id }) {
      id
    }
  }
`

export interface UpdatePostData {
  title?: String
  slug?: String
  subtitle?: String
  keywords?: String
  content?: String
  picture?: {
    connect: {
      id: string
    }
  }
}

export async function updatePost(data: UpdatePostData, id: string) {
  return await hygraphClient.request(MutationUpdatePost, { data, id })
}
