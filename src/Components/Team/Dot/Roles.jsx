import React from 'react'

export const Roles = ({ team }) => {
  let rolesDetail = team.Roles

  return (
    <div>
      {rolesDetail.map((res, key) => {
        let hasil = res.color
        return (
          <span key={key} className={` bg-[#${hasil}]  text-black p-1 m-1 rounded-xl`}>{res.name}</span>
        )
      })}
    </div>
  )
}
