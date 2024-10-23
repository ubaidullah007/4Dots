import { Button } from "@/components/Button/Button";
import { ArrowRightIcon } from "@/svg";
import React from "react";
import Image from "next/image";
import heroBannner from "../../../../src/images/newbanner.png";
import style from "./HeroBanner.module.css";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <div className="">
      <div className={style.heroBannnerWrapper}>
        <div className="flex h-full md:flex-row flex-col">
          <div className={`${style.heroLeftSection} container  z-[1]`}>
            <div className="md:max-w-[483px] mx-auto md:mx-0">
              <h3 className={`${style.heading} font-poppins mb-[24px]`}>
              Innovative Digital
                <span className="text-purple">     Solutions</span>
              </h3>
              <div className="text-xl font-normal font-poppins text-grey md:text-left text-center leading-9 mb-[24px]">
                Where Branding Meets Optimum
                <br className="hidden md:block" />
                Thinking and Flawless Execution.
                <br className="hidden md:block" />
              </div>
              <div className="flex md:justify-start justify-center md:mb-0 mb-[50px]">
                <Button className="bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                  <Link href={"/contact"} className="flex items-center gap-3">
                    Get Started
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:hidden mb-[-30px]">
            <Image src={heroBannner} alt="Picture of the author" />
          </div>
          <div className={style.rightImage}>
            <Image src={heroBannner} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
