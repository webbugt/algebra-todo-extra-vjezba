import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Task.module.css';
import { changeTask, removeTask } from '../store/taskSlice';

function Task({
  title, status, id,
}) {
  const dispatch = useDispatch();

  const changeHandler = (taskToChange) => {
    dispatch(changeTask(taskToChange));
  };
  const removeHandler = (taskToRemove) => {
    dispatch(removeTask(taskToRemove));
  };

  return (
    <div className={styles.task}>
      <span className="title">{title}</span>
      {' '}
      <span className={styles.status}>{status}</span>
      <div className={styles.controls}>
        {/* Done button */}
        {status !== 'done' && (
        <button
          className={styles.complete}
          type="button"
          title="Set task as done"
          onClick={() => {
            changeHandler({ title, status: 'done', id });
          }}
        >
          C
        </button>
        )}
        {/* Reset button */}
        {status === 'done' && (
        <button
          className={styles.reset}
          type="button"
          title="Reset task"
          onClick={() => {
            changeHandler({ title, status: 'new', id });
          }}
        >
          R
        </button>
        )}
        {/* In progress button */}
        {status !== 'in-progress' && (
        <button
          className={styles['in-progress']}
          type="button"
          title="Set task in progress"
          onClick={() => {
            changeHandler({ title, status: 'in-progress', id });
          }}
        >
          I
        </button>
        )}
        {/* Delete button */}
        <button
          className={styles.delete}
          type="button"
          title="Remove task"
          onClick={() => {
            removeHandler({ title, id });
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const taskPropTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['new', 'in-progress', 'done']).isRequired,
  id: PropTypes.number.isRequired,
};

Task.propTypes = {
  ...taskPropTypes,
};

export default Task;
