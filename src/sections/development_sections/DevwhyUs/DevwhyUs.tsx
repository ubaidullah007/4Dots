import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import { Card } from '@/components/card/Card';
import Text from '@/components/Text/Text';
import styles from './whyUs.module.css'
const DevWhyUs = ({whyUs}:any) => {


    return (
        <div className='container py-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={whyUs.subHeading} />
            <GeneralHeading className={'text-center mb-[8px]'} heading={whyUs.generalHeading} />
            <Text text={whyUs.subGenHeading} className={'text-center text-grey font-normal mt-[8px] mb-[60px] max-w-[903px] mx-auto'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[30px] gap-y-[60px]'>
                {
                    whyUs.WHY_US_DATA.map((data:any) => {
                        return (
                            <Card className={styles.whyUsCard} key={data.id}>
                                <div className='mb-[17px]'>
                                    <h2 className='mb-[17px] font-poppins text-5xl	font-bold text-grey-half'>{data.heading}</h2>
                                </div>
                                <Text className='mb-[17px] font-semibold text-primary-dark ' text={data.title} />
                                <Text className='text-grey font-normal' text={data.text} />
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DevWhyUs