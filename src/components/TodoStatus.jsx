import React, {useEffect, useState, useCallback} from 'react'

export const TodoStatus = ({editTaskStatus, task}) => {
    const [selectedStatus, setSelectedStatus] = useState('start'); 

    const changeTaskStatus = useCallback(() => {
      editTaskStatus(task.id, selectedStatus)
    }, [selectedStatus])

    useEffect(() => {
      changeTaskStatus()
    }, [changeTaskStatus]);

  return (
          <select name="status" className={`todo-select ${task.status}`} value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}> 
            <option hidden className='todo-select__option'>Статус</option>
            <option value="not-started" className='todo-select__option'>Не начато</option>
            <option value="at-work" className='todo-select__option'>В работе</option>
            <option value="done" className='todo-select__option'>Завершено</option>
        </select>
  )
}
