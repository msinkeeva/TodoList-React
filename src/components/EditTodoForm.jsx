import React from 'react'
import { useState } from 'react'

export const EditToDoForm = ({editTask, task, error}) => {
    const [todo, setTodo] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(todo, task.id)
        setTodo('')
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
         <input type='text' className="todo-form__input todo-form__input-edit" value={todo}  onChange={e => setTodo(e.target.value)}/> 
         <button type='submit' className='todo-form__btn'>Изменить</button>
         <div className='error-message'>{error}</div>
    </form>
  )
}
