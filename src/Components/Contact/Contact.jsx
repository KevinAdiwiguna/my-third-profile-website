import React from 'react'
import { Button } from './Molecule/Button'
import { Input } from './Molecule/Input'

export const Contact = () => {

  return (
    <div className=' mx-10 min-h-screen'>

      <div className='my-10'>
        <p className='text-primary text-4xl'>Contact <span className='text-secondary'>Us</span></p>
        <p className='text-primary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas voluptas voluptates necessitatibus. Officia neque illum laudantium voluptate eaque debitis et vitae laborum, asperiores facilis totam ad. Accusantium, reprehenderit corrupti.</p>
      </div>

      <div className='md:grid md:grid-cols-2 gap-10 md:justify-center md:items-center'>
        <div>
          <form action="" >
            <Input />
          </form>
          <Button />
        </div>

        <div><img src="https://raw.githubusercontent.com/KevinAdiwiguna/Only-Avatar/main/kevin.jpg" alt="" className='rounded-xl md:w-96 md:m-auto' /></div>
      </div>

    </div>
  )
}

