import React from 'react'

const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='border-t mt-[60px] border-grey'>
            <div className='flex md:justify-between py-[30px] items-center  md:flex-row flex-col'>
                <div className='text-sm text-grey-scale font-poppins font-light	'>&copy;{}  4Dots Solutions  <span className='mx-[15px]'>|</span>  All right reserved</div>
                <ul className='flex gap-[40px] mr-[30px] md:mt-0 mt-[10px]'>
                    <li className='text-grey-scale font-poppins font-light text-sm	hover:underline cursor-pointer'> <a> Terms</a></li>
                    <li className='text-grey-scale font-poppins font-light text-sm	hover:underline cursor-pointer'> <a> Privacy</a></li>
                    <li className='text-grey-scale font-poppins font-light text-sm	hover:underline cursor-pointer'> <a> Cookies</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CopyRight