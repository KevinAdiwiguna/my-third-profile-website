import React from 'react'

export const Hero = () => {
  return (
    <div className='h-screen flex items-center justify-center px-5 sm:px-3'>
        <div>
            <div className='text-left'>
                <p className='text-secondary'>Hi, my name is</p>
                <p className='text-primary text-4xl sm:text-5xl lg:text-6xl font-bold'>Kevin Adiwiguna</p>
                <p className='text-primary text-1xl sm:text-2xl lg:text-3xl font-semibold opacity-80'>Beginer Front-End Web/MobileApp developer</p>
                <p className='text-secondary'>I am a web developer and mobile app developer. focus on the frontend</p>
            </div>
            <div className='my-14'>
                <a href="" className='text-secondary p-5 my-10 border-secondary border-2'>Learn More</a>
            </div>
        </div>
    </div>
  )
}
