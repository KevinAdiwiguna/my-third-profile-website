import React from 'react'

export const LinkedIn = ({ res }) => {
  let hasil = res
  return (
    <span>
      {hasil.map((res, key) => {
        return (
          <a key={key} href={res.linkedin}><i className="fa-brands fa-linkedin mx-2"></i></a>
        )
      })}
    </span>

  )
}
