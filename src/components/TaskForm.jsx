import PropTypes from 'prop-types';

import { useRef } from 'react';

function TaskForm({ onComplete }) {
  const inputRef = useRef(null);

  return (
    <div>
      <input id="main-input" ref={inputRef} title="Task input" type="text" />
      <button type="button">Add task</button>
    </div>
  );
}

TaskForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default TaskForm;
