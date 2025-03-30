import React from "react";

function Card({elem, index, handleClick }){

    const {image,songName, artist, add} = elem;
    
    return ( 
    <>
            <div className="cardContainer w-52 bg-amber-500 p-3 rounded-3xl m-2 shadow-black shadow-2xl ">
                
                {/* Song image */}
                <div className="songImage w-full h-39  ">
                    <img className="w-full h-full object-cover rounded-3xl "  src={image} alt="" />
                </div>

                {/* song content */}
                <div className="cardContent mt-2 flex items-center ">


                    {/* song info */}
                    <div className="Details mr-auto" >
                        <h1 className="font-bold text-lg" >{songName}</h1>
                        <h5 className="" >{artist}</h5>
                    </div>

                    {/* heart */}
                    <div className="addDetails text-2xl  " >
                        <div className=" flex items-center justify-center " > 
                            <div onClick={()=>handleClick(index)} className="cursor-pointer text-md">
                                {/* {add===true? "Remove" : "Add"} */}
                                <i  className={add === true? "ri-heart-fill text-amber-900 " : "ri-heart-line  text-amber-900  "}></i>
                            </div> 
                            </div>
                    </div>
                </div>

            </div>
    </>
)}

export default Card;