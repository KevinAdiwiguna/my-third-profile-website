import React from 'react'

import avatar from "../../../Assets/img/avatar2.jpg"

export const Images = () => {
  return (
    <div className='my-20'>
        <img src={avatar} alt="" className='rounded-xl md:w-96 md:m-auto sm:w-96 sm:m-auto' />
    </div>
  )
}
