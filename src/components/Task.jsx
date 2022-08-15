import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import '../styles/Task.css'

export const Task = ({ text, completed }) => {
  return (
    <section className={completed ? 'task-container completed' : 'task-container'}>
      <p className='task-text'>
        {text}
      </p>
      <i className='task-container-icons'>
        <AiTwotoneDelete className='task-icon'/>
      </i>
    </section>
  )
}