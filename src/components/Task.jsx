import PropTypes from 'prop-types';
import styles from './Task.module.css';

function Task({
  title, status, changeTask, removeTask, id,
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
            changeTask({ title, status: 'done', id });
          }}
        >
          C
        </button>
        <button
          className={styles['in-progress']}
          type="button"
          onClick={() => {
            changeTask({ title, status: 'in-progress', id });
          }}
        >
          I
        </button>
        <button
          className={styles.delete}
          type="button"
          onClick={() => {
            removeTask({ title, id });
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
  removeTask: PropTypes.func,
  changeTask: PropTypes.func,
};

Task.defaultProps = {
  removeTask: undefined,
  changeTask: undefined,
};

export default Task;
