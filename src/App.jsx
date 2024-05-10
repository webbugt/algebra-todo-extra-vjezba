import './App.css';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const taskSelector = (state) => state.tasks;
function App() {
  const tasks = useSelector(taskSelector);

  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const upcomingTasks = tasks.filter((task) => task.status === 'new');
  const finishedTasks = tasks.filter((task) => task.status === 'done');

  return (
    <>
      <h1>ToDo App</h1>
      <TaskForm />
      <h2>In-Progress:</h2>
      <TaskList tasks={inProgressTasks} />
      <h2>Upcoming:</h2>
      <TaskList tasks={upcomingTasks} />
      <h2>Done:</h2>
      <TaskList tasks={finishedTasks} />
    </>
  );
}

export default App;
