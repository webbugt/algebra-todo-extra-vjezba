import { createSlice } from '@reduxjs/toolkit';
import findIndexOfTaskInList from '../helpers/findIndexOfTaskInList';

const initialState = [
  {
    id: 0,
    title: 'Feed cats',
    status: 'new',
  },
  {
    id: 1,
    title: 'Clean house',
    status: 'done',
  },
  {
    id: 2,
    title: 'Create ToDo app',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Eat Lunch',
    status: 'done',
  },
  {
    id: 4,
    title: 'Implementiraj Redux',
    status: 'in-progress',
  },
];

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (previousTasks, action) => {
      const newTask = action.payload;
      const sortedTaskIds = previousTasks
        .map((task) => task.id).sort((a, b) => b - a);

      const largestId = sortedTaskIds[0] || 0;

      const newTaskWithId = {
        ...newTask,
        id: largestId + 1,
      };

      return [...previousTasks, newTaskWithId];
    },
    removeTask: (previousTasks, action) => {
      const taskToRemove = action.payload;
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
    changeTask: (previousTasks, action) => {
      const taskToChange = action.payload;
      const indexToChange = findIndexOfTaskInList(previousTasks, taskToChange);
      // if it's not found (-1) return previous state
      if (indexToChange === -1) {
        return previousTasks;
      }
      // create new array for mutation
      const newTaskList = [...previousTasks];
      newTaskList[indexToChange] = taskToChange;
      return newTaskList;
    },
  },
});

export default taskSlice.reducer;
