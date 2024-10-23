import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import { DropdownIcon } from '@/svg';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import DomainHosting from '../../images/navbar/domain.svg';
import appDev from '../../images/navbar/app_dev.svg';
import webDev from '../../images/navbar/web_dev.svg';
import Seo from '../../images/navbar/seo.svg';
import ProductPhotoShoot from '../../images/navbar/product-photoshoot.svg';
import SoftwareDevelopment from '../../images/navbar/salesforce.svg';
import GraphicDesigning from '../../images/navbar/graphic-designing.svg';
import DigitalMarketing from '../../images/navbar/digital-marketing.svg';
import uiux from '../../images/navbar/ui-ux.svg';

interface NavDropDownProps {
  dropDownText: string;
  className?: string;
  href?: string;
  onClose?: () => void;
}
const NavDropDown: React.FC<NavDropDownProps> = ({ dropDownText, className, href, onClose }) => {
  const isItMobile = useCheckMobileScreen();
  const [open, setOpen] = useState(false);
  const url: string = href ? href : '';



  return (
    <div>
      {!isItMobile ?

        <div className={`flex justify-center mr-[30px] ${className}`}>

          <div onMouseLeave={() => setTimeout(() => {
            setOpen(false)
          }, 200)} className="relative">
            <Link href={''} onMouseOver={() => setTimeout(() => {
              setOpen(true)
            }, 200)} className={`flex items-center p-2 rounded-md  hover:text-purple font-poppins font-medium	 ${styles.NavDropDownBtn}`}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </Link>

            <ul
              className={`absolute right-[-15rem] p-8  bg-white z-10 grid grid-cols-3 gap-2 w-[100vh] transition font-poppins	 rounded-lg shadow-xl ${open ? "block" : "hidden"
                }`}
            >

              <li className="flex w-full  items-center p-6 border-b-2 border-gray-100  gap-3 text-sm hover:text-purple hover:font-semibold font-poppins">
                <Image src={appDev} alt="app development" />
                <Link href={'/app-development'}>App Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
                <Image src={webDev} alt="app development" />
                <Link href={'/web-development'}>Web Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={DigitalMarketing} alt="app development" />
                <Link href={'/digital-marketing'}>Digital Marketing</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={Seo} alt="app development" />
                <Link href={'/seo'}>Search Engine Optimization</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
                <Image src={GraphicDesigning} alt="app development" />
                <Link href={'/graphic-designing'}>Graphic Designing</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={SoftwareDevelopment} alt="app development" />
                <Link href={'/software-development'}>Software Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
                <Image src={DomainHosting} alt="app development" />
                <Link href={'/domain-and-hosting'}>Domain & Hosting </Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={uiux} alt="app development" className='m-0 p-0' />
                <Link href={'/ui-ux-designing'}>UI & UX Designing</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins ">
                <Image src={ProductPhotoShoot} alt="app development" />
                <Link href={'/product-photoshoot'}>Product Photoshoot</Link>
              </li>
            </ul>
          </div>

        </div> :
        <div className={`  ${className}`}>
          <div className={`relative ${styles.mobileDropDownmenu}`}>
            <button className={`flex items-center ps-0 rounded-md  font-poppins  text-lg font-medium	 ${styles.NavDropDownBtn} ${open && styles.NavDropDownBtnOpenState}`}
              onClick={() => setOpen(!open)}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </button>
            {open &&
              <ul
                className={`right-0 w-40 py-2  font-poppins	  w-full flex flex-wrap `}
              >

                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light font-poppins text-white">
                  <Link onClick={onClose} href={'/app-development'}>App Development</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/web-development'}>Web Development</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/digital-marketing'}>Digital Marketing</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/seo'}>Search Engine Optimization</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/graphic-designing'}>Graphic Designing</Link>

                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/software-development'}>Software Development</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/domain-and-hosting'}>Domain & Hosting </Link>

                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/ui-ux-designing'}>UI & UX Designing</Link>

                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/product-photoshoot'}>Product Photoshoot</Link>


                </li>
              </ul>
            }
          </div>
        </div>


      }

    </div>

  )
}

export default NavDropDown