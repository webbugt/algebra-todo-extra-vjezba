import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './Task.module.css';
import { changeTask, removeTask } from '../store/taskSlice';

const variants = {
  done: {
    title: 'Set task as done',
    content: 'D',
    className: styles.complete,
  },
  reset: {
    title: 'Reset task',
    content: 'R',
    className: styles.reset,
  },
  'in-progress': {
    title: 'Set task in progress',
    content: 'I',
    className: styles['in-progress'],
  },
  remove: {
    title: 'Remove task',
    content: 'X',
    className: styles.remove,
  },
};

function TaskButton({ variant, onClick }) {
  const currentVariant = variants[variant];
  if (!currentVariant) {
    throw new Error(`Couldn't find variant name ${variant}`);
  }
  const { className, content, title } = currentVariant;
  return (
    <button
      className={className}
      type="button"
      title={title}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

TaskButton.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)).isRequired,
  onClick: PropTypes.func.isRequired,
};

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
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.task}>
        <span className="title">{title}</span>
        {' '}
        <span className={styles.status}>{status}</span>
        <div className={styles.controls}>
          {status !== 'done' && (
          <TaskButton
            variant="done"
            onClick={() => {
              changeHandler({ title, status: 'done', id });
            }}
          />
          )}
          {status !== 'new' && (
          <TaskButton
            variant="reset"
            onClick={() => {
              changeHandler({ title, status: 'new', id });
            }}
          />
          )}
          {status !== 'in-progress' && (
          <TaskButton
            variant="in-progress"
            onClick={() => {
              changeHandler({ title, status: 'in-progress', id });
            }}
          />
          )}
          <TaskButton
            variant="remove"
            onClick={() => {
              removeHandler({ title, id });
            }}
          />
        </div>
      </div>
    </ErrorBoundary>
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
