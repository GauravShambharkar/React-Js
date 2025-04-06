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
    
    <div className='main  bg-white w-full h-screen m-auto p-2' >
      
      <div className="taskCard w-full h-[80%]  flex flex-wrap items-center p-10 justify-center gap-3 ">
        
      {task.map((item, index)=>{

        return <div className="card w-64 bg-[#8080801b] border-1 rounded-3xl px-3 py-2">
          <div className="titleMain w-full bg-black text-white p-3 flex justify-center rounded-xl  ">
          <h2 className='font-bold text-white' >{item.task}</h2>
          </div>
          <p className='font-thin text-[#424242] text-sm mt-2' >{item.Description}</p>
          <button onClick={()=>removeCard(index)} className="bg-black text-white hover:bg-white hover:text-black transition-all duration-300 w-fit px-2 mt-2 flex mx-37 rounded-lg cursor-pointer">Remove</button>
        </div>
        
      })}


      </div>
<div className='flex fixed bottom-0 py-5 justify-center w-full '>
      <form onSubmit={handleSubmit(submit)} className='w-fit shadow-2xl shadow-black bg-[#e0e0e06e] backdrop-blur-lg rounded-md px-10 ' >
        <div className="inputContainer w-full flex flex-wrap justify-center gap-5 my-5">
          <input {...register('task')} className='bg-white text-[12px] rounded-sm px-10 ' type="text" placeholder='Today task' />
          <input {...register('Description')} className='bg-white text-[12px] rounded-sm  px-10 ' type="text" placeholder='plan' />
          <button className='bg-black text-white rounded-sm px-5 text-md cursor-pointer ' type="submit">Add</button>
        </div>
      </form>
    </div>
</div>
    
    </>
  )
}

export default Task
