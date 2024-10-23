import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import Image from 'next/image'
import React from 'react'
import CeoImage from '../../../../src/images/about/CeoImage.svg';
import member1Image from '../../../../src/images/about/teamMember1.svg';
import member2Image from '../../../../src/images/about/teamMember2.svg';
import member3Image from '../../../../src/images/about/teamMember3.svg';
import member4Image from '../../../../src/images/about/teamMember4.svg';
import styles from './Team.module.css';
import Link from 'next/link';

const Team = () => {

    const TEAM_DATA = [
        {
            title: 'team member 1',
            image: member1Image
        },
        {
            title: 'team member 2',
            image: member2Image
        },
        {
            title: 'team member 3',
            image: member3Image
        },
        {
            title: 'team member 4',
            image: member4Image
        }

    ]
    return (
        <div className='container py-[100px]'>
            <SubHeading className={'text-center uppercase'} subHeading={'OUR LEADERSHIP TEAM'} />
            <GeneralHeading className={'text-center uppercase w-1/2 m-auto'} heading={'Industry-recognized. Award-winning.'} />
            <div className='flex justify-center items-center gap-[27px] mt-[100px] mb-[200px]'>
                <div className='w-[50%] md:w-auto'>
                    <Image src={CeoImage} alt="Our Ceo Image" />
                </div>
                <div className={`${styles.ceoMsg} w-[50%] md:w-auto`}>
                    <Text text={`4Dots Solutions hires great people from a wide variety of backgrounds, which simply makes our company stronger, and we couldn't be prouder of that.”`} className="text-white font-normal" />
                    <Link href='about/about-ceo' className='text-blue-400'>Learn more about CEO</Link>
                    <p className='text-white text-base	font-poppins font-normal mt-[40px]'>CEO
                        <br /><span className='text-sm'>Julia Pasternack</span></p>
                </div>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='mt-[50px] mb-[30px] md:mb-0'>
                    <SubHeading className={'text-left uppercase mb-[8px]'} subHeading={'Our Team'} />
                    <GeneralHeading className={'text-left leading-[64px] max-w-[555px]'} heading={'Every year our software developers, QA engineers, designers, and project managers work on hundreds of exciting projects...'} />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    {TEAM_DATA.map((data, index) => {
                        return (
                            <div key={index}>
                                <Image src={data.image} alt={data.title} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team