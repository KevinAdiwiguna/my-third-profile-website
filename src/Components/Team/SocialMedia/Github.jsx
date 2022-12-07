import React from 'react'

export const Github = ({ res }) => {
  let hasil = res
  return (
    <span>
      {hasil.map((res, key) => {
        return (
          <a key={key} href={res.github}><i className="fa-brands fa-square-github mx-2"></i></a>
        )
      })}
    </span>
  )
}
