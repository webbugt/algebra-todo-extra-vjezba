import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './TaskForm.module.css';
import { addTask } from '../store/taskSlice';

function TaskForm() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onCompleteHandler = () => {
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    const inputValue = inputElement.value;
    if (!inputValue) {
      return;
    }
    dispatch(addTask(inputValue));
    inputElement.value = '';
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} id="main-input" ref={inputRef} title="Task input" type="text" />
      <button type="button" onClick={onCompleteHandler}>Add task</button>
    </div>
  );
}

export default TaskForm;
