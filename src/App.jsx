import { useState } from 'react'
import './App.css'
import { useUIDSeed } from 'react-uid'

// "new" | "in-progress" | "done"
const initialTasks = [
  {
    title: "Feed cats",
    status: "new"
  },
  {
    title: "Clean house",
    status: "new"
  },
  {
    title: "Create ToDo app",
    status: "in-progress"
  },
  {
    title: "Eat Lunch",
    status: "done"
  }
]

function App() {
  const [tasks,setTasks] = useState(initialTasks)
  const seed = useUIDSeed()
  return (
    <>
      <h1>ToDo App</h1>
      {tasks.map((task,index)=>{
        return <p key={seed(task,index)} id={seed(task,index)}>{task.title} - {task.status}</p>
      })}
    </>
  )
}

export default App
