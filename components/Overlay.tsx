import React from 'react'
import Image from "next/image"

const Overlay = () => {
  return (
    <div className="absolute w-full h-full bg-red-500 top-0 left-0 opacity-100">
      <Image fill sizes="w-full" src="/bg_mtns.jpeg" alt="bg-img"/>
    </div>
  )
}

export default Overlay