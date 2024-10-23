import TalentFaqs from "@/sections/hireTalent/TalentFaqs/TalentFaqs";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import React from "react";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import Text from "@/components/Text/Text";
import Image from "next/image";
import workhardImage from "../../images/about/workHard.png";
import HireTalentBanner from "@/sections/hireTalent/HireTalentBanner/HireTalentBanner";
import TalentCard from "@/sections/hireTalent/TalentCard/TalentCard";
import TalentProcess from "@/sections/hireTalent/TalentProcess/TalentProcess";
import Head from "next/head";

const index = () => {
  return (
    <div className="">
      <Head>
        <title>Our Team | 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Empower your projects with top tech talent. Our 'Hire Talent' page connects you with experts in software, AI, blockchain, and more. Find your next team member."
          key="desc"
        />
      </Head>
      <HireTalentBanner />
      <TalentProcess />
      <TalentCard />
      <div className="container">
        <div className="grid md:grid-cols-2 grid-col-1 gap-[30px]">
          <div className="mt-[16px]">
            <Image src={workhardImage} alt="devOps Image" />
          </div>
          <div>
            <SubHeading className={"mb-[8px]"} subHeading={"Why"} />
            <GeneralHeading className={""} heading={"4Dots Solutions"} />
          
            <Text
              text={`We pride ourselves on being a comprehensive creative and digital agency, offering a spectrum of services tailored to meet the diverse needs of our clients. Our global reach allows us to collaborate with some of the most prominent brands worldwide. From conceptualization to execution, we passionately craft innovative strategies and deliver impactful solutions that resonate with audiences across various industries. Our dedication to excellence drives us to consistently push boundaries and deliver results that exceed expectations, making us a trusted partner for leading brands aiming to make a lasting impact in the digital landscape.
              `}
              className="text-grey font-normal pt-16"
            />
          </div>
        </div>
      </div>

      <TalentFaqs />
      <ContactForm
        ContatctSubHeading={`Let Us Know What You’re Looking for,
We’ll Build it for You`}
        ContactGeneralHeading={"Let’s Work Together"}
        ContactInfoCard={false}
        className={"pb-[200px]"}
      />
    </div>
  );
};

export default index;
