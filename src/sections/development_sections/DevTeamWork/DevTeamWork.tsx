import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import { ArrowDown, ArrowUp } from '@/svg';
import React, { useState } from 'react'
import styles from './TeamWork.module.css';
import laptopVission from '../../../images/services/laptop&vissionPro.svg';
import Image from 'next/image';
import Accordion from '@/components/Accordion/Accordion';
const DevTeamWork = ({teamWork}:any) => {
  
  return (
    <div className={styles.teamWrapper}>
      <div className='container'>
        <SubHeading className={'text-center mb-[8px]'} subHeading={teamWork.subHeading} />
        <GeneralHeading className={'text-center mb-[8px]'} heading={teamWork.generalHeading} />
        <Text text={teamWork.subGenHeading} className={'text-center text-grey font-normal mt-[8px] mb-[60px]'} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          <div>
            {teamWork?.TEAM_WORK_DATA?.map((data:any) => {
              return (
                <div key={data.id}>
                <Accordion  heading={data.title} text={data.content}  className="border-0" isBorder={false} />
                </div>
              )
            })}
          </div>
          <div className={styles.imageSection}><Image src={laptopVission} alt="laptop And vission" /> </div>
        </div>
      </div>
    </div>

  )
}

export default DevTeamWork