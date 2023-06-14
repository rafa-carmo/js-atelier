import { gql } from 'graphql-request'
import { hygraphClient } from '../hygraph'

const UnpublishPostAndImage = gql`
  mutation PublishPost($idImage: ID!, $idPost: ID!) {
    unpublishPost(where: { id: $idPost }) {
      id
    }
    unpublishAsset(where: { id: $idImage }) {
      id
    }
  }
`

const UnpublishPost = gql`
  mutation PublishPost($idPost: ID!) {
    unpublishPost(where: { id: $idPost }) {
      id
    }
  }
`

export async function unpublishPost(idPost: string, idImage?: string) {
  if (idImage) {
    return await hygraphClient.request(UnpublishPostAndImage, {
      idPost,
      idImage,
    })
  }
  await hygraphClient.request(UnpublishPost, {
    idPost,
  })
}
