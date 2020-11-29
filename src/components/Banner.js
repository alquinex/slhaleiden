import React from 'react'

const Banner = ({ title, motto, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{motto}</p>
      {children}
    </div>
  )
}

export default Banner
