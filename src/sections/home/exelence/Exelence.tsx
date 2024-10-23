import { Button } from '@/components/Button/Button';
import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import { ArrowRightBlue } from '@/svg';
import React from 'react'
import Image from 'next/image';
import award1 from '../../../../src/images/award1.svg';
import award2 from '../../../../src/images/award2.svg';
import award3 from '../../../../src/images/award3.svg';
import award4 from '../../../../src/images/award4.svg';
import award5 from '../../../../src/images/award5.svg';
import award6 from '../../../../src/images/award6.svg';
import awardsCircleBG from '../../../../src/images/awardsCircleBG.svg';
import styles from './Exelence.module.css';

const Exelence = () => {

    const EXELECE_DATA = [
        {
            text: 'Achievement in Customer Satisfaction 2022',
            image: award1
        },
        {
            text: 'Americas Fastest  Growing Companies 2022',
            image: award2,
        },
        {
            text: 'Top 100 Global Outsourcing Providers and Advisors 2023',
            image: award3,
        },
        {
            text: 'IT Service Provider of the Year 2022',
            image: award4,
        },
        {
            text: 'Excellence in Customer Service 2022',
            image: award5,
        },
        {
            text: 'Best Agile Project 2022',
            image: award6,
        }
    ]

    const CLIENT_RATING = [
        {
            rating: '100+',
            text: 'Skilled team of Superheroes'
        },
        {
            rating: '70+',
            text: 'Global Footprint'
        },
        {
            rating: '99%',
            text: 'Customer Retention'
        }
    ]
    return (
        <div className='container py-[100px]'>
            <div className={styles.ExelenceWrapper}>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[60px]'>
                    <div className='max-w-[470px]'>
                        <SubHeading className={'text-left text-white mb-[8px]'} subHeading={'Excellence'} />
                        <GeneralHeading className={'text-left text-white mb-[8px] '} heading={'Our minimum bar for client delivery.'} />
                        <p className='text-white max-w-[400px] font-poppins text-lg	 leading-8	mb-[30px]'>Over 30 awards, accolades, and achievements showcase our quality and commitment to client success.</p>
                        <Button className='flex gap-1 items-center font-poppins font-semibold text-base cursor-pointer	 text-white'>Our trophy cabinet <ArrowRightBlue white /></Button>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]'>
                            {
                                EXELECE_DATA.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='mx-auto mb-[15px]'>
                                                <Image src={data.image} alt={data.text} className="mx-auto" height={80} />
                                            </div>
                                            <p className='font-poppins text-xs font-normal text-grey-scale text-center'>{data.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='max-w-[950px] mx-auto mt-[60px]'>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-6'>
                        {CLIENT_RATING.map((data, index) => {
                            return (
                                <div key={index} className={styles.ratingSection}>
                                    <Image src={awardsCircleBG} alt="rating image" />
                                    <div className={styles.ratingText}>
                                        <GeneralHeading heading={data.rating} className={'text-center text-white'} />
                                        <p className='text-lg font-poppins text-grey-scale text-center font-semibold min-w-[130px] leading-7 mt-4'>{data.text}</p>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Exelence