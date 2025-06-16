import { useState } from "react"
import { Button } from "../ui/Button"

export const ToDoItem = ({
  title,
  onRemove,
  isCompleted,
}: {
  title: string
  onRemove: () => void
  isCompleted: boolean
}) => {
  const [isChecked, setIsChecked] = useState(isCompleted)

  return (
    <li className="flex items-center justify-between">
      <input
        type="checkbox"
        name={title}
        id={title}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={title}
        className={isChecked ? "line-through text-gray-500" : ""}
      >
        {title}
      </label>
      <Button actionType="danger" type="button" onClick={onRemove}>
        Remove
      </Button>
    </li>
  )
}
