import React from 'react'

const Footer = () => {
    return (
        <div className='flex gap-8 w-full h-screen bg-zinc-900 p-20 text-white '>
            <div className='w-1/2 font-["Founders_Grotesk_X-Condensed"] '>
                <h1 className='text-[8vw] font-semibold leading-none -mb-10'>EYE-</h1>
                <h1 className='text-[8vw] font-semibold leading-none -mb-10'>OPENING</h1>
            </div>
            <div className='w-1/2 font-["Founders_Grotesk_X-Condensed"]'>
                <h1 className='text-[8vw] font-semibold leading-none -mb-10'>PRESENTATION
                </h1>
                <div className='details font-["Neue_Montreal"] mt-14 space-y-1'>
                    <a href='#' className='block text-xl underline'>Facebook</a>
                    <a href='#' className='block text-xl underline'>GitHub</a>
                    <a href='#' className='block text-xl underline'>Twitter</a>
                </div>
            </div >


        </div >
    )
}

export default Footer
