import { Card } from "@/components/card/Card";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import React from "react";
import KbrLogo from "../../../../src/images/kbr-logo.png";
import WhiteKbrLogo from "../../../../src/images/-logokbr-white.png"
import UcImage from "../../../../src/images/uc.png";
import UcWhiteImage from "../../../../src/images/white-uc.png";
import Aws from "../../../../src/images/aws.png";
import AwsWhite from "../../../../src/images/awsblack.png";
import chandwhite from "../../../../src/images/Chand-Elec.png";
import Athar from "../../../../src/images/athar-blue.png";
import AtharWhite from "../../../../src/images/atharwhite.png"
  ; import HemHenge from "../../../../src/images/Hem-henge.png";
import HemHengeWHite from "../../../../src/images/Hem-hengeWhite.png";
import CeBlack from "../../../../src/images/CE-Black.png";
import Tr from "../../../../src/images/Traditions.png";
import TrWhite from "../../../../src/images/TraditionsWhite.png";
import Ks from "../../../../src/images/Kushal-White.png";
import KsBlack from "../../../../src/images/Ks-black.png";
import kido from "../../../../src/images/KiddoQuiz.png";
import kidoWhite from "../../../../src/images/KiddoQuizWhite.png";
import Hfm from "../../../../src/images/HFM.png";
import HfmWhite from "../../../../src/images/HFMWhite.png";
import Gd from "../../../../src/images/GD.png";
import GdWhite from "../../../../src/images/GDWhite.png";
import Lecto from "../../../../src/images/Lacto.png";
import LectoWhite from "../../../../src/images/LactoWhite.png";
import Nthai from "../../../../src/images/N-Thai.png";
import NthaiWhite from "../../../../src/images/N-Thai(1).png";
import Pet from "../../../../src/images/Pets-Heaven.png";
import PetWhite from "../../../../src/images/Pets-Heaven(1).png";
import Chicken from "../../../../src/images/Chicken-World.png";
import ChickenWhite from "../../../../src/images/Chicken-WorldWhite.png";
import Sketcher from "../../../../src/images/Skechers-Logo.png";
import SketcherWhite from "../../../../src/images/Skechers-W.png";
import Fc from "../../../../src/images/FC.png";
import FcWhite from "../../../../src/images/FCWhite.png";
import Mra from "../../../../src/images/MRA-Engineering.png";
import MraWite from "../../../../src/images/MRA-EngineeringWhite.png";
import instructiveImage from "../../../../src/images/instructure.svg";
import backgroundImage from "../../../../src/images/testomonial-n.png";

import Vc from "../../../../src/images/vc.png";
import VcWhite from "../../../../src/images/vcdark.png";
import KFC from "../../../../src/images/kfc.png";
import KFCwhite from "../../../../src/images/kfcdark.png";
import SMFC from "../../../../src/images/smfc.png";
import SMFCWhite from "../../../../src/images/smfcdark.png";

import Hardverd from "../../../../src/images/hvdps.png";
import HardverdWhite from "../../../../src/images/hvdpsdark.png";

import Azsons from "../../../../src/images/azsons.png";
import Azsonswhite from "../../../../src/images/azsonsdark.png";

import CAD from "../../../../src/images/cad.png";
import CADWhite from "../../../../src/images/caddard.png";
import Lion from "../../../../src/images/lion.png";
import LionWhite from "../../../../src/images/lion.png";

import WiseMan from "../../../../src/images/wise.png";
import WiseManWhite from "../../../../src/images/wisedark.png";


import Soriree from "../../../../src/images/soiree.png";
import SoireeWHite from "../../../../src/images/soireedark.png";

import Savvy from "../../../../src/images/savvy.png";


import Flowress from "../../../../src/images/flowress.png";
import FlowressWHite from "../../../../src/images/flowressdark.png";

import Lahore from "../../../../src/images/lahorecarac.png";
import LahoreWhite from "../../../../src/images/lahorecaracdark.png";

import Image from "next/image";
import { ArrowRightBlack } from "@/svg";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Testimonials.module.css";
import "swiper/css/scrollbar";
import Text from "@/components/Text/Text";
const Testimonials = () => {
  const TESTIMONIALS_DATA = [
    {
      whiteimage: WhiteKbrLogo,
      image: KbrLogo,
      text: "",
      // text: "KBR Transport recognizes that in a constantly changing environment, only the companies that are  raising the bar for themselves are likely to survive in the market. By having our regular morning team huddles we discuss our customers transportation needs, obstacles, and frustrations. It is this management strategy that allows us to grasp a deep understanding of how each customer operates, their unique challenges and requirements, and how we can provide them with an array of added value transportation solutions along the way.",
      title: "KBR Transport",
      // name: "Kapil Malik",
    },
    {
      whiteimage: UcWhiteImage,
      image: UcImage,
      text: "",
      // text: "At Ultra Cleaning, we are dedicated to delivering top-quality cleaning services that leave your space spotless and refreshed. Our expert team uses advanced techniques and eco-friendly products to ensure the highest level of cleanliness. We take pride in our attention to detail and commitment to excellence. Discover the difference with Ultra Cleaning today",
      title: "Ultra Cleaning",
      // name: "Waseem Afzal",
    },
    {
      whiteimage: Aws,
      image: AwsWhite,
      text: "",
      // text: "At AWSRealEstate, we take pride in offering a comprehensive range of services tailored to meet the unique needs of both residential and commercial real estate throughout North America. From the charming landscapes of Whistler to the vibrant cityscape of Hope City, we are dedicated to providing top-tier real estate solutions. Our commitment is to ensure that your property goals not only meet but exceed your expectations, making them a reality in the diverse and dynamic North American market",
      title: "AWS Real Estate ",
      // name: "Ashraf & Waseem & Sharry",
    },
    {
      whiteimage: Ks,
      image: KsBlack,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Kaushal Law",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: TrWhite,
      image: Tr,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Traditions Tea And Coffee",
      // name: "Manmohan Kaushal",
    },

    {
      whiteimage: AtharWhite,
      image: Athar,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Athar Associates",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: kidoWhite,
      image: kido,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Kiddo Quiz",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: HemHengeWHite,
      image: HemHenge,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Hem Henge",
      // name: "Manmohan Kaushal",
    },

    {
      whiteimage: GdWhite,
      image: Gd,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Garden Deli",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: LectoWhite,
      image: Lecto,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Lacto Valley",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: MraWite,
      image: Mra,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "MRA Engineering",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: NthaiWhite,
      image: Nthai,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "N THAI PALACE",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: PetWhite,
      image: Pet,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Pets Heaven",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: ChickenWhite,
      image: Chicken,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Chicken World",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: FcWhite,
      image: Fc,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "French Corner "
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: chandwhite,
      image: CeBlack,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Chand Electrical Corporation",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: HfmWhite,
      image: Hfm,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Haq Fresh Malik",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: VcWhite,
      image: Vc,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Vilancci",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: KFCwhite,
      image: KFC,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "KFC Trucking",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: SMFCWhite,
      image: SMFC,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Ideal Flavours",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: Azsonswhite,
      image: Azsons,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Azsons",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: HardverdWhite,
      image: Hardverd,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Harvard Prep School",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: LionWhite,
      image: Lion,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Lion Quality Welding Solutions",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: CADWhite,
      image: CAD,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "CAD Constructions",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: WiseManWhite,
      image: WiseMan,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Wiseman Mechanical Ltd",
      // name: "Manmohan Kaushal",
    },
    {
      whiteimage: SoireeWHite,
      image: Soriree,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Soirée Company",
      // name: "Manmohan Kaushal",
    }, 
    
    {
      whiteimage: FlowressWHite,
      image: Flowress,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Flowress",
      // name: "Manmohan Kaushal",
    }, 
    {
      whiteimage: Savvy,
      image: Savvy,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Savvy Professionals",
      // name: "Manmohan Kaushal",
    }, 
    {
      whiteimage: LahoreWhite,
      image: Lahore,
      text: "",
      // text: " We offer a range of legal services, all designed to help our clients. Whether you are looking for a small tweak or complete overhaul, we have you covered . We believe in a unique and customized consulting experience for each and every client. Each firm is unique. One-size-fits-all approaches will never help your problems reach a solution. We deliver custom solutions, tailored to you–your industry, your culture, your one-of-a-kind challenges.",
      title: "Lahore Car AC",
      // name: "Manmohan Kaushal",
    }, 
  ];
  return (
    <div id="portfolio" className={styles.testimonialsWrapper}>
      <div className={styles.bgImage}>

        <Image className="" src={backgroundImage} alt="image" />
      </div>
      <div className="container">
        <div className="flex">
          <div className="w-[30%] hidden md:block"></div>
          <div className="max-w-[750px] md:w-[70%] w-[100%] z-[1]">
            <SubHeading
              className={"text-left mb-[8px]"}
              subHeading={"Portfolio"}
            />
            <p className="mb-2 text-left text-grey text-lg font-poppins font-normal">
              150+ projects executed successfully last year. List of a few recent projects is as under;
            </p>
            <GeneralHeading
              className={"text-left mb-[8px]"}
              heading={`Showcasing Our Creative Excellence`}
            />

          </div>
        </div>

        <div className="testimonials-slider">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2.5,
              },
              1140: {
                slidesPerView: 2.5,
              },
            }}
            spaceBetween={50}
            navigation
          >
            {TESTIMONIALS_DATA.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className={`${styles.TestimonialCard} hover:bg-black hover:text-white transition duration-500 ease-in-out" hover:shadow-lg`}>
                    <div className="h-36 flex justify-between items-center">
                      <Image className={`w-48 ${styles.simple_logo}`} src={data.image} alt={data.title} />
                      <Image className={` ${styles.white_logo}`} src={data.whiteimage} alt={data.title} />
                      <div className="cursor-pointer">
                        <ArrowRightBlack />
                      </div>
                    </div>
                    <div className="mt-[29px]">
                      <p className={`text-lg font-poppins font-normal text-grey mb-[24px] ${styles.testmonialpara}`}>
                        {data.text.substring(0, 299)}
                      </p>
                      <a className={`text-purple text-lg font-poppins font-semibold ${styles.siteName}`}>
                        <SubHeading className={`${styles.testmonialpara}`} subHeading={data.title} />
                      </a>
                      <p className={`text-primary-dark text-lg font-poppins font-normal mt-[4px] ${styles.siteowner}`}>
                        {/* {data.name} */}
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
