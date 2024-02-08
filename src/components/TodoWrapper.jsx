import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from "uuid"
import { Todo } from './Todo'
import { EditToDoForm } from './EditTodoForm'
import moment from 'moment'
import { TodoFilter } from './TodoFilter'
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [errorMessageEditForm, setErrorMessageEditForm] = useState('')

    const addTodo = (todo) => {
        try {
            if (!todo) throw Object.assign(new Error(), {message: "заполните поле ввода"});
            setTodos([...todos, {
            id: uuidv4(), 
            task: todo, 
            isEditing: false, 
            status: null,
            styleStatus: "active",
            date: moment().format('DD.MM.YYYY hh:mm:ss')}])
            setErrorMessage('')    
        }
        catch (error) {
            setErrorMessage(error.message)
        }
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        try{
            if (!task) throw Object.assign(new Error(), {message: "заполните поле ввода"});
            setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo)) 
            setErrorMessageEditForm('') 
        } 
        catch (error){
            setErrorMessageEditForm(error.message)
        }
    }

    const editTaskStatus = (id, selectedStatus) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, status: selectedStatus} : todo))
    }
    
  return (
    <div className='todo-wrapper'>
        <TodoForm addTodo={addTodo} error={errorMessage}/>   
        {todos.length === 0 ? <p className='no-tasks'>Нет заданий</p> :
            <div className='todos-container'>
                <div className='todos-quantity'>Количество заданий: {todos.length}</div>
                {todos.length > 1 && <TodoFilter todos={todos} setTodos={setTodos}/>} 
                {todos.map((todo, index) => 
                todo.isEditing ? <EditToDoForm key={index} editTask={editTask} task={todo} error={errorMessageEditForm}/> :
                <Todo task={todo} key={index} index={index+1} deleteTodo={deleteTodo} editTodo={editTodo} editTaskStatus={editTaskStatus}/>)}
            </div>
        }
    </div>
  )
}
