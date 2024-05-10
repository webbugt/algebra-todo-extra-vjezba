import { useUIDSeed } from 'react-uid';
import PropTypes from 'prop-types';
import Task, { taskPropTypes } from './Task';

function TaskList({
  tasks,
}) {
  const seed = useUIDSeed();
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={seed(task, index)}
          title={task.title}
          status={task.status}
          id={task.id}
        />
      ))}
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(taskPropTypes),
  ).isRequired,
};

export default TaskList;
