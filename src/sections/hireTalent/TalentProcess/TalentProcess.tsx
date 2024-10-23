import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import React from 'react'
import styles from './TalentProcess.module.css';
const TalentProcess = () => {
    const PROCESS_DATA = [
        {
            title: 'Choose the Expert Resource',
            description: 'Opt for an expert engineer, developer and designer from a wide pool of 1300+ resources. We are problem solvers who value integrity.'
        },
        {
            title: 'Begin with Initial Interview',
            description: 'Opt for an expert engineer, developer and designer from a wide pool of 1300+ resources. We are problem solvers who value integrity.'
        },
        {
            title: 'Hire Developers within a Day',
            description: 'We will match you with an expert resource based on your project requirements and make your engineering team within 24 hours.'
        }
    ]

    return (
        <div className={styles.ProcessWrapper}>
            <div className='container'>
                <SubHeading className={'text-center mb-[8px]'} subHeading={'Our 3 step process'} />
                <GeneralHeading className={'text-center mb-[8px]'} heading={'Process To Assemble a Developer Team'} />
                <Text text={'Our 3 step process takes the team from inception to finished product. 4Dots Solutions ensures hiring a dedicated development team within 24 hours.'} className='text-grey max-w-[900px] text-center mx-auto' />


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  mt-[60px]'>
                    {
                        PROCESS_DATA.map((data, index) => {
                            return (
                                <div className={styles.processCard} key={index}>
                                       <div className={styles.blueDot}> 
                                        
                                       </div>
                                    <h5 className='mb-[5px] font-poppins text-2xl text-primary-dark font-semibold max-w-[223px]'>{data.title}</h5>
                                    <p className='text-grey font-poppins text-lg font-normal mb-[15px] max-w-[360px]'>{data.description}</p>

                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </div>

    )
}

export default TalentProcess