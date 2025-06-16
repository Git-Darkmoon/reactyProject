import { useState } from "react"

const data = [
  {
    id: 1,
    title: "Some Tab",
    content:
      "Content for Tab 1, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Another Tab",
    content:
      "Content for Tab 2, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Just a Tab",
    content:
      "Content for Tab 3, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <section className="flex flex-col my-12 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center py-4">
        Tabs Component
      </h2>
      <p className="text-center text-gray-500">
        This is a placeholder for the Tabs component.
      </p>
      <div className="flex items-center justify-center space-x-4 py-5 border-b pb-2 border-gray-400">
        {data.map((item) => {
          const { id, title } = item
          const baseStyles =
            "px-4 py-2 rounded-md cursor-pointer transition-colors duration-200"

          return (
            <button
              key={id}
              onClick={() => handleTabClick(id)}
              className={`${baseStyles} ${
                activeTab === id ? "bg-blue-500 text-white" : ""
              }`}
            >
              {title}
            </button>
          )
        })}
      </div>

      <div className="py-4">
        <p className="text-gray-700">
          {data.find((item) => item.id === activeTab)?.content}
        </p>
      </div>
    </section>
  )
}
