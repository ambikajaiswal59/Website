import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/basic/Navbar'
import Footer from '../pages/basic/Footer'

const MainLayout = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout