import React, { useEffect, useRef, useState } from 'react'
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

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


  const handleDone = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)
      ))
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  },[edit])



  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (<input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos__single--text' />) : (
          todo.isDone ? (
            <s className='todos__single--text'>{todo.todo}</s>
          ) : (
            <span className='todos__single--text'>{todo.todo}</span>

          )
        )
      }


      <div>
        <span className="icon" onClick={() => {

          if (!edit && !todo.isDone) { setEdit(!edit) }
        }
        }><RiEditFill /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo