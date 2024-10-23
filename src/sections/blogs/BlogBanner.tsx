import React from "react";

import { Button } from "@/components/Button/Button";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import { ChevronDown } from "@/svg";
import styles from "./BlogBanner.module.css";
const BlogBanner = () => {
  return (
    <div className={styles.careerBannerWrapper}>
      <div className="container">
        <GeneralHeading
          className={"text-white text-center pt-[90px] mb-[24px]"}
          heading={"Blogs"}
        />
        <div className="max-w-[550px] mx-auto">
              <div className="w-full pb-[76px]">
                <input
                  name={"seearch"}
                  type={"text"}
                  className={`${styles.inputField} rounded-s-lg w-[70%] font-poppins`}
                  placeholder={"Search the blog"}
                  required
                />
                <Button
                  className={
                    "bg-primary-dark text-white px-[25px] py-[15px] rounded-e-lg w-[30%]"
                  }
                >
                  Search
                </Button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BlogBanner;
