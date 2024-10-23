import Accordion from '@/components/Accordion/Accordion'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'

const  DevFaq = ({faq}:any) => {
    return (
        <div className='container gap-2 pt-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Frequently Ask Questions'} />
            <GeneralHeading className={'text-center mb-[60px]'} heading={'Some Of Our frequently Asked Questions'} />
            {
                faq?.accordion?.map((item:any)=>{
                    return(
                        <div key={item.id}>
                            <Accordion isBorder={true} heading={item.heading} text={item.desc}  className=''/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default  DevFaq