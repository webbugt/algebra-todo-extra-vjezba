import { useUIDSeed } from 'react-uid';
import PropTypes from 'prop-types';
import Task, { taskPropTypes } from './Task';

function TaskList({
  tasks,
  removeTask,
  changeTask,
}) {
  const seed = useUIDSeed();
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={seed(task, index)}
          title={task.title}
          status={task.status}
          removeTask={removeTask}
          changeTask={changeTask}
        />
      ))}
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(taskPropTypes),
  ).isRequired,
  removeTask: PropTypes.func,
  changeTask: PropTypes.func,
};

TaskList.defaultProps = {
  removeTask: undefined,
  changeTask: undefined,
};

export default TaskList;
