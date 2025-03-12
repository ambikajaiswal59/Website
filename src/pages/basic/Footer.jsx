import React, { useState } from 'react';
import logo from '../../assets/logo-bgless.png';
import { LocationOnRounded, PhoneRounded, MailRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import GooglePlay from '../../assets/googlePlay.png'
import AppleStore from '../../assets/appleStore.png'
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const NavLink = ({
  children,
  ...props
}) => {
  return <Link {...props} className='text-white cursor-pointer duration-300 hover:ml-1'>
    {children}</Link>
}

const Footer = () => {
  const [email, setEmail] = useState('');

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         await subscribe.create({email})
  //         toast.success('Subscribed Successfully');
  //         setEmail('');
  //     } catch (err) {
  //         toast.error(err.response.data.message);
  //     }
  // }


  return (
    <footer className='bg-secondary flex-grow'>
      <div className='container mx-auto px-3 py-10'>
        <div className='grid gap-y-6 md:gap-6 grid-cols-1 md:grid-cols-4 xl:grid-cols-12'>
          <div className='col-span-2 xl:col-span-4'>
            <img draggable={false}
              src={logo}
              alt=''
              className='w-10 max-w-full h-auto rounded-lg' />
            <p className='text-sm text-white text-justify font-inter mt-5'>
              ML Infomap is an Information Technology company specialising in GIS solutions, maps,
              data and apps. 
            </p>
          </div>
          <div className='col-span-2 xl:col-span-2'>
            <h2 className='text-white font-bold text-xl'>QUICK LINKS</h2>
            <ul className='mt-4 ml-3 text-sm font-inter'>
              <li className='mb-2'>
                <NavLink to='/MLWebsite/'>Home</NavLink>
              </li>
              <li className='mb-2'>
                <NavLink to='/MLWebsite/about'>About</NavLink>
              </li>
              <li className='mb-2'>
                <NavLink to='/MLWebsite/tech-apps'>Tech & Apps</NavLink>
              </li>
              <li className='mb-2'>
                <NavLink to='/MLWebsite/mapdata'>Data & Maps</NavLink>
              </li>
            </ul>
          </div>
          <div className='col-span-2 xl:col-span-3'>
            <h2 className='text-white font-bold text-xl'>QUICK CONTACT</h2>
            <ul className='my-4 text-sm'>
              <li className='mb-3 flex gap-2'>
                <LocationOnRounded className='w-6 h-6 text-gray-300' />
                <p className='text-white font-inter'>
                  124-A, Katwaria Sarai,
                  New Delhi-16, India
                </p>
              </li>
              <li className='mb-3 flex gap-2'>
                <PhoneRounded className='w-5 h-5 text-gray-300' />
                <a href='tel:+911141688592' className=' font-inter text-white'>+91 011 41688592 / 93</a>
              </li>
              <li className='mb-3 flex gap-2'>
                <MailRounded className='w-5 h-5 text-gray-300' />
                <a href='mailto:post@mlinfomap.com' className=' font-inter text-white'> post@mlinfomap.com</a>
              </li>
            </ul>

          </div>
          <div className='col-span-2 xl:col-span-3'>
            <form className='font-light'>
              {/* onSubmit={handleSubmit} */}
              <label htmlFor='subscribe' className='text-white font-bold text-xl'>MOBILE APPS</label>
              {/* <div className='w-full sm:w-fit flex text-sm 2xl:text-lg rounded-md overflow-hidden mt-4'>
                <input type='email' placeholder='Email Address'
                  value={email}
                  className='py-2 px-3 w-5/12 lg:w-10/12 bg-transparent text-white border border-r-0 !border-white focus:border-white focus:outline-none rounded-l-md'
                  required
                  onChange={
                    (e) => setEmail(e.target.value)
                  } />
                <button type='submit' className='bg-gray-300 font-medium w-4/12 sm:w-auto py-2 px-5 cursor-pointer rounded-r-xl'>Send</button>
              </div> */}
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/developer?id=ML+Infomap" className="href" target='_blank'>
                    <img src={GooglePlay} alt="Google Play Store" className='w-[9rem] -ml-2'/>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={AppleStore} alt="Apple Store" className='w-[8rem]'/>
                  </a>
                </li>
              </ul>
            </form>
            {/* <div className='flex flex-row justify-start gap-5 mt-5 items-center'>
                            <a href='https://www.facebook.com/cremeborne' className=''>
                                <img draggable={false}
                                    src={Facebook}
                                    alt="fb"
                                    className='w-9 2xl:w-14 h-auto duration-300 hover:scale-110'/>
                            </a>
                            <a href='https://www.instagram.com/cremeborne/' className=''>
                                <img draggable={false}
                                    src={Instagram}
                                    alt="insta"
                                    className='w-9 2xl:w-14 h-auto duration-300 hover:scale-110'/>
                            </a>
                            <a href='https://twitter.com/cremeborne' className=''>
                                <img draggable={false}
                                    src={Twitter}
                                    alt="twitter"
                                    className='w-9 2xl:w-14 h-auto duration-300 hover:scale-110'/>
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
      <div className='container mx-auto border-t border-white px-5 md:px-0'>
        <p className='text-center text-xs font-inter py-4 text-white'>Copyright © 2025 All Rights Reserved | © 1993-2025 ML Infomap.
          {/* <a href='https://macverin.com' target="_blank" rel='noreferrer' className='font-bold'>Macverin Technologies</a> */}
        </p>
      </div>
      {/* <ToastContainer/> */}
    </footer>
  );
}

export default Footer;
