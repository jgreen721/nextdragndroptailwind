"use client"
import React from 'react'
import {motion} from "framer-motion"
import { initialInflate,inflate, initialSlideRight, slideRight } from '@/animations'

const Logo = () => {
  return (
    <div className="relative w-[100px] h-[50px]">
        <motion.h1 initial={initialInflate} animate={inflate} transition={{type:"bounce"}} className="absolute -top-1 text-5xl drop-shadow-lg">J</motion.h1>
        <motion.h1 initial={initialInflate} animate={inflate} transition={{type:"bounce",delay:.25}}  className="absolute left-5 top-1 text-5xl drop-shadow-lg">G</motion.h1>
        <div className="absolute text-xl right-7 top-[12px] overflow-hidden">
        <motion.h5 initial={initialSlideRight} animate={slideRight} transition={{type:"bounce",delay:.75}} className="text-xl drop-shadow-lg drop-shadow-red">Dev</motion.h5>
        </div>
    </div>
  )
}

export default Logo