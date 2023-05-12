import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { gql } from 'graphql-request'
import { hygraphClientPublic } from '@/lib/hygraph'

const GetNextAuthUserByEmail = gql`
  query GetNextAuthUserByEmail($email: String!) {
    user: userPage(where: { email: $email }, stage: DRAFT) {
      id
      email
      password
    }
  }
`

type GenericObject = { [key: string]: any }

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@email.com.br',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const { user }: GenericObject = await hygraphClientPublic.request(
          GetNextAuthUserByEmail,
          {
            email: credentials.email,
          },
        )

        if (!user) {
          return null
        }

        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          throw new Error('Wrong credentials. Try again.')
        }

        return {
          id: user.id,
          username: user.email,
          email: user.email,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return Promise.resolve(session)
    },
  },
})
