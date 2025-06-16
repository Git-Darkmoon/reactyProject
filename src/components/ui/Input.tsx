export const Input = ({
  label,
  name,
  placeholder,
  type = "text",
  className,
  ...props
}: {
  label?: string
  placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name?.toLowerCase().replace(/\s+/g, "-")}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name?.toLowerCase().replace(/\s+/g, "-")}
        className={`${className} w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        aria-label="Input field"
        aria-required="true"
        required
        {...props}
      />
    </div>
  )
}
