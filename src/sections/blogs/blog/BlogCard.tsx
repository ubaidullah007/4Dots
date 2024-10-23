import React from 'react'
import { BLOGS_DATA } from './BlogData'
import styles from './BlogCard.module.css';
import { Card } from '@/components/card/Card';
import Image from 'next/image';
import { ArrowUpRight } from '@/svg';
import Link from 'next/link';

export const BlogCard = () => {
  return (
    <div>
            <div className='container'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  mt-[60px]'>
                {
                    BLOGS_DATA.map((data, index) => {
                        return (
                            <Card className={styles.blogCard} key={index}>
                                <div className={`mb-[32px] ${styles.blogImage}`}>
                                    <Image src={data.image} alt={data.title} className="w-full"/>
                                </div>
                                <h5 className='mb-[12px] font-poppins text-sm text-purple font-semibold'>{data.title}</h5>
                                <Link href={`/blogs/${data.id}`} className='flex items-center justify-between mb-[12px]'> <h4 className='text-2xl font-bold font-poppins text-dark-grey'>{data.heading}</h4> <ArrowUpRight /> </Link>
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
    </div>
  )
}
