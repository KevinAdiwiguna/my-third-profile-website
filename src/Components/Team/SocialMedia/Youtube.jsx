import React from 'react'

export const Youtube = ({ res }) => {
  let hasil = res
  return (
    <span>
      {hasil.map((res, key) => {
        return (
          <a key={key} href={res.youtube}><i className="fa-brands fa-youtube mx-2"></i></a>
        )
      })}
    </span>
  )
}
