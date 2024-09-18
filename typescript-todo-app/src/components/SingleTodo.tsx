import React from 'react'
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from '../model';
import "./style.css"

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id!== id))
  }

  return (
    <form className='todos__single'>
      {
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ) : (
          <span className='todos__single--text'>{todo.todo}</span>

        )
      }

      <div>
        <span className="icon"><RiEditFill /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo