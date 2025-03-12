import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import TechApps from '../pages/TechApps'
import MapData from '../pages/MapData'
import Contact from '../pages/Contact'
import ScrollToTop  from '../pages/basic/ScrollToTop'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <ScrollToTop /> 
                    <MainLayout />
                </>
            ),
            children: [
                {
                    path: '/MLWebsite/',
                    element: <Home />
                },
                {
                    path: '/MLWebsite/about',
                    element: <About />
                },
                {
                    path: '/MLWebsite/tech-apps',
                    element: <TechApps />
                },
                { path: "/MLWebsite/tech-apps/:id", element: <TechApps /> },
                {
                    path: '/MLWebsite/mapdata',
                    element: <MapData />
                },
                {
                    path: '/MLWebsite/contact',
                    element: <Contact />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}

export default Routes