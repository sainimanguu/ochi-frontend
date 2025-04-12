import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center px-20 gap-5'>
            <div className='relative cardcontain w-1/2 h-[50vh]'>
                <div className='w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
                    <img className='w-40' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                    <button className='absolute left-7 bottom-7 border-[#CDEA68] border-[1px] rounded-full px-3 font-extralight tracking-tight font-["Neue_Montreal"] text-[#CDEA68] cursor-not-allowed'>©2024-2025</button>
                </div>

            </div>
            <div className='relative cardcontain flex gap-5 w-1/2 h-[50vh]'>
                <div className='w-1/2 rounded-xl h-full bg-[#01221e] flex items-center justify-center'>
                    <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                    <button className='absolute left-4 bottom-7 border-zinc-200 border-[1px] rounded-full px-3 font-extralight tracking-tight font-["Neue_Montreal"] text-white'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='relative w-1/2 rounded-xl h-full bg-[#01221e] flex items-center justify-center'>
                    <img className='w-14' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                    <button className='absolute left-4 bottom-7 border-zinc-200 border-[1px] rounded-full px-3 font-extralight tracking-tight font-["Neue_Montreal"] text-white'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
