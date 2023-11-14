import React, {useState} from 'react'

function Shared() {
  return (
    <div>Shared</div>
  )
}

export default Shared
export const baseUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : 'https://shut-up-dev.onrender.com';