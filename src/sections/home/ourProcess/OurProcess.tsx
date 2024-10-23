import { Button } from "@/components/Button/Button";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import { PersonBgBlueIcon, PhoneBgBlueIcon, TrackBgBlueIcon } from "@/svg";
import Image from "next/image";
import React from "react";
import businemanImage from "../../../images/thinking.png";
import styles from "./OurProcess.module.css";
import Link from "next/link";

const OurProcess = () => {
  const OUR_PROCESS_DATA: any = [
    {
      icon: <PhoneBgBlueIcon />,
      subtile: "step 1",
      title: "Active Involvement in the Exploratory Meeting",
      text: "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
    },
    {
      icon: <PersonBgBlueIcon />,
      subtile: "step 2",
      title: "Team Dynamics in Solution Exploration",
      text: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.",
    },
    {
      icon: <TrackBgBlueIcon />,
      subtile: "step 3",
      title: "Starting Strong, Monitoring Steady Progress",
      text: "Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.",
    },
  ];
  return (
    <div className="container mt-[100px]">
      <div className="max-w-[800px] mx-auto">
        <SubHeading
          className={"text-center"}
          subHeading={"The Journey from Ideation to Implementation  "}
        />
        <GeneralHeading
          className={"text-center"}
          heading={"Seamless Strategies For Success"}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-[60px] gap-[50px]">
        <div className={`relative ${styles.imageSection}`}>
          <span className={styles.blueCirle}></span>
          <div>
            {" "}
            <Image src={businemanImage} alt="thinking busineman image" />{" "}
          </div>
        </div>
        <div className={styles.processContent}>
          {OUR_PROCESS_DATA.map((data: any, index: number) => {
            return (
              <div className="flex gap-[30px] mb-[67px]" key={index}>
                <div>{data.icon}</div>
                <div>
                  <h5 className="text-sm	font-bold	font-poppins  uppercase text-grey-100 tracking-[2px] mb-[2px]">
                    {data.subtile}
                  </h5>
                  <h3 className="text-xl font-bold text-primary-dark	font-poppins	mb-[16px]">
                    {" "}
                    {data.title}
                  </h3>
                  <p className="text-lg font-normal text-grey	font-poppins max-w-[460px]">
                    {data.text}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="ml-[70px]">
            <Link href={"/contact"}>
              <Button className="bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px] flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
