import React from 'react'
import { PiCopyrightThin } from "react-icons/pi";


const Footer = () => {
    const date = new Date().getFullYear()
  return (
    
    <div className=" bottom-0 flex text-center justify-center fixed w-full h-3 p-4 bg-[#0a192f] text-gray-300">
        
        <p className=" text-center items-center flex text-zinc-500"> Copyright <PiCopyrightThin />{date} Trufflie </p>
    </div>
  )
}

export default Footer