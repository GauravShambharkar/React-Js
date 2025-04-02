import React from 'react'
import { useForm } from 'react-hook-form'

const Task = ({task, setTask, showData, removeCard}) => {


  const {register, handleSubmit, reset} = useForm()

  const submit = (formdata) => {

    showData(formdata)
    reset();
    
  }

  
    
  return (

    <>
    
    <div className='main bg-black w-full h-screen m-auto p-2' >
      
      <div className="taskCard w-full h-[80%]  flex flex-wrap items-center p-10 justify-center gap-10 ">
        
      {task.map((item, index)=>{

        return <div className="card w-64 bg-blue-500 text-white rounded-3xl px-3 py-2">
          <div className="titleMain w-full bg-white p-3 flex justify-center rounded-xl  ">
          <h2 className='font-bold text-black' >{item.task}</h2>
          </div>
          <p className='font-thin text-sm mt-2' >{item.Description}</p>
          <button onClick={()=>{removeCard(index)}} className={`bg-white text-black ${"hover:bg-blue-600 transition-all"}  w-fit px-2 mt-2 flex mx-37 rounded-2xl cursor-pointer`} >Remove</button>
        </div>
        
      })}


      </div>

      <form onSubmit={handleSubmit(submit)}>
        <div className="inputContainer w-full flex flex-wrap justify-center gap-5 my-5">
          <input {...register('task')} className='bg-white text-sm rounded-sm px-1' type="text" placeholder='Today task' />
          <input {...register('Description')} className='bg-white text-sm rounded-sm  px-1' type="text" placeholder='plan' />
          <button className='bg-blue-600 text-white rounded-sm px-5 text-md cursor-pointer ' type="submit">Add</button>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default Task