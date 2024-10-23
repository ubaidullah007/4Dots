import Image from "next/image";
import React from "react";
import MapImage from "../../../images/contact/map.png";

const Map = () => {
  return (
    <div className="bg-purple-lite">
      <div className="container">
        <div className=" pb-14">
          <Image src={MapImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
