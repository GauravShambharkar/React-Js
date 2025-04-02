import { useState } from 'react'
import './App.css'
import Task from './Component/Task'


function App() {

  const [task, setTask] = useState([])

  const showData = (formdata)=>{

      setTask([...task, formdata])
  }

  const removeCard = (cardIndex)=>{
    
    setTask(task.filter((item,index)=> index !== cardIndex))

  }

  return (
    <>
      <Task task={task} setTask={setTask} showData={showData} removeCard={removeCard} /> 
    </>
  )
}

export default App
