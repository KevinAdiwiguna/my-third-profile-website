import React from 'react'

export const SkillsBar = ({ data }) => {
    return (
        <div className='md:grid md:grid-cols-2 md:gap-9 mx-10'>
            {data.map((res, key) => {
                return (
                    <div key={key} className='my-10 md:my-4 text-primary'>
                        <p>{res.name}</p>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className="bg-blue-700 text-xs font-medium text-primary text-center p-0.5 leading-none rounded-l-full" style={{ width: `${res.barProgres}` }}>{res.barProgres}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
