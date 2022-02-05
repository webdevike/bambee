import { Todo } from "../../pages"
import TodoActions from "../TodoActions/TodoActions"

interface TodoItemProps {
  toggleComplete: (todoId: string) => void
  updateTodo: (todoId: string, updatedTodo: { title: string, category: string }) => void
  deleteTodo: (todoId: string) => void
  todo: Todo
}

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }: TodoItemProps): JSX.Element => {
  return (
    <div className='flex flex-col sm:flex-row justify-between relative rounded-sm p-4 shadow-sm  bg-gray-100'>
      <div className="flex space-x-4 items-center">
        <p className={todo?.completed ? 'line-through' : ""}>{todo?.title}</p>
        <div className="bg-green-200 rounded-md p-2">
          <p>{todo?.category}</p>
        </div>
      </div>

      <TodoActions todoId={todo?.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoItem
