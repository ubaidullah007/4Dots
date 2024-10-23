import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import { Card } from '@/components/card/Card';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import styles from "./DevWeServe.module.css"
const  DevWeServe = ({weServer}:any) => {


  return (
    <div className='bg-purple-lite'>
      <div className='container py-[100px]'>
        <SubHeading className={'text-center mb-[8px]'} subHeading={weServer.subHeading} />
        <GeneralHeading className={'text-center mb-[8px]'} heading={weServer.generalHeading} />
        <Text text={weServer.subGenHeading} className={'text-center text-grey font-normal mt-[8px] mb-[60px] max-w-[903px] mx-auto'} />
        <div className='flex justify-center flex-wrap gap-x-[30px] gap-y-[60px]'>
          {
            weServer.WE_SERVER_DATA.map((data : any) => {
              return (
                <Card className={`lg:w-[calc(33.3%-30px)] md:w-[calc(50%-30px)] ${styles.WeServeCard}` } key={data.id}>
                  <div className='mb-[17px]'>
                    {/* <Image src={`./services_images/${data.image}.svg`} alt={data.subHeading} width={50} height={50}/> */}
                  </div>
                  <Text className='mb-[17px] font-semibold text-primary-dark ' text={data.title} />
                  <Text className='text-grey font-normal' text={data.text} />
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default  DevWeServe