import React from 'react'

export const Instagram = ({ res }) => {
  let hasil = res
  return (
    <span>
      {hasil.map((res, key) => {
        return (
          <a key={key} href={res.instagram}><i className="fa-brands fa-instagram mx-2"></i></a>
        )
      })}

    </span>
  )
}
