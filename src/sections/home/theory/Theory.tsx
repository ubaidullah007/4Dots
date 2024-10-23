import GeneralHeading from "@/components/Heading/GeneralHeading";
import React from "react";
import styles from "./Theory.module.css";
import theoryImage from "../../../../src/images/Box 4.png";
import Image from "next/image";
const Theory = () => {
  return (
    <div className={styles.theoryWrapper}>
      <div className="container">
        <GeneralHeading
          className={"text-left text-white"}
          heading={"Our Theory"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[16px]">
          <div className="text-white">
            <p className="font-poppins text-lg font-normal leading-8 mb-[16px]">
              We’re­ a­ full­ service­ creative­ and­ digital­ agency,­ working­
              globally­ with­ largest­brands.
            </p>
            <p className="font-poppins text-lg font-normal leading-8 mb-[16px]">
              Founded with a passion for innovation and technology, 4Dots
              Solutions embarked on a remarkable journey that has seen us evolve
              into a leading Software House. From our modest beginnings, we've
              cultivated a legacy of dedication, teamwork, and an unwavering
              pursuit of excellence.
              <br />
              <br />
              Over the years, we've built enduring client relationships while
              adapting to the dynamic digital landscape. Our commitment to
              delivering groundbreaking software solutions continues to drive
              our success. We take pride in embracing change, fostering
              creativity, and pushing the boundaries of what's possible in the
              software industry
            </p>
          </div>
          <div className="mx-auto">
            <Image
              className="grayscale"
              src={theoryImage}
              alt={"Overseas Development"}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;
