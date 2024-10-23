import { Card } from "@/components/card/Card";
import { OUR_OFFICES_DATA } from "@/components/footer/FooterData";
import Image from "next/image";
import React from "react";

const OfficeCardData = () => {
  return (
<div className="bg-purple-lite pb-[245px]">
<div className="container">
      <div className="grid  md:grid-cols-3 grid-cols-1 md:gap-3 gap-6">
        {OUR_OFFICES_DATA.map((data, index) => {
          return (
            <Card className={""} key={index}>
              <div className="md:flex grid justify-start items-start gap-3" key={index}>
                <Image className="w-24" src={data.image} alt={data.title} />
                <div>
                  <div className="flex gap-2">
                    <Image src={data.icon} alt={data.title} />
                    <h4 className="text-dark-grey font-poppins text-base font-medium	">
                      {data.title}
                    </h4>
                  </div>
                  <p className="text-grey font-poppins max-w-[260px] font-light my-[8px] text-base">
                    {data.infoText}
                  </p>
                  
                  <p className="text-dark-grey font-poppins font-light text-base">
                    {data.phoneNumber}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
</div>
  );
};

export default OfficeCardData;
