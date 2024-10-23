import React from 'react'
interface textProps{
    text: any,
    className?:string,
}
const Text:React.FC<textProps> = ({text,className}) => {
  return (
    <div>
        <p className={`font-poppins text-lg ${className}`}>{text}</p>
    </div>
  )
}

export default Text