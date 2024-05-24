import React from 'react'
import Header from './header/Index'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Index'

const Layout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout