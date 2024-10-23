import { Button } from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { ArrowRightIcon } from "@/svg";
import Image from "next/image";
import React from "react";
import serviceImage from "../../../images/services/14 Best Investments To Accelerate Your Wealth Fast.jpeg";
import styles from "./ServicesBanner.module.css";
import Link from "next/link";

const DevServicesBanner = ({ service_banner }: any) => {
  return (
    <div className={styles.serviceWrapper}>
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="max-w-[532px]">
            <h1 className={`${""} main-heading font-poppins mb-[24px]`}>
              {service_banner.title}{" "}
              <span className="text-purple break-words">Services </span>
            </h1>
            <Text
              className="text-lg  text-grey leading-7 mb-[24px]"
              text={service_banner.desc}
            />
            <div className="flex md:justify-start justify-center md:mb-0 mb-[50px]">
              <Button className="bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                <Link href={"/contact"} className="flex items-center gap-3">
                  Get Started
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
          <div className=''>
            <Image className="rounded-2xl" src={serviceImage} alt="services Image" />
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevServicesBanner;
