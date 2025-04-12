import React from 'react'

const About = () => {
    return (
        <div className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[3.8vw] p-20 leading-[3.5vw] tracking-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dicta repellendus neque in voluptatum dignissimos tempora error ut enim magnam, hic inventore voluptatem excepturi corrupti nostrum a possimus eos expedita.</h1>
            <div className='w-full flex border-t-[2px] pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2 px-20'>
                    <h1 className='text-7xl font-["Neue_Montreal"]'>Our Approach:</h1>
                    <button className='px-6 py-4 mt-10 rounded-full bg-zinc-800 text-xl text-white  flex gap-12 items-center font-["Neue_Montreal] cursor-pointer'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] mx-10  rounded-xl'><img className='rounded-xl' src='https://images.pexels.com/photos/30830601/pexels-photo-30830601/free-photo-of-elegant-senior-couple-in-formal-attire.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'></img></div>
            </div>
        </div>
    )
}

export default About
