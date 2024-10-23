import { Button } from "@/components/Button/Button";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import { ChevronDown } from "@/svg";
import React from "react";
import styles from "./CareerBanner.module.css";

const CareerBanner = () => {
    return (
        <div className={styles.careerBannerWrapper}>
            <div className="container">
                <GeneralHeading
                    className={"text-white text-center pt-[90px] mb-[24px]"}
                    heading={"Grow With Us"}
                />
               
       
            </div>
        </div>
    );
};

export default CareerBanner;
