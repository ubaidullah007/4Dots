import { Card } from '@/components/card/Card';
import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import Image from 'next/image';
import React from 'react'

const DevPlatforms = ({platforms}:any) => {

    return (
        <div className='container pt-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={platforms.subHeading} />
            <GeneralHeading className={'text-center mb-[60px]'} heading={platforms.generalHeading} />

            <div className='flex justify-center flex-wrap gap-x-[30px] gap-y-[60px]'>
                {
                    platforms.DEV_PLATFROMS.map((data:any) => {
                        return (
                            <Card className={'md:w-[calc(33.3%-30px)]  lg:w-[calc(20%-30px)]   w-[calc(50%-30px)]  flex flex-col items-center justify-center'} key={data.id}>
                                <div className='mb-[17px] '>
                                    <Image src={`./services_images/${data.icon}.svg`} alt={data.title} width={40} height={40}/>
                                </div>
                                <h5 className='mb-[17px] font-poppins text-lg font-semibold text-center'>{data.title}</h5>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DevPlatforms