import Link from 'next/link'
import React from 'react'

interface navItemProps {
  text: any,
  className?: string,
  href: string;
}
const NavItem: React.FC<navItemProps> = ({ text, className, href }) => {
  return (
    <div className='md:mr-[24px] '>
      <li className=''><Link href={href} className={`text-dark-grey cursor-pointer font-poppins text-base	font-medium ${className}`}>
        {text}
      </Link></li>
    </div>
  )
}

export default NavItem