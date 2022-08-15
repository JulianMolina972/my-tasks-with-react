import React, { useState } from 'react'
import { TaskForm } from './TaskForm'
import { Task } from './Task'
import '../styles/TasksList.css'

export const TasksList = () => {

  const [tasks, setTasks] = useState([]);

  const addedTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks,];
      setTasks(updatedTasks);
      console.log(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const completedTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }
    )
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm  onSubmit={addedTask} />
      <div className='tasks-list-container'>
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completedTask={completedTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}
