import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import { VideoPlayIcon } from "@/svg";
import React from "react";
import Image from "next/image";
import adobe from "../../../../src/images/adobe.svg";
import companyrely from "../../../../src/images/jj.svg";
import google from "../../../../src/images/google.svg";
import hp from "../../../../src/images/hp.svg";
import motorolla from "../../../../src/images/motorolla.svg";
import nextroll from "../../../../src/images/nextroll.svg";
import pinterest from "../../../../src/images/pinterest.svg";
import rollsroyce from "../../../../src/images/rollsroyce.svg";
import salesforce from "../../../../src/images/salesforcerely.svg";
import styles from "./RelyOnUs.module.css";

const COMPANIES_DATA = [
  {
    image: google,
    link: "Read case study",
  },
  // {
  //     image: nextroll,
  //     link: 'Watch testimonial',
  //     playIcon: <VideoPlayIcon />
  // },
  {
    image: pinterest,
    link: "Read case study",
  },
  // {
  //     image: salesforce
  // },
  {
    image: adobe,
  },
  // {
  //     image: companyrely
  // },
  {
    image: rollsroyce,
  },
  {
    image: motorolla,
  },
  {
    image: hp,
  },
];
const RelyOnUs = () => {
  return (
    <div className={styles.RelyWrapper}>
      <div className="container">
        <div className="grid grid-col-1 md:grid-cols-2">
          <div>
            <div className="max-w-[555px]">
              <SubHeading
                className={"text-left mb-[8px]"}
                subHeading={"Rely on Us"}
              />
              <GeneralHeading
                className={"text-left md:leading-[64px] leading-[35px]"}
                heading={
                  "Reliable Support for 500+ Companies in Dev Team Scaling."
                }
              />
            </div>
          </div>
          <div className="md:mt-0 mt-4">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
              {COMPANIES_DATA.map((data: any, index) => {
                return (
                  <div className="mb-8 text-center" key={index}>
                    <Image
                      src={data.image}
                      className="mx-auto"
                      alt={data.title}
                      height={50}
                    />
                    <a className="font-poppins text-xs 	text-purple font-normal	flex items-center justify-center gap-2 cursor-pointer">
                      {data.link} {data.playIcon}{" "}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelyOnUs;
