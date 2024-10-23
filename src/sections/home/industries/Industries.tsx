import { Card } from "@/components/card/Card";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import React from "react";
import style from "./industries.module.css";
import industryEcommerce from "../../../../src/images/industryEcommerce.svg";
import education from "../../../../src/images/education.svg";
import healthCare from "../../../../src/images/healthCare.svg";
import logistic from "../../../../src/images/logistic.svg";
import socialNetworking from "../../../../src/images/socialNetworking.svg";
import travelAgency from "../../../../src/images/travelAgency.svg";
import solutions from "../../../../src/images/solutions.svg";
import realEstate from "../../../../src/images/realEstate.svg";
import gaming from "../../../../src/images/gaming.svg";
import foodRestaurant from "../../../../src/images/food&restaurant.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const Industries = () => {
  const INDUSTRIES_WE_SERVE: any = [
    {
      image: industryEcommerce,
      title: "Retail,\nEcommerce",
  },
    {
      image: education,
      title: "Education \n& e-learning",
    },
    {
      image: healthCare,
      title: "Healthcare & \nFitness",
    },
    {
      image: logistic,
      title: "Logistics & \nDistribution",
    },
    {
      image: socialNetworking,
      title: "Social \nNetworking",
    },
    {
      image: travelAgency,
      title: "Travel & \nHospitality",
    },
  ];
  return (
    <div className={`${style.industryWrapper} bg-black text-white`}>
      <SubHeading
        className="text-center pb-[49px] text-white"
        subHeading="Fostering Forward-Thinking Solutions"
      />
      <div className="container lg:flex">
        <div>
          <GeneralHeading
            className="text-left text-white"
            heading="INNOVATION IS OUR CREATIVE CORE"
          />
          <p className="text-white text-left leading-7 font-poppins text-lg font-normal mb-[60px] mt-[48px]">
            Innovation is the heartbeat of <Link href="/">4Dots Solutions</Link>.
            It's not just a concept; <br /> it's our creative core. We infuse
            every project with fresh ideas, <br />
            cutting-edge strategies, and unwavering commitment. Discover <br />
            how our innovative approach can transform your brand, leading you to
            excellence and success in the digital world.
          </p>
        </div>
        <div className={style.CardsGrid}>
          {INDUSTRIES_WE_SERVE.map((data: any, index: number) => {
            return (
              <Card className={style.industryCard} key={index}>
                <div className="mb-[17px]">
                  <Image
                    src={data.image}
                    className="mx-auto"
                    alt={data.title}
                  />
                </div>
                <h5 className="font-poppins text-base	leading-5 text-primary-dark font-semibold">
                  {data.title}
                </h5>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
