import PropTypes from 'prop-types'


const Task = ({ title, status }) => {
    return <p>{title} - {status}</p>
}

Task.propTypes = {
    title: PropTypes.string,
    status: PropTypes.oneOf(["new","in-progress","done"])
}

export default Task