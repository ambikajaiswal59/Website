import React from 'react'
import TechHeader from '../assets/TechApps/TechHeader.png'
import TechInfo from '../components/techapps/TechInfo'
import TechStack from '../components/techapps/TeckStack'
import AppSection from '../components/techapps/AppSection'

const TechApps = () => {
    return (
        <div>
            <div className='relative w-full h-[17rem] md:h-[25rem] overflow-hidden'>
                <img src={TechHeader} alt="Tech Header" className="w-full "/>
            </div>
            <div className="px-6 md:px-10 lg:px-20 pt-5 pb-1 lg:pt-10 lg:pb-5 flex justify-center bg-white">
                <TechInfo />
            </div>
            <div className="px-8 md:px-10 lg:px-20 pb-5 pt-1 lg:pb-10 lg:pt-5 flex justify-center bg-primary-bg">
                <TechStack />
            </div>
            <div className="flex justify-center bg-white">
                <AppSection />
            </div>
        </div>
    )
}

export default TechApps