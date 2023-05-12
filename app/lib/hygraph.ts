import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.HYGRAPH_ENDPOINT || '-'
const token = process.env.HYGRAPH_TOKEN

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const hygraphClientPublic = new GraphQLClient(endpoint)
