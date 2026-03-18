export default function AuthCard({ title, children, footer }) {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-xl shadow-md p-8 bg-gray-50">

      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        {title}
      </h2>

      {children}

      {footer && (
        <div className="text-sm text-gray-600 text-center mt-4">
          {footer}
        </div>
      )}

    </div>
  )
}