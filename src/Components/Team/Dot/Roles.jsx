import React from 'react'

export const Roles = ({ team }) => {
  let rolesDetail = team.Roles
  let testColor = "#0a192f"
  return (
    <div>
      {rolesDetail.map((res, key) => {
        console.log(res.color)
        return (
          <span key={key} className={` bg-red-500 text-black p-1 m-1 rounded-xl`}>{res.name}</span>
        )
      })}
    </div>
  )
}
