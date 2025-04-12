import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()]


    const handlleHoverend = (index) => {
        cards[index].start({ y: "100%" })
    }

    const handleHover = (index) => {
        cards[index].start({ y: "0%" })
    }


    return (
        <div className='w-full py-10 bg-zinc-100'>
            <div className='w-full px-10 border-b-[1px] border-zinc-500 pb-14'>
                <h1 className='text-[5.2vw] font-["Neue Montreal"] tracking-tight font-thin'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards flex gap-10 mt-14'>
                    <motion.div

                        onHoverStart={() => handleHover(0)} onHoverEnd={() => {
                            handlleHoverend(0)
                        }} className=' cardcontain relative w-1/2 h-[70vh] '>
                        <div className='cursor-pointer w-full h-full 
                    overflow-hidden rounded-xl'>
                            <h1 className='text-[#CDEA68] absolute flex text-[8.2vw] tracking-tighter left-full top-1/2 z-[9] leading-none  -translate-x-1/2 -translate-y-1/2 font-semibold overflow-hidden'>
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                        className='inline-block'>{item}</motion.span >
                                ))}
                            </h1>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png'></img>
                        </div>
                    </motion.div>

                    <div className='relative cardcontain w-1/2 h-[70vh] '>
                        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => {
                            handlleHoverend(1)
                        }} className='cursor-pointer w-full h-full 
                    overflow-hidden rounded-xl'>
                            <h1 className='text-[#CDEA68] overflow-hidden absolute flex text-[8.2vw] tracking-tighter right-full top-1/2 z-[9] leading-none translate-x-1/2 -translate-y-1/2 font-semibold'>
                                {"PITCH".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                        className='inline-block'>{item}</motion.span >
                                ))}
                            </h1>
                            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png'></img></motion.div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Featured
