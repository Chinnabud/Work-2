import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../component/MainNav'

const Layout = () => {
  return (
    <div>
     <MainNav />

    <main>
      <Outlet />
    </main>
    
    
    </div>
  )
}

export default Layout