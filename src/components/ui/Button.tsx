import type { PropsWithChildren } from "react"

export const Button = ({
  actionType,
  type,
  onClick,
  className = "",
  children,
}: {
  className?: string
  actionType: "primary" | "secondary" | "danger"
  type?: "button" | "submit" | "reset"
  onClick?: () => void
} & PropsWithChildren) => {
  const baseClasses =
    "px-4 py-2 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 cursor-pointer focus:ring-opacity-50"

  const actionTypeClasses = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-500",
  }

  return (
    <button
      className={`${baseClasses} ${actionTypeClasses[actionType]} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
