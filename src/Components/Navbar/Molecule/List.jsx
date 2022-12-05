import React from 'react'

export const List = ({open}) => {
  return (
    <div className='flex justify-center items-center h-[70vh] flex-col'>
        <div className='text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background'>
            <i className="fa-sharp fa-solid fa-exclamation text-secondary"></i>
            <p><a href="" className={`text-primary ${open ? "opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>About</a></p>
        </div>
        <div className='text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background'>
            <i className="fa-solid fa-comments text-secondary"></i>
            <p><a href="" className={`text-primary ${open ? "opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Experience</a></p>
        </div>
        <div className='text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background'>
            <i className="fa-sharp fa-solid fa-briefcase text-secondary"></i>
            <p><a href="" className={`text-primary ${open ? "opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Work</a></p>
        </div>
        <div className='text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background'>
            <i className="fa-solid fa-address-card text-secondary"></i>
            <p><a href="" className={`text-primary ${open ? "opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Contact</a></p>
        </div>
        
    </div>
  )
}
