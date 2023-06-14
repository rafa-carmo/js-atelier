import { gql } from 'graphql-request'
import { hygraphClient } from '../hygraph'

const PublishPostAndImage = gql`
  mutation PublishPost($idImage: ID!, $idPost: ID!) {
    publishPost(where: { id: $idPost }) {
      id
    }
    publishAsset(where: { id: $idImage }) {
      id
    }
  }
`

const PublishPost = gql`
  mutation PublishPost($idPost: ID!) {
    publishPost(where: { id: $idPost }) {
      id
    }
  }
`

export async function publishPost(idPost: string, idImage?: string) {
  if (idImage) {
    return await hygraphClient.request(PublishPostAndImage, {
      idPost,
      idImage,
    })
  }
  await hygraphClient.request(PublishPost, {
    idPost,
  })
}
