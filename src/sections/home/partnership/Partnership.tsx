import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import React from "react";
import FixedPriceImage from "@/images/fixedPrice.svg";
import DedicatedModelImage from "@/images/dedicatedModel.svg";
import developmentModal from "@/images/developmentModel.svg";
import { Card } from "@/components/card/Card";
import Image from "next/image";
const Partnership = () => {
  const PARTNERSHIP_DATA = [
    {
      image: FixedPriceImage,
      title: "Local Expertise and Insight",
      text: " Our agency thrives on its intimate knowledge of New Vancouver City's digital landscape. We understand the nuances of the local market, enabling us to tailor strategies that resonate with the city's diverse audience. Being entrenched in the community, we possess invaluable insights that give your brand a competitive edge. ",
    },
    {
      image: DedicatedModelImage,
      title: "Excellence and Client Satisfaction",
      text: "At our core, we prioritize delivering results that matter. Our track record speaks volumes, backed by numerous success stories and glowing testimonials from satisfied clients across various industries. We take immense pride in our ability to exceed expectations, consistently driving growth and engagement for our clients. ",
    },
    {
      image: developmentModal,
      title: "Support and Seamless Execution",
      text: "With our commitment to exceptional client service, we offer round-the-clock support and a seamless project management process. Our team's dedication ensures that your vision is translated into reality with precision and efficiency. Whether it's troubleshooting, brainstorming new ideas.",
    },
  ];

  return (
    <div className="container py-[100px]">
      <SubHeading className={"text-left mb-[8px]"} subHeading={"About Us"} />
      <GeneralHeading
        className={"text-left mb-[60px]"}
        heading={"Why Choose Us?"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {PARTNERSHIP_DATA.map((data, index) => {
          return (
            <Card className={"p-[44px]"} key={index}>
              <div className="mb-[17px]">
                <Image
                  src={data.image}
                  alt={data.title}
                  height={40}
                  width={40}
                />
              </div>
              <h5 className="mb-[17px] font-poppins text-lg font-semibold">
                {data.title}
              </h5>
              <p className="text-grey font-poppins text-lg font-normal">
                {data.text}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Partnership;
