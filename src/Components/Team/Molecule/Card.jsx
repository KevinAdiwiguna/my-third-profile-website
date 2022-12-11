import React from 'react'

import rully from "../../../Assets/Images/Team/p1.jpg"
import { Roles } from '../Dot/Roles'
// import { SocialMedia } from '../Dot/SocialMedia'

export const Card = ({ teams }) => {



    return (
        <div className='text-primary my-6 m-auto text-center grid justify-center items-center md:grid-cols-2 lg:grid-cols-3'>
            {teams.map((res, key) => {
                return (
                    <div key={key} className='bg-primary max-w-xs text-black m-5 rounded-xl shadow-md shadow-zinc-600'>
                        <img src={res.img} alt="" className='w-full rounded-xl' />
                        <div className='py-5 my-1'>
                            <p className='text-xl'>{res.name}</p>
                            <div id='job' className='m-2 text-xxs'>
                                <Roles team={res} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
