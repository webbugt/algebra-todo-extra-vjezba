import PropTypes from 'prop-types';

function Task({ title, status }) {
  return (
    <div className="task">
      <span className="title">{title}</span>
      {' '}
      <span className="status">{status}</span>
      <div className="controls">
        <button className="complete-button" type="button">C</button>
        <button className="in-progress-button" type="button">I</button>
        <button className="delete-button" type="button">X</button>
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
