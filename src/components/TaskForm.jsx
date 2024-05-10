import PropTypes from 'prop-types';

import { useRef } from 'react';

function TaskForm({ onComplete }) {
  const inputRef = useRef(null);

  const onCompleteHandler = () => {
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    const inputValue = inputElement.value;
    if (!inputValue) {
      return;
    }
    onComplete(inputValue);
    inputElement.value = '';
  };

  return (
    <div>
      <input id="main-input" ref={inputRef} title="Task input" type="text" />
      <button type="button" onClick={onCompleteHandler}>Add task</button>
    </div>
  );
}

TaskForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default TaskForm;
