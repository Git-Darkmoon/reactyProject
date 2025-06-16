import { useEffect, useState } from "react"
import { SearchBar } from "./components/SearchBar"
import { ToDoList } from "./components/ToDoList/ToDoList"
import { toast } from "sonner"
import type { ComponentQuery } from "./utils/types"
import { Tabs } from "./components/Tabs/Tabs"

export const App = () => {
  const [query, setQuery] = useState<ComponentQuery>("")

  const handleComponentSearch = (event: React.FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const inputSearch = new FormData(form).get("componentSearched") as string
    const sanitizedInput = inputSearch.trim().toLowerCase()

    if (sanitizedInput) {
      setQuery(sanitizedInput as ComponentQuery)
      const searchParams = new URLSearchParams()
      searchParams.set("component", sanitizedInput)
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`
      window.history.pushState({}, "", newUrl)
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const componentSearched = urlParams.get("component")
    if (
      componentSearched !== "todolist" &&
      componentSearched !== "tabs" &&
      componentSearched
    ) {
      toast.error("Component not found")
      return
    }
    setQuery(componentSearched as ComponentQuery)
  }, [query])

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Component Search</h1>
      <SearchBar
        submitHandler={handleComponentSearch}
        inputName="componentSearched"
        placeholder="Search your component..."
        btnLabel="Search"
      />
      {query === "todolist" && <ToDoList />}
      {query === "tabs" && <Tabs />}
    </main>
  )
}
