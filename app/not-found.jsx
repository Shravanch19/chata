import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="text-center bg-white p-10 rounded-xl shadow-md border border-gray-200 max-w-md">

        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  )
}