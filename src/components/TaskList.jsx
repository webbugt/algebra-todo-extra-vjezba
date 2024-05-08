import { useUIDSeed } from "react-uid"
import PropTypes from 'prop-types'
import Task from "./Task"


const TaskList = ({
    tasks
}) => {
    const seed  = useUIDSeed()
    return <>
        {tasks.map((task,index)=>{
            return <Task key={seed(task,index)} title={task.title} status={task.status} />
        })}
    </>
}

const taskPropTypes = PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.oneOf(["new","in-progress","done"])
})

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(taskPropTypes).isRequired
}



export default TaskList