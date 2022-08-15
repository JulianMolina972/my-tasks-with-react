import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import '../styles/Task.css'

export const Task = ({ id, text, completed, completedTask, deleteTask }) => {
  return (
    <section className={completed ? 'task-container completed' : 'task-container'}>
      <p 
        className='task-text'
        onClick={() => completedTask(id)}
      >
        {text}
      </p>
      <i 
        className='task-container-icons'
        onClick={() => deleteTask(id)}  
      >
        <AiTwotoneDelete className='task-icon'/>
      </i>
    </section>
  )
}