import Navbar from "@/components/Navbar/Navbar";
import Text from "@/components/Text/Text";
import Image from "next/image";
import React from "react";
import juliaImage from "../../../images/about/juliaImage.svg";
import focusedBoy from "../../../images/about/focused-smart.png";
import styles from "./AboutCeo.module.css";
import SubHeading from "@/components/Heading/SubHeading";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import devOpsImage from "../../../images/about/devops-engineers.png";
import BeardedManImage from "../../../images/about/bearded-man.png";
import workhardImage from "../../../images/about/workHard.png";
import smartGuysWorking from "../../../images/about/smart-guys-working.png";
const AboutCeo = () => {
    return (
        // <Navbar/>
        <>
            <div className="container">
                <div className="flex justify-between items-center w-full gap-[30px]">
                    <div className="w-[75%]">
                        <h1 className="main-heading">
                            About <span className="text-purple">CEO </span>
                        </h1>
                        <Text
                            text={
                                "As a veteran in the startup space, Julia Pasternack serves as our acting CEO, drawing upon her industry expertise to guide our team in delivering top-tier products and ensuring 100% client satisfaction."
                            }
                            className="text-grey font-normal my-[24px]"
                        />
                        <Text
                            text={`Having graduated cum laude from UCLA and Georgia Tech, her journey began as an aerospace and automotive manufacturing engineer with a focus on Continuous Improvement. She then transitioned into supply chain, leading multiple teams at Amazon and honing her skills in customer-centricity. Fueled by her passion for problem solving, Julia built her first company, Komodal, a data aggregation platform for the container transport industry that she eventually sold in 2022. Julia then went on to launch DriverFly, a software company focused on commercial truck driver recruiting. Today, as our CEO, she drives 4Dots Solutions's mission to deliver cutting-edge solutions in the software development landscape`}
                            className="text-grey font-normal"
                        />
                    </div>
                    <div className="w-[30%]">
                        <Image src={juliaImage} alt="Julia Image" height={434} />
                    </div>
                </div>
            </div>

            <div className={styles.blueBgRoundedLeft}>
                <div className="container">
                    <div className="flex w-full gap-[70px]">
                        <div className="w-[calc(40%-70px)]">
                            <Image
                                src={focusedBoy}
                                alt="focused boy"
                                height={309}
                                width={464}
                                className={styles.focusedBoyImage}
                            />
                        </div>
                        <div className="w-[calc(60%-70px)]">
                            <Text
                                text={`We are a leading mobile app development company in the USA, housing domain-savvy developers to design and develop Android, iOS and cross-platform applications customized to your business needs and identity. So, jump into the 4Dots Solutions bandwagon today and benefit from our exclusive value-added services!`}
                                className="text-white text-left py-[40px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-[160px]">
                <div className="grid grid-cols-2 gap-[30px]">
                    <div>
                        <SubHeading className={"mb-[8px]"} subHeading={"Our Start"} />
                        <GeneralHeading className={""} heading={"The Beginning"} />
                        <Text
                            text={`Our journey dates all the way back to 2018, where we developed the B2B SaaS based platform Komodal to support supply chain stakeholders in the management of containers at ports. It was this comprehensive web app that quickly ignited our passion for supporting enterprise solutions that solve high-impact, real-world problems.`}
                            className="text-grey font-normal mt-[16px]"
                        />
                    </div>
                    <div>
                        <Image src={devOpsImage} alt="devOps Image" />
                    </div>
                </div>
            </div>

            <div className={styles.blueBgRoundedRight}>
                <div className="container">
                    <div className="flex w-full gap-[70px]">
                        <div className="w-[calc(60%-70px)]">
                            <Text
                                text={`We are a leading mobile app development company in the USA, housing domain-savvy developers to design and develop Android, iOS and cross-platform applications customized to your business needs and identity. So, jump into the 4Dots Solutions bandwagon today and benefit from our exclusive value-added services!`}
                                className="text-white text-left py-[40px]"
                            />
                        </div>
                        <div className="w-[calc(40%-70px)]">
                            <Image
                                src={BeardedManImage}
                                alt="focused boy"
                                height={309}
                                width={464}
                                className={styles.focusedBoyImage}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-[160px]">
                <div className="grid grid-cols-2 gap-[30px]">
                    <div>
                        <SubHeading className={"mb-[8px]"} subHeading={"work hard"} />
                        <GeneralHeading className={""} heading={"Living The Now"} />
                        <Text
                            text={` The pack almost doubled in size each year since the beginning and we are now 80+ wolves altogether. We are currently at our 4th office - a gorgeous and spacious house in central Cluj.`}
                            className="text-grey font-normal mt-[16px]"
                        />
                        <Text
                            text={`We have partners all round the world, from Europe to the US, Australia, UAE and many more amazing places. They range from startups to powerful brands, building both B2B and B2C apps.`}
                            className="text-grey font-normal "
                        />
                        <Text
                            text={`  Our skilled team and strong partners have helped us become one of the top European Development Agencies. In 2021 we won the European Technology Awards for App development.`}
                            className="text-grey font-normal "
                        />
                    </div>
                    <div className="mt-[16px]">
                        <Image src={workhardImage} alt="devOps Image" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.roadMapWrapper}>
                    <div className="">
                        <GeneralHeading className={"text-center mb-[16px]"} heading={"Roadmap Ahead"} />
                        <Text
                            text={`Looking ahead, 4Dots Solutions seeks to continue its focus on innovation, client-centricity, and steady growth, specifically in the areas of enterprise solutions for sectors such as Supply Chain and Healthcare, as well as in Blockchain & Fintech related endeavors. We're committed to harnessing emerging technologies to deliver cutting-edge products that meet the evolving needs of our clients and industry standards. Our roadmap includes expanding our service offerings, strengthening our partnerships, and enhancing our team's range
                            of talent. By staying agile, adaptive, and deeply customer-focused, we are poised to continue our drive towards excellence in software development and deliver value that exceeds expectations in the dynamic tech landscape.`}
                            className="text-white text-center"
                        />
                    </div>
                    <Image src={smartGuysWorking} alt="smart Guys working"/>
                </div>
            </div>
        </>
    );
};

export default AboutCeo;
