"use client"
import React, {useState} from "react"
import {Nav,Destinations,AnimatedDestinations,Overlay} from "@/components"
import {motion} from "framer-motion"
import { blurFadeIn, initialBlurFadeIn } from "@/animations"

export default function Home() {
  const [data,setData] = useState([
    {id:1,title:"Scotland Island",location:"Sydney,Australia",image:"/assets/scotlandislandbeach.png"},
    {id:2,title:"The Charles Grand Brasserie & Bar",location:"Lorem ipsum, Dolor",image:"/assets/charlesgrand.png"},
    {id:3,title:"Bridge Climb",location:"Dolan,Sit amet",image:"/assets/brideclimbreg.png"},
    {id:4,title:"Scotland Island",location:"Sydney,Australia",image:"/assets/scotland.png"},
    {id:5,title:"Clam Bar",location:"Etceteria veni, Vidi vici",image:"/assets/clam.png"},
    {id:6,title:"Vivid Festival",location:"Sydney,Australia",image:"/assets/vivid.png"},
  ])  
  const [darkTheme,setDarkTheme] = useState(false);
  const [showDefault,setShowDefault] = useState(true);
  


  const toggleDesign = (design:string)=>{

    if(design == "default"){
      setShowDefault(true)
    }
    else{
      setShowDefault(false)
    }
  }
  
  return (
    <motion.main initial={initialBlurFadeIn} animate={blurFadeIn} transition={{duration:.250,type:"bounce"}} id="main" data-theme={darkTheme ? "dark" : "light"} className="min-h-screen max-w-[85rem] m-auto bg-main text-main flex flex-col justify-between">
  <div>
      <Nav darkTheme={darkTheme} showDefault={showDefault} setDarkTheme={setDarkTheme} toggleDesign={toggleDesign}/>
      <section className="flex items center justify-center my-5 px-3">
      {showDefault ? <Destinations data={data}/> : <AnimatedDestinations data={data}/>}
      </section>
  </div>
      <footer className="flex items-center justify-center p-2">
        <div className="relative w-[100px] flex items-center justify-center">
          <a href="https://jgreen721dev.com" target="_blank">
          <h5 className="text-lg font-bold">
              JGDev721
          </h5>
          
          </a>
        <div className="absolute w-full h-[4px] bg-blue-500 bottom-0 underline-clip"></div>
        </div>
      </footer>

     </motion.main>
  );
}
