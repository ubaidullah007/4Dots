import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import style from "./HireTalentBanner.module.css";
import OurTeam from "../../../images/our-team.png";
import TalentBG from "../../../images/bgTalent.png";
import Link from "next/link";
import { ArrowRightBlack } from "@/svg";
const HireTalentBanner = () => {
  return (
    <div className="relative pt-[80px] pb-[44px]">
      <div className="container">
        <div className="flex h-full md:flex-row flex-col">
          <div className={`${style.heroLeftSection} container  z-[1]`}>
            <div className="md:max-w-[483px] mx-auto md:mx-0">
              <h1 className={`main-heading font-poppins mb-[24px]`}>
                Meet Our <span className="text-purple"> Dynamic Team </span>
              </h1>
              <p className="text-lg font-normal font-poppins text-grey md:text-left text-center leading-7 mb-[24px]">
              Our team is a dedicated group of individuals passionate about our mission. We come from diverse backgrounds and bring a range of skills and expertise to the table. Together, we collaborate, innovate, and strive to achieve excellence in everything we do. Meet the talented individuals who drive our organization forward and make our vision a reality.
              </p>
              <div className="flex md:justify-start justify-center md:mb-0 mb-[50px]">
                <Link href={'#meetNow'}>
                  <Button className="bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                   Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-[-30px] w-full">
            <Image className="w-full" src={OurTeam} alt="Picture of the author" />
          </div>
        </div>
      </div>

      <div className={style.rightImage}>
        <Image className="grayscale md:block hidden" src={TalentBG} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default HireTalentBanner;
