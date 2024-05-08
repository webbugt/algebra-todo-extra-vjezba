import PropTypes from 'prop-types';
import styles from './Task.module.css';

function Task({ title, status }) {
  return (
    <div className={styles.task}>
      <span className="title">{title}</span>
      {' '}
      <span className={styles.status}>{status}</span>
      <div className={styles.controls}>
        <button className={styles.complete} type="button">C</button>
        <button className={styles['in-progress']} type="button">I</button>
        <button className={styles.delete} type="button">X</button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const taskPropTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['new', 'in-progress', 'done']).isRequired,
};

Task.propTypes = taskPropTypes;

export default Task;
