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

  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTasks(
      (previousTasks) => {
        // create list of task titles
        const taskTitles = previousTasks
          .map((task) => task.title);
        // find index of task to delete via title
        const indexOfTaskToRemove = taskTitles
          .indexOf(taskToRemove.title);
        // if it's not found (-1) return previous state
        if (indexOfTaskToRemove === -1) {
          return previousTasks;
        }
        // create new array for mutation
        const newTaskList = [...previousTasks];
        // mutate array via splice(delete element at index)
        newTaskList.splice(indexOfTaskToRemove, 1);
        // return new state
        return newTaskList;
      },
    );
  };
  return (
    <>
      <h1>ToDo App</h1>
      <button
        type="button"
        onClick={() => {
          addTask({
            title: 'Demo task',
            status: 'new',
          });
        }}
      >
        Add demo task
      </button>
      <button
        type="button"
        onClick={() => {
          removeTask({
            title: 'Demo task',
            status: 'new',
          });
        }}
      >
        Remove Demo Task
      </button>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
