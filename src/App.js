import { Task } from './components/Task';
import './App.css';
import { TaskForm } from './components/TaskForm';



function App() {
  return (
    <div className='application-tasks'>
      <header className='header'>
        <h1>Tasks</h1>
      </header>
      <main className='principal-list-tasks'>
        <h2>My Tasks</h2>
        <TaskForm />
        {/* <Task text='learning React' /> */}
      </main>
    </div>
  );
}

export default App;
