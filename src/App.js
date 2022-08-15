import { TasksList } from './components/TasksList';
import './App.css';



function App() {
  return (
    <div className='application-tasks'>
      <header className='header'>
        <h1>Tasks</h1>
      </header>
      <main className='principal-list-tasks'>
        <h2>My Tasks</h2>
        <TasksList />
      </main>
    </div>
  );
}

export default App;
