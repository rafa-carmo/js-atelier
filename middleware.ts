// export { default } from "next-auth/middleware";
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.name)
      return NextResponse.rewrite(
        new URL('/login?message=You Are Not Authorized!', req.url),
      )
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ['/admin/:path*', '/api/post/:path*'],
}
