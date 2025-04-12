import React from 'react'
import Tilt from 'react-parallax-tilt';

const Start = () => {


    return (

        <div className='relative w-full h-screen bg-[#CDEA68] overflow-hidden'>
            <Tilt>
                <div data-tilt className='flex flex-col items-center justify-center py-32'>
                    <h1 className='text-[12vw] leading-[10vw] font-semibold tracking-tight font-["Founders_Grotesk_X-Condensed"]'>READY</h1>
                    <h1 className='text-[12vw] leading-[10vw] font-semibold tracking-tight font-["Founders_Grotesk_X-Condensed"]'>TO START</h1>
                    <h1 className='text-[12vw] leading-[10vw] font-semibold tracking-tight font-["Founders_Grotesk_X-Condensed"]'>THE PROJECT?</h1>
                </div>
            </Tilt>
        </div >
    )
}

export default Start
