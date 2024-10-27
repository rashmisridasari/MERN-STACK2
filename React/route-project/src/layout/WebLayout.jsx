import React from 'react'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default WebLayout