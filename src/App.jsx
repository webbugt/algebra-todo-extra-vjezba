import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

// "new" | "in-progress" | "done"
const initialTasks = [
  {
    title: 'Feed cats',
    status: 'new',
  },
  {
    title: 'Clean house',
    status: 'new',
  },
  {
    title: 'Create ToDo app',
    status: 'in-progress',
  },
  {
    title: 'Eat Lunch',
    status: 'done',
  },
];

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <h1>ToDo App</h1>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
