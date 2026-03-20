import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import {
  isProtectedRoute,
  isAuthRoute
} from '@/config/protectedRoutes'

export default async function middleware(req) {
  const { pathname } = req.nextUrl

  // Skip middleware for API routes, static files, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Get the authentication token
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Protection logic
  if (!token && isProtectedRoute(pathname)) {
    // Unauthenticated user trying to access protected route
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  if (token && isAuthRoute(pathname)) {
    // Authenticated user trying to access auth routes (login/register)
    return NextResponse.redirect(new URL('/profile', req.url))
  }

  // Allow the request to proceed
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}