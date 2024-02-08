import React, {useState} from 'react'

export const TodoFilter = ({todos, setTodos}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenName, setIsOpenName] = useState(false)
    const [isOpenDate, setIsOpenDate] = useState(false)
    const [isOpenStatus, setIsOpenStatus] = useState(false)
    const [sortBtnClassName, setSortBtnClassName] = useState(false)
    const [nameBtnClassName, setNameBtnClassName] = useState(false)
    const [dateBtnClassName, setDateBtnClassName] = useState(false)
    const [statusBtnClassName, setStatusBtnClassName] = useState(false)

    const sortTodoNameUp = () => {
        setTodos([...todos].sort((a,b) => a.task.localeCompare(b.task)))
    }
    const sortTodoNameDown = () => {
        setTodos([...todos].sort((a,b) => b.task.localeCompare(a.task)))
    }

    const sortTodoDateUp = () => {
        setTodos([...todos].sort((a,b) => a.date.localeCompare(b.date)))
    }
    const sortTodoDateDown = () => {
        setTodos([...todos].sort((a,b) => b.date.localeCompare(a.date)))
    }

    const filterStatusWork = () => {
        setTodos([...todos].map(todo => todo.status !== "at-work" ? {
            ...todo, styleStatus: "not-active"} : {...todo, styleStatus: "active"}) )
    }
    const filterStatusDone = () => {
        setTodos([...todos].map(todo => todo.status !== "done" ? {
            ...todo, styleStatus: "not-active"} : {...todo, styleStatus: "active"}))     
    }
    const filterStatusNotStart = () => {
        setTodos([...todos].map(todo => todo.status !== "not-started" ? {
            ...todo, styleStatus: "not-active"} : {...todo, styleStatus: "active"}))
    }
    const filterStatusShowAll = () => {
        setTodos(todos.map((todo) => ({
            ...todo,
            styleStatus: "active"
        })))
    }

    const sortBtn = () => {
        setIsOpen(!isOpen)
        setSortBtnClassName(!sortBtnClassName)
    }
    const sortNameBtn = () => {
        setIsOpenName(!isOpenName)
        setNameBtnClassName(!nameBtnClassName)
    }
    const sortDateBtn = () => {
      setIsOpenDate(!isOpenDate)  
      setDateBtnClassName(!dateBtnClassName)
    }
    const sortStatusBtn = () => {
        setIsOpenStatus(!isOpenStatus)
        setStatusBtnClassName(!statusBtnClassName)
    }
  return (
    <div className='todo-filter'>
         <button className={`todo-filter__sort-btn ${sortBtnClassName && "todo-filter__sort-btn-active"}`} onClick={sortBtn}>Сортировать</button>
         <div className={`todo-filter__container ${isOpen ? 'active' : 'not-active'}`} >
            <div className='todo-filter__item'>
                <button className={`todo-filter__item-btn ${nameBtnClassName && "todo-filter__item-btn-active"}`} onClick={sortNameBtn}>по алфавиту</button> 
                <ul className={`todo-filter__item-list ${isOpenName && "visible"}`}>
                    <li className='todo-filter__item-li' onClick={sortTodoNameUp}>А-Я</li>
                    <li className='todo-filter__item-li'onClick={sortTodoNameDown}>Я-А</li>      
                </ul>
            </div>
  <         div className='todo-filter__item'>
                <button className={`todo-filter__item-btn ${dateBtnClassName ? "todo-filter__item-btn-active" : ''}`} onClick={sortDateBtn}>по дате</button>
                <ul className={`todo-filter__item-list ${isOpenDate && "visible"}`}>
                    <li className='todo-filter__item-li' onClick={sortTodoDateDown}>сначала новые</li>
                    <li className='todo-filter__item-li' onClick={sortTodoDateUp}>сначала старые</li>    
                </ul>
            </div>
            <div className='todo-filter__item'>
                <button className={`todo-filter__item-btn ${statusBtnClassName ? "todo-filter__item-btn-active" : ''}`} onClick={sortStatusBtn}>по статусу</button>
                <ul className={`todo-filter__item-list ${isOpenStatus && "visible"}`}>
                    <li className='todo-filter__item-li' onClick={filterStatusShowAll}>все</li>
                    <li className='todo-filter__item-li' onClick={filterStatusDone}>завершено</li>
                    <li className='todo-filter__item-li' onClick={filterStatusNotStart}>не начато</li>
                    <li className='todo-filter__item-li' onClick={filterStatusWork}>в работе</li>
                </ul>
            </div>  
         </div>
    </div>
  )
}
