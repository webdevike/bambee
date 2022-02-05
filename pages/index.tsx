import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Button, Input } from '../components';
import CreateTodoItemForm from '../components/CreateTodoItemForm/CreateTodoItemForm';
import TodoList from '../components/TodoList/TodoList';
import useUser from '../hooks/use-user';

export type Todo = {
  id: string,
  title: string,
  completed: boolean
  category?: string
}

export type SetTodos = React.Dispatch<React.SetStateAction<Todo[]>>


const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [todos, setTodos] = useState<Todo[]>([]);

  const { user } = useUser()


  if (!user) {
    return <div>You must be logged in to view this page</div>
  }

 

  // filter todos by search term
  const filteredTodos = searchTerm ? todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()) || todo?.category?.toLowerCase().includes(searchTerm.toLowerCase())) : todos;


  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Input type="text" id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(() => e.target.value)} placeholder={!todos?.length ? 'Add Todos Search' : 'Search by todo tile or category'} disabled={!todos?.length} />
      {/* <Button onClick={setShowForm(!showForm)}>Add Todo</Button> */}

      <div className="shadow-lg p-4 max-w-4xl rounded-md mx-auto">
        <CreateTodoItemForm createTodoItem={setTodos} />
      </div>
      <div className='py-8'>
        <TodoList todos={filteredTodos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default Home
