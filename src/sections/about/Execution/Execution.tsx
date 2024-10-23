import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import React from 'react'
import styles from './Execution.module.css';
import executionImage from '../../../../src/images/about/Organogram.png'
import Image from 'next/image';
const heading = " Organizational Structure"
export const Execution = () => {
    return (
        <div id='Navigating-Organizational-Structure' className={styles.executuonWrapper}>
            <div className='container'>
                <SubHeading className={'text-left mb-[8px]'} subHeading={''} />
                <GeneralHeading className={'text-left max-w-[900px] leading-[64px] mb-[32px]'} heading={heading} />
                <div>
                    <Image className='w-full' src={executionImage} alt="execution image" />
                </div>
            </div>

        </div>
    )
}
