import React from "react";

interface InfoCardProps {
  cardTitle: string;
  cardLine: string;
  CardIcon: any;
}
const InfoCard = (props: InfoCardProps) => {
  return (
    <>
      <div className="w-full lg:w-1/2 items-center md:justify-between md:flex rounded-[20px] py-6 px-10 border border-[#D3D3D3] bg-white">
        <div className="flex items-center md:justify-start justify-center">
          <div className="bg-purple inline-block p-3 rounded-2xl ">
            {props?.CardIcon}
          </div>
          <h3 className="font-bold text-2xl ml-4">{props?.cardTitle}</h3>
        </div>
        <div>
          <p className="md:text-left text-center mt-4 md:mt-0 d-flex align-items-center text-[18px] text-grey label-checkbox font-poppins font-normal cursor-pointer">
            {props?.cardLine}
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
