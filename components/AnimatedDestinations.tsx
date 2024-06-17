import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import Image from "next/image"


const AnimatedItem:React.FC<any> = ({destination,isDragged,translateVal,dragStart,dropCard})=>{
        const [isActive,setIsActive] = useState(false);
        let IMG_SIZE = {height:65,width:65}


        useEffect(()=>{
          if(innerWidth < 750){
              IMG_SIZE = {height:40,width:40}
          }
        })

        const handleDragStart=(e:any,destination:any)=>{
          e.dataTransfer.setData("cardId",destination.id);
          dragStart(e,destination)
        }

        const dragOver = (e:any)=>{
          e.preventDefault()
          setIsActive(true)
        }

        const dragLeave = (e:any)=>{
         e.preventDefault()
         setIsActive(false) 
        }

        const handleDrop = (e:any,destination:any)=>{
          setIsActive(false);
              dropCard(e,destination)
        }

  return (
    <li draggable onDragStart={(e)=>handleDragStart(e,destination)} onDragOver={dragOver} onDragLeave={dragLeave} onDrop={(e)=>handleDrop(e,destination)} style={{"--i":`${destination.translateVal}px`} as React.CSSProperties} className={`flex items-center justify-between absolute ${isActive ? 'bg-activecard' : 'bg-card'} w-[100%] p-2 rounded-md cursor-grab animate-item-card shadow-md shadow-black ${isActive ? 'border-b-4 border-blue-600' : ''}`}>
      <div className="flex items-center gap-4">
        <div>
          <Image src={destination.image} width={IMG_SIZE.width} height={IMG_SIZE.height} alt="img"/>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">{destination.title}</h3>
          <h3 className="text-sm md:text-md text-secondary">{destination.location}</h3>
        </div>
      </div>
    </li>

  )
  }

const AnimatedDestinations:React.FC<any> = ({data}) => {
  const [destinations,setDestinations] = useState<any>((destinations:any)=>destinations = data.map((d:any,idx:any)=>({...d,translateVal:idx * 95})))
  const [dragItem,setDragItem] = useState<any>(null);


  const dragStart = (e:any,destination:any)=>{
    console.log("dragStart")
    setDragItem(destination);
  }

  const dropCard = (e:any,destination:any)=>{
    console.log("onDrop")
    setDestinations(()=>destinations.map((d:any)=>dragItem.id == d.id ? {...dragItem,translateVal:destination.translateVal} : d.id == destination.id ? {...destination,translateVal:dragItem.translateVal} : d));
    setDragItem(null);

  }

  let height = destinations.length * 90;
  return (
    <div style={{height:`${height}px`}} className={`relative w-[100%] md:w-[500px]`}>
      {destinations.map((destination:any,idx:number)=>(
        <AnimatedItem isDragged={dragItem?.id == destination.id} key={idx} dragStart={dragStart} dropCard={dropCard} destination={destination}/>
      ))}
    </div>
  )
}

export default AnimatedDestinations