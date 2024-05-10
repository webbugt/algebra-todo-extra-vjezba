import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import findIndexOfTaskInList from './helpers/findIndexOfTaskInList';
import TaskForm from './components/TaskForm';

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
        const indexOfTaskToRemove = findIndexOfTaskInList(previousTasks, taskToRemove);
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

  const changeTask = (newTask) => {
    setTasks((previousTasks) => {
      const indexToChange = findIndexOfTaskInList(previousTasks, newTask);
      // if it's not found (-1) return previous state
      if (indexToChange === -1) {
        return previousTasks;
      }
      // create new array for mutation
      const newTaskList = [...previousTasks];
      newTaskList[indexToChange] = newTask;
      return newTaskList;
    });
  };

  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const upcomingTasks = tasks.filter((task) => task.status === 'new');
  const finishedTasks = tasks.filter((task) => task.status === 'done');

  return (
    <>
      <h1>ToDo App</h1>
      <TaskForm onComplete={(newTaskTitle) => {
        addTask({
          title: newTaskTitle,
          status: 'new',
        });
      }}
      />
      <h2>In-Progress:</h2>
      <TaskList
        tasks={inProgressTasks}
        removeTask={removeTask}
        changeTask={changeTask}
      />
      <h2>Upcoming:</h2>
      <TaskList
        tasks={upcomingTasks}
        removeTask={removeTask}
        changeTask={changeTask}
      />
      <h2>Done:</h2>
      <TaskList
        tasks={finishedTasks}
        removeTask={removeTask}
        changeTask={changeTask}
      />
    </>
  );
}

export default App;
