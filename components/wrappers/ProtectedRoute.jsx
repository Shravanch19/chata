// This is a example of a client-side protected route wrapper component.
// Currently, the actual route protection logic is handled in middleware.js for better performance and user experience.

// "use client"

// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"

// /**
//  * ProtectedRoute wrapper component
//  * Wraps pages that require authentication
//  * Shows a message and redirects to login after 5 seconds if user is not authenticated
//  * 
//  * Usage:
//  * export default function MyPage() {
//  *   return (
//  *     <ProtectedRoute>
//  *       <YourPageContent />
//  *     </ProtectedRoute>
//  *   )
//  * }
//  */
// export default function ProtectedRoute({ children }) {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   const [countdown, setCountdown] = useState(5)

//   useEffect(() => {
//     // If user is not authenticated, start countdown and redirect
//     if (status === "unauthenticated") {
//       const interval = setInterval(() => {
//         setCountdown(prev => {
//           if (prev <= 1) {
//             clearInterval(interval)
//             router.push("/login")
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)

//       return () => clearInterval(interval)
//     }
//   }, [status, router])

//   // Show loading state while checking authentication
//   if (status === "loading") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//           <p className="text-gray-600 mt-4">Loading...</p>
//         </div>
//       </div>
//     )
//   }

//   // Show message and countdown if user is not authenticated
//   if (status === "unauthenticated") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
//         <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
//           {/* Icon */}
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//               <svg
//                 className="w-8 h-8 text-red-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Message */}
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Authentication Required
//           </h1>
//           <p className="text-gray-600 text-lg mb-8">
//             Please login first to access this page
//           </p>

//           {/* Countdown */}
//           <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
//             <p className="text-gray-700 text-sm mb-2 font-medium">
//               Redirecting to login in
//             </p>
//             <div className="text-5xl font-bold text-blue-600 animate-pulse">
//               {countdown}
//             </div>
//             <p className="text-gray-600 text-xs mt-2">seconds</p>
//           </div>

//           {/* Extra message */}
//           <p className="text-gray-500 text-sm">
//             If you're not redirected, click the button below
//           </p>

//           {/* Manual redirect button */}
//           <button
//             onClick={() => router.push("/login")}
//             className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
//           >
//             Go to Login Now
//           </button>
//         </div>
//       </div>
//     )
//   }

//   // Only render children if user is authenticated
//   if (status === "authenticated" && session?.user) {
//     return children
//   }

//   // Return null while redirecting or loading
//   return null
// }
