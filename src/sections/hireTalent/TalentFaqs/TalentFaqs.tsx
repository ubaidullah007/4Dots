import Accordion from '@/components/Accordion/Accordion'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'

const TalentFaqs = () => {
  return (
    <div>
          <div className='container gap-2 pt-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Frequently Ask Questions'} />
            <GeneralHeading className={'text-center mb-[60px]'} heading={'Want to Know More?'} />

            <Accordion isBorder={true} heading='For which platforms do you create mobile apps?' text={'We specialize in developing mobile applications for both iOS and Android platforms, ensuring broad accessibility to your target audience.'} className={''}  />
            <Accordion isBorder={true} heading={'Which industries do you serve with your mobile app development services?'} text={'Our proficiency extends across diverse sectors, including healthcare, e-commerce, finance, entertainment, and more. We adapt our solutions to align with the distinctive demands of your specific industry.'} className={''} />
            <Accordion isBorder={true}  text={'Certainly, we provide comprehensive mobile app development services. Our team can assist you in brainstorming ideas, crafting designs, executing development, conducting testing, and overseeing the launch process, ensuring a streamlined and efficient experience.'} heading={'Can you manage the complete mobile app development journey, from concept to launch?'}  className={''}  />
            <Accordion isBorder={true} text={'Absolutely, we offer ongoing post-launch support and maintenance services to guarantee your app stays current, secure, and optimized for peak performance.'} heading={'Do you offer continuous maintenance and support for mobile applications?'}  className={''} />
            <Accordion isBorder={true} text={"The timeline and cost can fluctuate based on the app's complexity and your specific requirements. We offer personalized quotations and timelines following an initial discussion of your project particulars and objectives."} heading={'What is the typical timeframe and pricing structure for mobile app development projects?'}  className={''} />
        </div>
    </div>
  )
}

export default TalentFaqs