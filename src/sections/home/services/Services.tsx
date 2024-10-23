import { Card } from "@/components/card/Card";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import { ArrowRightBlue } from "@/svg";
import React from "react";
import Image from "next/image";
import { SERVICES_DATA } from "./Service.data";
import style from "./Services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container md:py-[100px] py-[50px]">
      <SubHeading
        className="text-center mb-[8px]"
        subHeading="TRANSFORM YOUR BRANDS WITH OUR SERVICES"
      />
      <GeneralHeading className="text-center" heading="Our Offered Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px] mt-[60px]">
        {SERVICES_DATA.slice(0,3).map((data, index) => {
          return (
            <Card
              className={`${style.serviceCard} hover:shadow-2xl`}
              key={index}
            >
              <div className="mb-[17px]">
                <Image src={data.image} alt={data.title} />
              </div>
              <h5 className="mb-[17px] font-poppins text-lg font-semibold">
                {data.title}
              </h5>
              <ul>
                {data.tecList.map((list, index) => {
                  return (
                    <li
                      className="flex gap-3 mb-[15px] font-poppins text-lg font-normal"
                      key={index}
                    >
                      <span className={list.icon === undefined ? "hidden" : ""}>
                        {list.icon}
                      </span>
                      <span className="text-grey">{list.text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link href={data.link} className={style.arrowBtn}>
                <ArrowRightBlue />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
