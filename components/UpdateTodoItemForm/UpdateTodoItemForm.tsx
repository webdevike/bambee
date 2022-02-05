import { useState } from 'react';
import { Button, Input } from '..';

const UpdateTodoItemForm = ({ todoId, updateTodo }: { todoId: string, updateTodo: (todoId: string, updatedTodo: { title: string, category: string }) => void }): JSX.Element => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // prevent browser from refreshing the page
    event.preventDefault();
    updateTodo(todoId, {
      title,
      category
    })

    // reset the form
    setTitle("")
    setCategory("")

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="absolute right-0 top-16 bg-white shadow-md p-4">
        <label htmlFor="title">Title</label>
        <Input type="text" id="title" value={title} onChange={(e) => setTitle(() => e.target.value)} />
        <label htmlFor="category">Category</label>
        <Input type="text" id="category" value={category} onChange={(e) => setCategory(() => e.target.value)} />
        <Button type="submit">Update</Button>
      </form>
    </>
  )
}

export default UpdateTodoItemForm
