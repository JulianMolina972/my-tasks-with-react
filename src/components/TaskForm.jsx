import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../styles/TaskForm.css'

export const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
  };

  return (
    <form 
      className='task-form'
      onSubmit={handleSend}
    >
      <input 
        className='task-input'
        type="text" 
        placeholder="Add a task"
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        add task
      </button>
    </form>
  )
}
