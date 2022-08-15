import React from 'react'
import '../styles/TaskForm.css'

export const TaskForm = (props) => {
  return (
    <form  className='task-form'>
      <input 
        className='task-input'
        type="text" 
        placeholder="Add a task"
        name='text'
      />
      <button className='task-button'>
        add task
      </button>
    </form>
  )
}
