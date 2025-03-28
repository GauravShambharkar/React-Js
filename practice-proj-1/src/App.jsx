import { useState } from 'react'

import './App.css'
import Card from './Component/Card'

function App() {

const object = 
[
  { image: "https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'James', age: 24 , status: "Single", request: false   },
  { image: "https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'Noah', age: 40 , status: "Married" , request: false   },
  { image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: 'Murphey', age: 29 , status: "Single" , request: false   },
]

    const [data, setData] = useState(object)
    const handleClick = (card_Index)=>{

      return setData((data)=>{
        return data.map((item, index)=>{
          if(index === card_Index)
          {
            return {...item, request: !item.request}
          }
          return item;
        })
      })
    }
  

  return (

    <>

    <div className="container m-auto font-[poppins] bg-amber-100 w-full h-screen flex flex-wrap justify-center items-center">
      
      {data.map((elem, index)=>(
        
        <Card key={index}  elem = {elem} index = {index} handleClick={handleClick} />

      ))}


    

    </div>
    </>
  )
}

export default App
