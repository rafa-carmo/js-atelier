import { gql } from 'graphql-request'
import { hygraphClient } from '../hygraph'

const GetPostImage = gql`
  query GetPostImage($id: ID!) {
    post(where: { id: $id }) {
      picture {
        id
      }
    }
  }
`

const DeletePostWithAsset = gql`
  mutation deletePost($idPost: ID!, $idImage: ID!) {
    deletePost(where: { id: $idPost }) {
      id
    }
    deleteAsset(where: { id: $idImage }) {
      id
    }
  }
`

interface PostAsset {
  post: {
    picture: {
      id: string
    }
  }
}

export async function imageIdFromPost(id: string): Promise<string> {
  const { post }: PostAsset = await hygraphClient.request(GetPostImage, { id })

  return post.picture.id
}

export async function deletePost(id: string) {
  const idImage = await imageIdFromPost(id)
  await hygraphClient.request(DeletePostWithAsset, { idPost: id, idImage })
}
