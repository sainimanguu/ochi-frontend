import React from 'react'
import { motion } from "motion/react"

const Marquees = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
            <div className='text flex border-t-2 overflow-hidden border-b-2 border-zinc-300 whitespace-nowrap '>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[28vw] text-white leading-none  font-["Founders_Grotesk_X-condensed"] -mb-[5vw] pt-14 font-extrabold pr-10'>WE ARE DEVIANS</motion.h1>

                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[28vw] text-white leading-none font-["Founders_Grotesk_X-condensed"] -mb-[5vw] pt-14 font-extrabold pr-10'>WE ARE DEVIANS</motion.h1>


            </div>
        </div>
    )
}

export default Marquees
