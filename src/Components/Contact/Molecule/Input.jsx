import React from 'react'

export const Input = () => {
    return (
        <div className="flex flex-col">
            <input type="text" placeholder='Full Name' required className='text-black outline-none px-8 h-14 rounded-full my-2' />
            <input type="email" placeholder='E-Mail' required className='text-black outline-none px-8 h-14 rounded-full my-2' />
            <input type="Message" placeholder='Your Message' required className='text-black outline-none px-8 h-14 rounded-full my-2' />
        </div>
    )
}
