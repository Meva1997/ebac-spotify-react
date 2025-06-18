import React from 'react'

export default function Song({ title, artist, duration }) {

  return (

    <div >
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>Duration: {duration}</p>
    </div>
  )
}
