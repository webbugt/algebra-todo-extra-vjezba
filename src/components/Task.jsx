import PropTypes from 'prop-types';

function Task({ title, status }) {
  return (
    <p>
      {title}
      {' '}
      -
      {' '}
      {status}
    </p>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const taskPropTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['new', 'in-progress', 'done']).isRequired,
};

Task.propTypes = taskPropTypes;

export default Task;
