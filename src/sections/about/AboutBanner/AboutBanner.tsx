import Text from "@/components/Text/Text";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../../src/images/about/prof_comms_skills_0.jpg";
const AboutBanner = () => {
  return (
    <div className="container py-[60px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <h1 className={`main-heading font-poppins mb-[24px]`}>
           Who We Are
         
          </h1>
          <Text
            text={
              "We pride ourselves on being a comprehensive creative and digital agency, offering a spectrum of services tailored to meet the diverse needs of our clients. Our global reach allows us to collaborate with some of the most prominent brands worldwide. From conceptualization to execution, we passionately craft innovative strategies and deliver impactful solutions that resonate with audiences across various industries. Our dedication to excellence drives us to consistently push boundaries and deliver results that exceed expectations, making us a trusted partner for leading brands aiming to make a lasting impact in the digital landscape"
            }
            className="text-grey text-center md:text-left font-normal md:max-w-[483px]"
          />
        </div>
        <div className="mt-[30px] md:mt-0">
          <Image src={aboutImage} alt="about Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
