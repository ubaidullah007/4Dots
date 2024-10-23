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
const DropDownAbout: React.FC<NavDropDownProps> = ({ dropDownText, className, href, onClose }) => {
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
              className={`absolute w-72 right-[-50px] p-8  bg-white z-10 grid grid-cols-1 gap-2  transition font-poppins	 rounded-lg shadow-xl ${open ? "block" : "hidden"
                }`}
            >

              <li className="flex w-full  items-center p-3 border-b-2 border-gray-100  gap-3 text-sm hover:text-purple  font-poppins">
                <Link href={'/about'}>Who We Are</Link>
              </li>
              <li className="flex w-full items-center p-3 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple    font-poppins">
                <Link href={'/about#Navigating-Organizational-Structure'}>Organizational Chart</Link>
              </li>
              <li className="flex w-full items-center p-3 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple    font-poppins">
                <Link href={'/about#our-story'}> Our Story</Link>
              </li>
              <li className="flex w-full items-center p-3 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple    font-poppins">
                <Link href={'/about#csr'}> CSR</Link>
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
                  <Link onClick={onClose} href={'/about'}>Who We Are</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/about#Navigating-Organizational-Structure'}>Organizational Chart</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/about#our-story'}>Our Story</Link>
                </li>
                <li className="flex  items-center px-3 py-2 text-base w-1/2 font-light text-white font-poppins">
                  <Link onClick={onClose} href={'/about#csr'}>CSR</Link>
                </li>
                
              </ul>
            }
          </div>
        </div>


      }

    </div>

  )
}

export default DropDownAbout