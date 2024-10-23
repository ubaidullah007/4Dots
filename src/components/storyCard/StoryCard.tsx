import { ArrowRightIcon } from '@/svg'
import React from 'react'
import { Button } from '../Button/Button'
import styles from './StoryCard.module.css';
import Link from 'next/link';

export const StoryCard = () => {
  return (
    <div className='container'>
      <div className={styles.storyCardWrapper}>
        <div className='flex gap-[30px] md:flex-row flex-col justify-between items-center'>
          <div>
            <h4 className='text-2xl	font-poppins font-bold text-white mb-[12px]'>Reach Out To Us </h4>
            <p className='max-w-[500px] text-lg	font-normal	leading-7	mb-[12px]	font-poppins  text-white'>We're here to connect, collaborate, and cater to your inquiries. Whether you have questions, suggestions, or want to explore potential partnerships, don't hesitate to reach out.</p>
          </div>
          <div>
            <Link href={'/contact'}>
              < Button className={'bg-dark-grey text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg hover:shadow-custom-button'}>
                Get in Touch <ArrowRightIcon />
              </Button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}
