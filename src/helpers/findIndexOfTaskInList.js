function findIndexOfTaskInList(taskList, taskToFind) {
  // create list of task titles
  const taskTitles = taskList.map((task) => task.title);
  // find index of task to delete via title
  return taskTitles.indexOf(taskToFind.title);
}

export default findIndexOfTaskInList;
