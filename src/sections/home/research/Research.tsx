import { Card } from '@/components/card/Card'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import { ArrowUpRight } from '@/svg';
import React from 'react'
import Image from 'next/image';
import productImage from '../../../../src/images/leadership.svg';
import mentalModel from '../../../../src/images/mentalModel.svg';
import wiframeImage from '../../../../src/images/wireFraming.svg';
import Avatar1 from '../../../../src/images/Avatar1.svg';
import Avatar2 from '../../../../src/images/Avatar2.svg';
import Avatar3 from '../../../../src/images/Avatar3.svg';
import styles from './Research.module.css';

const Research = () => {
    const RESEARCH_DATA = [
        {
            image: productImage,
            title: 'Management',
            heading: 'Bill Walsh leadership',
            text: 'Like to know the secrets of transforming a 2-14 team into',
            avatar: Avatar1,
            userName: 'Alec Whitten',
            date: '17 Jan 2022'
        },
        {
            image: mentalModel,
            title: 'Product',
            heading: 'PM mental models',
            text: 'Mental models are simple expressions of complex processe',
            avatar: Avatar2,
            userName: 'Demi WIlkinson',
            date: '16 Jan 2022'
        },
        {
            image: wiframeImage,
            title: 'Design',
            heading: 'What is Wireframing?',
            text: 'Introduction to Wireframing and its Principles. Learn from the best',
            avatar: Avatar3,
            userName: 'Candice Wu',
            date: '15 Jan 2022'
        },
    ]
    return (
        <div className='container'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Articles'} />
            <GeneralHeading className={'text-center'} heading={'Research'} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  mt-[60px]'>
                {
                    RESEARCH_DATA.map((data, index) => {
                        return (
                            <Card className={styles.ResearhCard} key={index}>
                                <div className={`mb-[32px] ${styles.researchImage}`}>
                                    <Image src={data.image} alt={data.title} className="w-full"/>
                                </div>
                                <h5 className='mb-[12px] font-poppins text-sm text-purple font-semibold'>{data.title}</h5>
                                <div className='flex items-center justify-between mb-[12px]'> <h4 className='text-2xl font-bold font-poppins text-dark-grey'>{data.heading}</h4> <ArrowUpRight /> </div>
                                <p className='text-grey font-poppins text-lg font-normal mb-[15px]'>{data.text}</p>
                                <div className='flex items-center gap-[12px]'>
                                    <Image src={data.avatar} alt={data.title} height={40} width={40} />
                                    <div>
                                        <p className='font-poppins text-sm font-medium text-dark-grey'>{data.userName}</p>
                                        <span className='font-poppins text-sm text-light-grey font-normal'>{data.date}</span>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Research