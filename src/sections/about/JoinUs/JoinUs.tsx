import GeneralHeading from "@/components/Heading/GeneralHeading";
import Text from "@/components/Text/Text";
import React from "react";
import styles from "./JoinUs.module.css";
import joinUsImage from "../../../../src/images/OurStory.jpg";
import CSR from "../../../../src/images/csr.jpg";
import Image from "next/image";
import SubHeading from "@/components/Heading/SubHeading";
import { Button } from "@/components/Button/Button";
import Link from "next/link";

const JoinUs = () => {
  const csr = "At 4Dots Solutions, Corporate Social Responsibility (CSR) is the cornerstone of our ethos. We integrate sustainability into our operations by minimizing our environmental impact, engaging in community development, and upholding ethical business practices. Our commitment extends to empowering communities through education initiatives and supporting employee volunteerism. Through transparent reporting and continuous evaluation, we strive for meaningful, lasting contributions, aligning our technology-driven solutions with a responsible approach for a brighter, more sustainable future"
  const text =
    "Founded with a passion for innovation and technology 4Dots Solutions embarked on a remarkable journey that has seen us evolve into a leading Software House. From our modest beginnings, w ve cultivated a legacy of dedication, teamwork, and an unwavering pursuit of excellence. Over the years, we have built enduring client relationships while adapting to the dynamic digital landscape. Our commitment to delivering groundbreaking software solutions continues to drive our success. We take pride in embracing change, fostering creativity, and pushing the boundaries of what of possible in the software industry.";
  return (
    <div className={styles.joinUsWrapper}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-x-[73px] " id="our-story">
          <div className="flex-col flex justify-center">
            <GeneralHeading
              className={"text-left text-white"}
              heading={"Our Story"}
            />
            <Text
              text={text}
              className="text-white font-normal	mt-[16px] leading-8	"
            />
          </div>
          <div>
            <Image src={joinUsImage} alt="user" />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-x-[73px] my-20 md:my-32" id='csr'>
          <div className="flex-col md:flex justify-center  hidden">


            <div>
              <Image src={CSR} alt="user" />
            </div>
          </div>
          <div>
            <GeneralHeading
              className={"text-left text-white mt-5 md:mt-0"}
              heading={"Commitment To CSR"}
            />
            <Text
              text={csr}
              className="text-white font-normal	mt-[16px] leading-8	"
            />
          </div>
          <div className="block md:hidden">
            <Image src={CSR} alt="user" />

          </div>
        </div>
        <div className="mt-[80px]">
          <SubHeading
            className={"text-white text-center mb-[8px]"}
            subHeading={"Let’s Join"}
          />
          <h1 className="text-6xl/[64px] font-bold capitilize text-white font-poppins text-center max-w-[430px] mx-auto leading-[72px]">
            Join us on this journey.
          </h1>
          <div className="flex justify-center gap-3 mt-[40px]">
            <Link href={"/contact"}>
              <Button
                className={
                  "bg-dark-grey  text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg  hover:translate-y-[-3px]"
                }
              >
                Talk to Sales
              </Button>
            </Link>
            <Link href={"/careers"}>
              <Button
                className={
                  "border text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg hover:translate-y-[-3px]"
                }
              >
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
