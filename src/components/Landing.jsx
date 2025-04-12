import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { motion } from "motion/react"

const Landing = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-100 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index) => {
                    return <div className='masker '>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 &&
                                <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: "1" }} className='w-[8vw] h-[5vw] relative -top-[0.3vw] rounded-md bg-[url(/mountains.jpg)] mr-[0.5vw]'></motion.div>
                            }
                            <h1 className="text-[7vw] font-[' Founders_Grotesk_X-Condensed'] leading-[6vw] tracking-tighter font-semibold">{item} </h1>
                        </div>
                    </div>

                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-36 flex justify-between items-center py-5 px-20'>
                {["For public and private compaies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className='start flex items-center'>
                    <div className='py-2 border-[2px] border-zinc-500 px-4 rounded-full cursor-pointer'>START THE PROCESS
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center border-[2px] m-1 border-zinc-500 rounded-full cursor-pointer '>
                        <span className='rotate-[45deg]'><FaArrowUp /></span></div>
                </div>
            </div>
        </div >
    )
}

export default Landing
