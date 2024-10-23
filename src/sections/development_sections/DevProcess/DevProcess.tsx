import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './DevProcess.module.css';


interface ProcessDataType {
    id: number,
    title: string;
    icon: string;
    content: string;
}


function DevProcess({developmentProcess}:any) {
    const [activeContent, setActiveContent] = useState<ProcessDataType>(developmentProcess?.PROCESS_DATA[0]);
    const [cardAnimation, setCardAnimation] = useState('');

    const handleLinkHover = (processData: ProcessDataType) => {
        setCardAnimation(styles.cardAnimation)
        setCardAnimation('')
        setTimeout(() => {
            setActiveContent(processData);
        }, 400);
       
    };

    return (
        <div className={styles.processWrapper}>
            <div className="container">
                <SubHeading className={'text-center mb-[8px]'} subHeading={developmentProcess.subHeading} />
                <GeneralHeading className={'text-center mb-[8px]'} heading={developmentProcess.generalHeading} />
                <Text text={developmentProcess.subGenHeading} className={'text-center text-grey font-normal mt-[8px] mb-[60px]'} />
                <div className='flex md:flex-row flex-col align-middle justify-start gap-[30px] w-full'>
                    <div className="md:w-[35%] w-[100%]">
                        {developmentProcess?.PROCESS_DATA?.map((data:any) => (
                            <div
                                key={data.id}
                                className={styles.linksSection}
                                onMouseEnter={() => handleLinkHover(data)}
                            >
                                <p className='font-poppins text-primary-dark font-semibold text-lg	md:text-right mb-[40px] cursor-pointer transition'> {data.title}</p>
                                <span className={`${styles.blueCircle} transition`}></span>
                            </div>
                        ))}
                    </div>
                    <div className={`md:w-[calc(65%-30px)] w-[100%]  ${styles.rught}`}>
                        {activeContent && (
                            <div className={`${styles.contentCard} ${cardAnimation}`}>
                                <Image src={`./services_images/${activeContent.icon}.svg`} alt="Icon"  height={40} width={40}/>
                                <h2 className='font-poppins text-primary-dark font-semibold text-lg mt-[8px]'>{activeContent.title}</h2>
                                <p className='font-poppins text-grey font-normal text-lg mt-[16px] leading-8'>{activeContent.content}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>

    );


}
export default DevProcess;
