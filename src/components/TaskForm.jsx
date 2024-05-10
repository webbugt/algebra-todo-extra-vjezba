import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './TaskForm.module.css';

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
    <div className={styles.container}>
      <input className={styles.input} id="main-input" ref={inputRef} title="Task input" type="text" />
      <button type="button" onClick={onCompleteHandler}>Add task</button>
    </div>
  );
}

TaskForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default TaskForm;
