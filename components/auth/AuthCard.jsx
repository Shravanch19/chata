export function AuthCard({ title, children, footer }) {
  return (
    <div className="w-full bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 p-8">

      <h2 className="text-2xl font-semibold text-white text-center mb-8 tracking-tight">
        {title}
      </h2>

      <div className="space-y-6">
        {children}
      </div>

      {footer && (
        <div className="text-sm text-gray-400 text-center mt-8">
          {footer}
        </div>
      )}

    </div>
  )
}