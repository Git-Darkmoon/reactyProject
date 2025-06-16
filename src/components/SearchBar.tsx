import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

export const SearchBar = ({
  submitHandler,
  label,
  inputName,
  btnLabel,
  placeholder,
}: {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void
  label?: string
  inputName: string
  btnLabel: string
  placeholder: string
}) => {
  return (
    <form
      onSubmit={submitHandler}
      className="w-full flex items-center justify-center gap-2"
    >
      <Input
        type="search"
        label={label}
        autoFocus
        name={inputName}
        placeholder={placeholder}
        className="w-full"
      />
      <Button actionType="primary" type="submit">
        {btnLabel}
      </Button>
    </form>
  )
}
