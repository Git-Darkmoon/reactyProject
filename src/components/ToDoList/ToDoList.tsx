import { useState } from "react"
import { todos } from "../../utils/todos"
import { SearchBar } from "../SearchBar"
import { ToDoItem } from "./ToDoItem"
import { toast } from "sonner"

export const ToDoList = () => {
  const [tasks, setTasks] = useState(todos)
  const hasTasks = tasks.length > 0

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const newTaskTitle = new FormData(form).get("newTaskTitle") as string

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      isCompleted: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    toast.success("Task added successfully")

    form.reset()
  }

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasks.filter((eachTask) => eachTask.id !== id)
    setTasks(updatedTasks)

    toast.success("Task removed successfully")
  }

  return (
    <section className="flex flex-col my-12 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center py-4">ToDo List</h2>
      <SearchBar
        submitHandler={handleAddTask}
        inputName="newTaskTitle"
        placeholder="Track your tasks..."
        btnLabel="Add"
      />

      <ul className="space-y-4 mt-4">
        {hasTasks ? (
          tasks.map((eachTodo) => {
            const { id, title, isCompleted } = eachTodo
            return (
              <ToDoItem
                key={id}
                title={title}
                onRemove={() => handleRemoveTask(id)}
                isCompleted={isCompleted}
              />
            )
          })
        ) : (
          <li className="text-center text-gray-500">No tasks added</li>
        )}
      </ul>
    </section>
  )
}
