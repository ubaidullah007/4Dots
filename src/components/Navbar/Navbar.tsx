import React, { useEffect, useState } from 'react'
import Image from '../../../node_modules/next/image'
import { Button } from '../Button/Button'
import NavItem from './NavItem'
import Logo from '../../../src/images/NYV-Logo.png';
import NavDropDown from './NavDropDown';
import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
import { boolean } from 'yup';
import DropDownAbout from './dropdown-about';
const Navbar = () => {
  const isItMobile = useCheckMobileScreen();
const [scroll, setScroll] = useState<boolean>(false); 
useEffect(() => {
  const handleScroll = () => {
    // Check if the user has scrolled, for example, 100 pixels or more
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Add scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 
  return (
   <>
   {/* <div className='fixed bottom-0 right-0 bg-black text-white'>
<h1>dsa</h1>
   </div> */}
    <div className={`${Boolean(scroll && !isItMobile ) &&  'sticky top-0 bg-white z-50 shadow-md'} `}>

<div className='container '>
  <div className='flex justify-between items-center h-[88px]' >
    <div className='cursor-pointer'>
      <Link href={'/'}>
        <Image src={Logo}
          height={60}
          
          alt="Picture of the author" />
      </Link>
    </div>
    {!isItMobile ? <ul className='flex items-center '>
      <NavItem text="Home" href={'/'} className="hover:text-purple transition" />
      <NavItem text="Our Clients" href={'/#portfolio'} className="hover:text-purple transition" />
      <NavDropDown dropDownText='Services' className="transition" href='/services' />
      {/* <NavItem text="Our Team" href={'/our-team'} className="hover:text-purple transition" /> */}
      {/* <NavItem text="Work" href={'/about'} className="hover:text-purple transition" /> */}
      <NavItem text="Careers" href={'/careers'} className="hover:text-purple transition" />
      {/* <NavItem text="About" href={'/about'} className="hover:text-purple transition" /> */}
      <DropDownAbout  dropDownText='About' className="transition" href='/about' />
      <NavItem text="Portfolio" href={'/portfolio'} className="hover:text-purple transition" />
      {/* <NavItem text="Complaints" href={'/suggestion-box'} className="hover:text-purple transition" /> */}
      
      {/* <NavDropDown dropDownText='Careers' className="transition" href='/careers' /> */}
      <Button className="bg-primary text-white font-poppins text-xs hover:shadow-custom-button hover:translate-y-[-3px]	 px-[18px] py-[14px] font-bold	capitalize rounded-lg">
        <Link href={'/contact'}>  Get in Touch </Link>
      </Button>
    </ul> :
      <MobileNavbar />}

  </div>

</div>

</div>
   </>
  )

}

export default Navbar