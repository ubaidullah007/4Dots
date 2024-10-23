import { Card } from '@/components/card/Card'
import React from 'react'
import { JOBS_DATA } from './jobsData'
import styles from './Jobs.module.css'
import { ArrowRightBlueLong, ClockIcon } from '@/svg'
import Link from 'next/link'
const Jobs = () => {
  return (
    <div className='mb-[200px]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px] mt-[60px]'>
          {
            JOBS_DATA.map((data: any, index) => {
              return (
                <Card className={styles.JobsCard} key={index}>
                  <h5 className='mb-[17px] font-poppins text-2xl	 font-semibold'>{data.title}</h5>
                  <p className={`text-grey font-poppins text-lg font-normal mb-[12px] ${styles.jobDes}`}>{data.description}</p>
                  <Link href={`/careers/${data.id}`} className={styles.arrowBtn + ' font-poppins'}>
                    Apply Now
                    <ArrowRightBlueLong />
                  </Link>
                  <div className={`text-sm	text-grey font-normal font-poppins mt-[40px] flex items-center gap-3`}>
                    <span>{data.position}</span>

                    <div className='border-l'><p className='ml-[14px] flex gap-2 items-center'><ClockIcon/> {data.duration}</p>  </div>
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

export default Jobs