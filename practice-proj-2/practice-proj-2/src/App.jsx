import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {


  const object = [
    { image:"https://images.genius.com/e75267f9a3c4a6b0156ea394113e8ec8.1000x1000x1.jpg", songName:"One Love", artist: "Shubh", add: false },
    { image:"https://images.genius.com/e941c1ccc70d979b7d3e722882bf413f.1000x1000x1.jpg", songName:"Cold feet", artist: "6lack", add: false },
    { image:"https://wallpapers.com/images/hd/the-life-of-pablo-2880-x-1800-8p4407iehtn3maug.jpg", songName:"Wheels fall off", artist: "Kanye west", add: false },
  ]

  
    const [data, setData] = useState(object);


    const handleClick = (cardIndex) =>{
        return setData((data)=>{
          return data.map((item, index)=>{
            if(index === cardIndex)
              return {...item, add: !item.add}
            
            return item;
          })
        })
    }



  return (
    <>
      
      <div className='container w-full h-screen bg-amber-100 mx-auto p-5 font-[poppins]  ' >
        
        {/* /navbar */}
        <div className='bg-amber-600 rounded-4xl w-full flex items-center justify-between'>
          <div className='w-10 h-10 bg-black rounded-full flex items-center justify-end '>
            <div className="innerCircle border border-amber-50 w-5 h-5 text-white rounded-full  "></div>
          </div>
          <div className="rightside font-bold flex ">
            <h1 className='pr-4' >favorite</h1>
            <h1 className='pr-4' >{data.filter(item => item.add).length}</h1>
          </div>
        </div>
        
        {/* card container */}
        <div className="cardContainer mt-10 flex flex-wrap justify-center ">
              
        {data.map((elem, index)=>(
          <Card key={index} elem={elem} index={index} handleClick={handleClick} />
        ))} 

        </div>     

      </div>

    </>
  )
}

export default App
