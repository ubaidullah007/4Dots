import React from 'react'
import styles from './Footer.module.css';
import footerLogo from '../../../src/images/NYV-Logo-White (1).png';
import Image from '../../../node_modules/next/image';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/svg';
import { FOOTER_LINKS, OUR_OFFICES_DATA } from './FooterData';
import CopyRight from './CopyRight';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className={styles.footerWrapper} >
      <div className='container'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1  '>
          <div className='mt-[60px] '>
            <Image src={footerLogo} alt="footer logo" height={80} />
            <p className='text-half-whiite mt-[24px] ml-[8px] text-base	font-poppins font-light		'>4Dots Solutions: Innovating IT services to optimize client and team engagement, delivering positive results through technology solutions.</p>
            <ul className={`flex gap-3 mt-[24px] ml-[5px] ${styles.socialICons}`}>
              <li className='cursor-pointer'>
                <a><LinkedInIcon /></a>
              </li>
              <li className='cursor-pointer'>
                <a><FacebookIcon /></a>
              </li>
              <li className='cursor-pointer'>
                <a><TwitterIcon /></a>
              </li>
            </ul>
          </div>

          {FOOTER_LINKS.map((data: any, index: number) => {
            return (
              <div key={index} className=' text-left md:text-center lg:w-[80%] sm:w-full lg:ml-[70px] sm:ml-0'>
                <h4 className='text-white font-bold text-base mt-[60px] font-poppins'>{data.title}</h4>
                <ul className='mt-[24px]'>
                  {data.links.map((linkData: any, linkIndex: number) => {
                    return (
                      <li className='mb-[8px]' key={linkIndex}>
                        {linkData.urlLink ? (
                          <Link href={linkData.urlLink} className='justify-start md:justify-center flex text-half-whiite text-base cursor-pointer hover:underline transition font-poppins font-light'>
                            {linkData.icon && <span className='mr-2'>{linkData.icon}</span>}
                            {linkData.link}
                          </Link>
                        ) : (
                          <span className=' justify-start md:justify-center flex text-half-whiite text-base cursor-pointer hover:underline transition font-poppins font-light'>
                            {linkData.icon && <span className='mr-2'>{linkData.icon}</span>}
                            {linkData.link}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

        </div>
        <h4 className='text-white font-bold  text-base	mt-[70px] font-poppins mb-[24px]'>Our Offices</h4>
        <div className='grid  md:grid-cols-3 grid-cols-1 md:gap-3 gap-6'>
          {OUR_OFFICES_DATA.map((data, index) => {
            return (
              <div className='flex justify-start items-start gap-3' key={index}>
                <Image className='w-24' src={data.image} alt={data.title} />
                <div>
                  <div className='flex gap-2'> <Image src={data.icon} alt={data.title} /> <h4 className='text-white font-poppins text-base font-medium	'> {data.title}</h4> </div>
                  {/* <p className='text-half-whiite font-poppins max-w-[260px] font-light my-[8px] text-base'>{data.infoText}</p>
                  <p className='text-half-whiite font-poppins max-w-[260px] font-light my-[8px] text-base'>{data?.optionalData}</p>
                  <Link href={`tel:${data?.linkPhoneNo}`} className='text-half-whiite font-poppins font-light text-base'>{data.phoneNumber}</Link> */}
                </div>
              </div>
            )
          })}
        </div>
        <CopyRight />
      </div>

    </div>

  )
}

export default Footer