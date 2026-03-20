/**
 * Configuration for protected routes
 * Add any routes that require authentication here
 */

export const PROTECTED_ROUTES = [
  '/chat',
  '/home',
  '/conversations',
  '/messages',
  // Add more protected routes as needed
]

export const PUBLIC_ROUTES = [
  '/login',
  '/register',
  '/unauthorized',
  '/',
  // Add more public routes as needed
]

export const AUTH_ROUTES = [
  '/login',
  '/register',
]

/**
 * Check if a route requires authentication
 * @param {string} pathname - The route path
 * @returns {boolean} - True if route is protected, false otherwise
 */
export function isProtectedRoute(pathname) {
  return PROTECTED_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'))
}

/**
 * Check if a route is a public route
 * @param {string} pathname - The route path
 * @returns {boolean} - True if route is public, false otherwise
 */
export function isPublicRoute(pathname) {
  return PUBLIC_ROUTES.some(route => pathname === route)
}

/**
 * Check if a route is an auth route (login/register)
 * @param {string} pathname - The route path
 * @returns {boolean} - True if route is auth route, false otherwise
 */
export function isAuthRoute(pathname) {
  return AUTH_ROUTES.some(route => pathname === route)
}
