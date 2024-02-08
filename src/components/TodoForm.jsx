import React from 'react'
import { useState } from 'react'

export const TodoForm = ({addTodo, error}) => {
    const [todo, setTodo] = useState('')
 
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo('')    
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
         <input type='text' placeholder='Введите название задания' className="todo-form__input" value={todo} onChange={e => setTodo(e.target.value)}/> 
         <button type='submit' className='todo-form__btn'>Добавить</button>
         <div className='error-message'>{error}</div>
    </form>
  )
}
