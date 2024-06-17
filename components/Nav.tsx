import React from 'react'
import {Logo} from "@/reusables"
import {FaMoon,FaSun,FaPlane} from "react-icons/fa"
import { GiWaterfall } from "react-icons/gi";


type NavArgs ={
  darkTheme:boolean,
  showDefault:boolean,
  setDarkTheme:any,
  toggleDesign:(design:string)=>void;
}

const Nav:React.FC<NavArgs> = ({darkTheme,showDefault,setDarkTheme,toggleDesign}) => {
  return (
    <nav className="p-4 md:p-10 flex justify-between items-center">
      <Logo/>
      <ul className="flex items-center gap-5">
        <button onClick={()=>toggleDesign("default")} className={`border-2 ${darkTheme ? 'border-white' : 'border-black'} transition w-[65px] flex items-center justify-center h-[35px] rounded-full  hover:shadow-none hover:shadow-pressed ${showDefault ? 'shadow-pressed' : 'shadow-sm shadow-black'}`}>
          <FaPlane className={`text-2xl text-gray-300 rotate-[-5deg]  ${showDefault ? 'drop-shadow-airplane' : ''}`}/>
        </button>
        <button onClick={()=>toggleDesign("animated")} className={`border-2 ${darkTheme ? 'border-white' : 'border-black'} transition w-[65px] flex items-center justify-center h-[35px] rounded-full  hover:shadow-none hover:shadow-pressed ${!showDefault ? 'shadow-pressed' : 'shadow-sm shadow-black'}`}>
          <GiWaterfall className={`text-2xl text-blue-600 ${!showDefault ? 'drop-shadow-waterfall' : ''}`} />
        </button>
        <button onClick={()=>setDarkTheme((darkTheme:any)=>darkTheme = !darkTheme)} className="relative overflow-hidden w-[45px] h-[35px] flex items-center justify-center">
           <FaSun className={`text-yellow-400 absolute text-2xl transition ease drop-shadow-theme ${!darkTheme ? 'translate-y-0' : '-translate-y-[50px]'}`}/> 
           <FaMoon className={`text-yellow-400 absolute text-2xl transition ease drop-shadow-theme ${darkTheme ? 'translate-y-0' : 'translate-y-[50px]'}`}/>
        </button>
      </ul>
    </nav>
  )
}

export default Nav