import { useState } from "react"
import { Button } from ".."
import UpdateTodoItemForm from "../UpdateTodoItemForm/UpdateTodoItemForm"

interface TodoActionProps {
  toggleComplete: (todoId: string) => void
  updateTodo: (todoId: string, updatedTodo: { title: string, category: string }) => void
  deleteTodo: (todoId: string) => void
  todoId: string
}

const TodoActions = ({ toggleComplete, deleteTodo, todoId, updateTodo }: TodoActionProps): JSX.Element => {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  return (
    <>
      <div className="flex space-x-4 items-center">
        <Button className="rounded-sm px-4 py-1 bg-green-100" onClick={() => toggleComplete(todoId)}>Complete</Button>
        <Button className="bg-red-500 rounded-sm text-white px-4 py-1" onClick={() => deleteTodo(todoId)}>X</Button>
        <Button className="rounded-sm px-4 py-1 bg-indigo-100" onClick={() => setShowUpdateForm(!showUpdateForm)}>{showUpdateForm ? 'Done' : 'Edit'}</Button>
      </div>
      {showUpdateForm && <UpdateTodoItemForm todoId={todoId} updateTodo={updateTodo} />}
    </>
  )
}

export default TodoActions