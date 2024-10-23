import { Button } from '@/components/Button/Button';
import { ArrowRightIcon } from '@/svg';
import Image from 'next/image';
import React from 'react'
import styles from './Dev.Idea.module.css';
import ImageUser from '../../../images/services/ideaUser.png';
import Link from 'next/link';

const DevIdea = ({devIdea}:any) => {
    return (
        <div className={styles.IdeaWrapper}>
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='md:text-5xl text-3xl	font-bold capitilize text-white font-poppins mb-[24px] max-w-[440px] leading-[56px]'>Share Your Idea
                            With Us Today And <span style={{color: '#FFD600'}}> GO PREMIUM</span> {devIdea.heading}
                        </h1>
                        <Button className={'bg-dark-grey text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg hover:shadow-custom-button'}>
                         <Link href={'/contact'} className='flex items-center gap-3'>
                                    Get Started
                                    <ArrowRightIcon />
                                </Link>
                        
                        
                        
                        </Button>

                    </div>
                    <div className='mt-[30px] md:mt-0'>
                        <Image src={ImageUser} alt="user" />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default DevIdea