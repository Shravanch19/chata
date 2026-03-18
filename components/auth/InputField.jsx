export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <div className="flex flex-col gap-1">

      <label
        htmlFor={name}
        className="text-sm text-gray-600"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
      />

    </div>
  )
}