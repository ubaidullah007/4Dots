import React from 'react'

interface HeadingProps {
  className?: string;
  heading: string | any;
}

const GeneralHeading: React.FC<HeadingProps> = ({ className, heading }) => {
  return (
    <h1 className={`${className} md:text-5xl text-3xl	font-bold capitilize text-primary-dark font-poppins }`}>
      {heading}
    </h1>
  )
}

export default GeneralHeading