import { SetTodos, Todo } from "../../pages"
import NoResults from "../NoResults/NoResults"
import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ todos, setTodos }: { todos: Todo[], setTodos: SetTodos }): JSX.Element => {

  if (!todos?.length) {
    return (
      <NoResults />
    )
  }

  const deleteTodo = (todoId: string): void => {
    // remove the todo from the array
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  const toggleComplete = (todoId: string): void => {
    // find the todo in the array
    // set the completed property to the opposite of what it is

    // find and update item by id
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const updateTodo = (todoId: string, updatedTodo: { title: string, category: string }): void => {
    // find the todo in the array
    // update the todo with the new values

    // find the todo in the array
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          ...updatedTodo
        }
      }
      return todo
    }))
  }

  return (
    <div className='flex flex-col space-y-8'>
      {todos?.map(todo => <TodoItem key={todo?.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo} />)}
    </div>
  )
}

export default TodoList