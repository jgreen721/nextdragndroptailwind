import React, {useState,useRef} from 'react'
import Image from "next/image";
import { CiMapPin } from "react-icons/ci";

const DestinationItem:React.FC<any> =({destination,dragStart,dropCard,isDragging})=>{
          const [hoverTarget,setHoverTarget] = useState(false)
          const dragImgRef = useRef<any>()

  const dragOver = (e:any)=>{
    e.preventDefault();
    setHoverTarget(true)
  }

  const dragLeave = (e:any)=>{
    e.preventDefault();
    setHoverTarget(false)
  }

  const handleDragStart=(e:any,destination:any)=>{
    e.dataTransfer.setData("dataId",destination.id);
    dragStart(destination);
    e.dataTransfer.setDragImage(dragImgRef.current,0,0);
  }

  const handleDrop=(e:any,destination:any)=>{
    setHoverTarget(false);
    dropCard(e,destination)
  }

  return(
<li draggable={true} onDragStart={(e)=>handleDragStart(e,destination)} onDrop={(e)=>handleDrop(e,destination)} onDragOver={dragOver} onDragLeave={dragLeave} className={`overflow-hidden cursor-pointer relative flex items-center gap-2 p-3 rounded-md shadow-lg shadow-gray-500 my-4 relative ${isDragging ? 'opacity-50' : 'opacity-100'} ${hoverTarget ? 'border-b-4 border-blue-400 bg-activecard' : 'bg-card'}`}>
    <div>
      <Image src={destination.image} alt="img" height={60} width={60}/>
    </div>
    <div>
      <div>
        <h3 className="text-xl font-extrabold">{destination.title}</h3>
      <div className="flex items-center gap-1">
        <CiMapPin />
        <h5 className="text-md font-semibold">{destination.location}</h5>
      </div>
    </div>
  </div>
   <div ref={dragImgRef} className={`bg-card flex gap-2 border-2 p-1 rounded-md absolute bottom-0 transition ${isDragging ? 'opacity-0 -right-[500px]' : '-right-[500px] opacity-100'}`}>
    <div>
      <Image src={destination.image} alt="img" height={30} width={30}/>
    </div>
    <h3 className="text-lrg font-bold">{destination.title}</h3>
 </div>
</li>
  )
}

const Destinations:React.FC<any> = ({data}) => {
  const [destinations,setDestinations] = useState(data)
  const [draggingItem,setDraggingItem] = useState<any>(null)


  const dragStart=(destination:any)=>{
    console.log('dragStart')
    setDraggingItem(destination)
  }


  const dropCard = (e:any,destination:any)=>{
    e.preventDefault();
    console.log("Dropped!",e.dataTransfer.getData("dataId"))
    let draggedDestination = destinations.filter((d:any)=>d.id == e.dataTransfer.getData("dataId"))[0];
    console.log(draggedDestination)
    setDraggingItem(null)
    setDestinations((destinations:any)=>destinations.map((d:any)=>d.id == draggedDestination.id ? destination : d.id == destination.id ? draggedDestination : d ))
  }
  return (
    <div className="">
      <ul>
        {destinations.map((destination:any,idx:number)=>(
          <DestinationItem isDragging={destination.id == draggingItem?.id} key={destination.id} dragStart={dragStart} dropCard={dropCard} destination={destination}/>
        ))}
      </ul>
    </div>
  )
}

export default Destinations