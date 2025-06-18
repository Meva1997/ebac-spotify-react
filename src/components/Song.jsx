import React from 'react'

export default function Song({ title, artist, duration }) {

  return (

    <div className="bg-gray-700 p-4 rounded shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{artist}</p>
      <p>Duration: {duration}</p>
    </div>
  )
}
