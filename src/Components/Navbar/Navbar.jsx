import React, { useEffect, useState } from 'react'
// Components
import { List } from './Molecule/List'
export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const navbarAppear = () => {
    if (window.scrollY > 250) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarAppear)
    return () => {
      window.removeEventListener('scroll', navbarAppear)
    }
  })


  return (
    <div className={` ${open ? "!w-80" : "w-20"}  ${scroll ? "w-0" : "w-20"}    h-screen bg-slidebar duration-300 fixed open z-10`
    }>
      <div className=''>
        <div className={`flex text-primary items-center p-8`} onClick={() => setOpen(!open)}>
          <i className={`fa-solid fa-bars ${open ? "rotate-0" : "rotate-90"} duration-300`}></i>
          <p className={`px-3 text-lg ${open ? "opacity-100" : "opacity-0 pointer-events-none"} duration-200`}>VinEnd</p>
        </div>
        <List open={open} scroll={scroll}/>
      </div>
    </div>
  )
}
