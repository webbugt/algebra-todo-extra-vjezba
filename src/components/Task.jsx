import PropTypes from 'prop-types';
import styles from './Task.module.css';

function Task({
  title, status, changeTask, removeTask,
}) {
  return (
    <div className={styles.task}>
      <span className="title">{title}</span>
      {' '}
      <span className={styles.status}>{status}</span>
      <div className={styles.controls}>
        <button
          className={styles.complete}
          type="button"
          onClick={() => {
            changeTask({ title, status: 'done' });
          }}
        >
          C
        </button>
        <button
          className={styles['in-progress']}
          type="button"
          onClick={() => {
            changeTask({ title, status: 'in-progress' });
          }}
        >
          I
        </button>
        <button
          className={styles.delete}
          type="button"
          onClick={() => {
            removeTask({ title });
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
};

Task.propTypes = {
  ...taskPropTypes,
  removeTask: PropTypes.func,
  changeTask: PropTypes.func,
};

Task.defaultProps = {
  removeTask: undefined,
  changeTask: undefined,
};

export default Task;
