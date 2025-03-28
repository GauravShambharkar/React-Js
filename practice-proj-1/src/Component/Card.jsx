import React from 'react'


function Card({elem, index, handleClick})
{

const {image, age, status, name ,request } = elem;


return (
<div className='Card bg-blue-300 w-52 p-3 m-2 rounded-3xl' > 
<div className="cardContent w-full">

<div className="imgContainer rounded-3xl overflow-hidden  w-full h-48">
      <img className='' src={image} alt="" />

</div>

<div className="dataContainer font-bold mt-2 ">
      <h3 className='' >{name}</h3>
      <h3 className='text-black/50 ' >{age}</h3>
      <h3 className='text-black/50 ' >{status}</h3>
</div>
</div>
<button onClick={()=>{handleClick(index)}} className='bg-blue-600 text-white px-3 cursor-pointer rounded-full mt-2 ' >
      {request === true ? "Remove" : "Add friend"}
</button>
</div>
)
}

export default Card