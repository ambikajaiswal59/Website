import React, { useState } from 'react'
import { useTheme } from '@mui/material'
import { CloseRounded, EmailRounded, MailRounded, PhoneRounded } from '@mui/icons-material'

const FixedContact = () => {
    const theme = useTheme();
    const [isContactClicked, setIsContactClicked] = useState(false);
    return (
        <>
            <div className={`logo fixed flex items-center right-0 bottom-[50%] h-[3rem] w-[3.5rem] hover:w-[4rem] duration-300 delay-100 bg-[#FDF2E9] rounded-l-full z-1000 shadow-custom ${isContactClicked ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
                } transition-all duration-500 ease-in-out`}>
                <div
                    onClick={() => setIsContactClicked(true)}
                    className='p-2 m-1 flex items-center justify-center bg-[#b20000] rounded-[50%] shadow-xl cursor-pointer'>
                    <PhoneRounded
                        style={{
                            color: theme.palette.primary.light,
                        }} />
                </div>
            </div>

            <div className={`content fixed flex flex-col justify-end p-2 right-0 bottom-[45%] h-[5.1rem] w-[11rem] bg-[#b20000] m-1 rounded-lg z-[1000] shadow-custom ${isContactClicked ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                } transition-all duration-500 ease-in-out`}>
                <div className='flex items-start justify-end'>
                    <CloseRounded
                        onClick={() => setIsContactClicked(false)}
                        fontSize='small'
                        style={{
                            color: theme.palette.primary.light,
                            cursor: 'pointer'
                        }} />
                </div>

                <div className='flex items-center'>
                    <PhoneRounded
                        fontSize='small'
                        style={{
                            color: theme.palette.primary.light,
                        }} />
                    <a
                        href="tel:+911141688592"
                        className='pl-1 text-[#FDF2E9] cursor-pointer text-sm'>+91-11-41688592</a>
                </div>
                <div className='flex items-center my-1'>
                    <EmailRounded
                        fontSize='small'
                        style={{
                            color: theme.palette.primary.light,
                        }} />
                    <a
                        href="mailto:post@mlinfomap.com"
                        className='pl-1 text-[#FDF2E9] cursor-pointer text-sm'>post@mlinfomap.com</a>
                </div>
            </div>
        </>
    )
}

export default FixedContact