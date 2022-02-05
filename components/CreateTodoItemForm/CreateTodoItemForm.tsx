
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input } from '..';
import { SetTodos } from '../../pages';

const CreateTodoItemForm = ({ createTodoItem }: { createTodoItem: SetTodos }): JSX.Element => {
  const randomId = uuidv4();

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // prevent browser from refreshing the page
    event.preventDefault();

    // take any of the previous todos and add the new one to the end
    createTodoItem((prevTodos) => [
      ...prevTodos,
      {
        title,
        id: randomId,
        completed: false,
        category: category
      }
    ]);

    // reset the form
    setTitle("")
    setCategory("")
  }

  return (
    <>
      <h1 className="text-center text-xl">Create Some Todos</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="title">Title</label>
        <Input type="text" id="title" value={title} onChange={(e) => setTitle(() => e.target.value)} />
        <label htmlFor="category">Category</label>
        <Input type="text" value={category} onChange={(e) => setCategory(() => e.target.value)} />
        <Button type="submit">Create</Button>
      </form>
    </>
  )
}

export default CreateTodoItemForm