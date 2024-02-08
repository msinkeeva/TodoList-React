import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoStatus } from './TodoStatus'

export const Todo = ({task, deleteTodo, editTodo, index, editTaskStatus}) => {
  return (
    <div className={`todo appearance-animation ${task.status} ${task.styleStatus}`}>
      <div className='todo-info'>
       <div>{index}</div>
        <p className="todo-info__text">{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare' onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} className='faTrash' onClick={() => deleteTodo(task.id)}/>
            <TodoStatus task={task} editTaskStatus={editTaskStatus}/>
        </div>  
      </div>
      <div className='todo-date'>Добавлено {task.date}</div>
    </div>
  )
}
