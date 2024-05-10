import PropTypes from 'prop-types';

function TaskForm({ onComplete }) {
  return (
    <div>
      <input title="Task input" type="text" />
      <button type="button">Add task</button>
    </div>
  );
}

TaskForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default TaskForm;
