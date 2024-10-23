import React from 'react'

interface SubHeadingProps {
  className?: string;
  subHeading: string | any;
}

const SubHeading: React.FC<SubHeadingProps> = ({ className, subHeading }) => {
  return (

    <h4 className={`md:text-2xl	text-1xl font-bold capitilize text-purple font-poppins ${className}`}>
      {subHeading}
    </h4>

  )
}

export default SubHeading