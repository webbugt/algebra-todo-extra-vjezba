function findIndexOfTaskInList(taskList, taskToFind) {
  // create list of task titles
  const taskIds = taskList.map((task) => task.id);
  // find index of task to delete via title
  return taskIds.indexOf(taskToFind.id);
}

export default findIndexOfTaskInList;
