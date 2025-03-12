import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import lightLogo from '../../assets/logo.jpg';
import { IconButton } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState(0);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const paths = ['/MLWebsite/', '/MLWebsite/about', '/MLWebsite/tech-apps', '/MLWebsite/mapdata', '/MLWebsite/contact'];
    const titles = ['HOME', 'ABOUT', 'TECH & APPS', 'DATA & MAPS', 'CONTACT'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log(!isMenuOpen);
    };

    useEffect(() => {
        // Synchronize itemSelected with the current URL
        const currentIndex = paths.findIndex((path) => path === location.pathname);
        setItemSelected(currentIndex);
    }, [location.pathname, paths]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>


            <div className='sticky top-0 z-50 w-full h-[5rem] shadow-xl bg-[#fff]'>
                <nav className='container-fluid ml-auto flex items-center justify-between rounded-xl'>
                    <div className='py-2 pl-8 md:pl-10 lg:pl-20'>
                        <Link to='/MLWebsite/'>
                            <img draggable={false} src={lightLogo} alt='ML INFOMAP' className='w-20 h-auto' />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className='h-[5rem] w-[40rem flex items-center justify-end mr-10 lg:mr-20'>
                            <div className='h-full w-full'>
                                <ul className='h-full flex justify-around items-center lg:gap-8 font-semibold text-md'>
                                    {paths.map((path, index) => (
                                        <li
                                            key={index}
                                            className="relative px-2 flex items-center justify-center h-full"
                                        >
                                            <NavLink
                                                to={path}
                                                end={path === "/MLWebsite/"}
                                                onClick={() => setItemSelected(index)}
                                                className={({ isActive }) =>
                                                    `transition-colors duration-300 text-contrast font-inter font-semibold ${isActive ? "text-primary font-bold" : "hover:text-primary"
                                                    }`
                                                }
                                            >
                                                {titles[index]}
                                            </NavLink>
                                            {itemSelected === index && (
                                            <div className="absolute bottom-0 w-full bg-[#B20000] h-[0.3rem] rounded-t-full"></div>
                                        )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* <div className="hidden md:block">
                        <div className='h-[5rem] w-[40rem] bg-gray-300 flex items-center justify-end rounded-bl-[200px] border-l-4 border-l-[#0c315b] shadow-[0_7px_0_#777]'>
                            <div className='px-3 py-2 w-full'>
                                <ul className='flex justify-around lg:gap-8 font-semibold text-md'>
                                    {paths.map((path, index) => {
                                        return (
                                            <li key={path}>
                                                <NavLink
                                                    to={path}
                                                    end={path === '/MLWebsite/'} 
                                                    className={({ isActive }) =>
                                                        isActive ? 'text-[#B20000] font-bold' : 'hover:text-[#B20000]'
                                                    }
                                                >
                                                    {titles[index]}
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> */}



                    <div className="sm:hidden z-[100] mr-4">
                        <IconButton ref={buttonRef} onClick={toggleMenu}>
                            <MenuRounded fontSize='large' sx={{ color: '#b20000' }} />
                        </IconButton>
                        {isMenuOpen && (
                            <div
                                ref={menuRef}
                                // className="w-[15rem] z-[200] absolute right-0 top-[5rem] rounded-bl-[50px] border-l-4 border-l-[#B20000] shadow-[0_7px_0_#777] bg-gray-300">
                                className={`w-[15rem] z-[1000] absolute right-0 top-[5rem] rounded-bl-[50px] border-l-4 border-l-[#B20000] shadow-[0_7px_0_#777] bg-gray-300
                                    transform transition-transform duration-300 ease-in-out
                                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            >
                                <ul className='font-semibold text-lg p-6'>
                                    {paths.map((path, index) => {
                                        return (
                                            <li key={path} className="pb-1">
                                                <NavLink
                                                    to={path}
                                                    onClick={closeMenu}
                                                    className={({ isActive }) =>
                                                        isActive ? 'text-[#B20000] font-bold' : 'hover:text-[#B20000]'
                                                    }
                                                >
                                                    {titles[index]}
                                                </NavLink>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar