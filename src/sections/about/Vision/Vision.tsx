import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import React from 'react'
import styles from './Vision.module.css';

export const Vision = () => {
    const VISION_DATA = [
        {
        },
        {
            title: '2015',
            text: 'At 4Dots Solutions, our journey began in 2015 with a commitment to prioritize the gathering of requirements, resources, and information for every projects initiation.',
            class: 'text-left'
        },
        {
            title: '2016',
            text: 'Building on our foundation, 2016 saw 4Dots Solutions maintaining its unwavering dedication to the first and foremost priority: gathering requirements, resources, and information for project commencement.',
            class: 'text-right'
        },
        {
        },
        {
        },
        {
            title: '2018',
            text: 'As the years progressed, our steadfast approach continued into 2018, where 4Dots Solutions prioritized the meticulous gathering of requirements, resources, and information for each projects successful start.',
            class: 'text-left'
        },
        {
            title: '2020',
            text: 'In 2020, 4Dots Solutions stood firm in its commitment, ensuring that the first and foremost priority remained unchanged – thorough gathering of requirements, resources, and information to kickstart projects.',
            class: 'text-right'
        },
        {},
        {},
        {
            title: '2022',
            text: 'The year 2022 marked another chapter in our journey, with 4Dots Solutions maintaining its consistent dedication to gathering requirements, resources, and information as the cornerstone of project initiation.',
            class: 'text-left'
        },

        {
            title: '2023',
            text: 'Stepping into 2023, 4Dots Solutions remains true to its principles. We continue to prioritize the comprehensive gathering of requirements, resources, and information, ensuring the success of every project we undertake.',
            class: 'text-right'
        },
        {}
    ]
    return (
        <div className={styles.visionWrapper}>
 <div className='container'>
            <div className='max-w-[836px] mx-auto'>
                <SubHeading className={'text-center'} subHeading={'Our Vision'} />
                <GeneralHeading className={'text-center mb-[60px]'} heading={'How our vision became reality'} />
                <div className={`grid md:grid-cols-2 gap-x-[72px] gap-x ${styles.VISONCARD}` }>
                    {VISION_DATA.map((data, index) => {
                        return (
                            <div className={styles.vissionTile} key={index}>
                                <h4 className={`md:text-2xl	text-1xl font-bold capitilize text-dark-grey font-poppins ${data.class}`}>{data.title}</h4>
                                <Text text={data.text}  className={`${data.class} text-grey font-normal	mt-[8px] leading-[29px]`}/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
        </div>
       

    )
}
