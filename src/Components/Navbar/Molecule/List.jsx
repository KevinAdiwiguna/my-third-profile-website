import React from 'react'

export const List = (props) => {
  return (
    <div className='flex justify-center items-center h-[70vh] flex-col'>
        <div className={`text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background ${props.scroll ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} ${props.open ? '!opacity-100' : ""} duration-300`}>
            <i className="fa-sharp fa-solid fa-exclamation text-secondary"></i>
            <p><a href="" className={`text-primary ${props.open ? "!opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>About</a></p>
        </div>
        <div className={`text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background ${props.scroll ? "!opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} ${props.open ? '!opacity-100' : ""} duration-300`}>
            <i className="fa-solid fa-people-group text-secondary"></i>
            <p><a href="" className={`text-primary ${props.open ? "!opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Team</a></p>
        </div>
        <div className={`text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background ${props.scroll ? "!opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} ${props.open ? '!opacity-100' : ""} duration-300`}>
            <i className="fa-sharp fa-solid fa-briefcase text-secondary"></i>
            <p><a href="" className={`text-primary ${props.open ? "!opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Skills</a></p>
        </div>
        <div className={`text-center text-lg px-5 pb-4 pt-10 rounded-lg hover:bg-background ${props.scroll ? "!opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} ${props.open ? '!opacity-100' : ""} duration-300`}>
            <i className="fa-solid fa-address-card text-secondary"></i>
            <p><a href="" className={`text-primary ${props.open ? "!opacity-100" : "opacity-0 pointer-events-none"} duration-300 `}>Contact</a></p>
        </div>
        
    </div>
  )
}
