import { useUIDSeed } from "react-uid"
import PropTypes from 'prop-types'


const TaskList = ({
    tasks
}) => {
    const seed  = useUIDSeed()
    return <>
        {tasks.map((task,index)=>{
            return <p key={seed(task,index)} id={seed(task,index)}> {task.title} - {task.status}</p>
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