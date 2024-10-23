
import { ArrowDown, ArrowUp } from '@/svg';
import Image from 'next/image';
import React, { useState } from 'react'
import styles from './Accordion.module.css';

interface accordionProps {
    heading: string;
    text: string;
    image?: any;
    className: string;
    isBorder:boolean;
    }
const Accordion: React.FC<accordionProps> = ({ heading, text, image, className,isBorder }) => {
    const [openAccordion, setOpenAccordion] = useState(false);


    const handleAccordion = () => {
        setOpenAccordion(!openAccordion)
    }

    return (
        <div className={`${styles.accordionWrapper}  ${!openAccordion && isBorder  ? styles.border : styles.shadow} ${className} `}>
            <div onClick={handleAccordion} className={styles.accordionHeader}>
                <div className='flex gap-[16px] items-center'>
                    {image && <Image src={image} alt={heading} width={30} height={30} />}
                    <h4 className='text-lg font-poppins font-semibold'>{heading}</h4>
                </div>

                <div>    {openAccordion ? <ArrowUp /> : <ArrowDown />}</div>

            </div>
            <div className={`${styles.accordionContent}   ${openAccordion ? styles.accordionOpenn: ''}`}>
                <p className={`font-poppins text-grey font-normal text-lg  leading-8  ${openAccordion && isBorder && styles.borderTop}`}>{text}</p>
            </div>
        </div>
    )
}

export default Accordion