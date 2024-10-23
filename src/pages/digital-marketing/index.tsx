import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { StoryCard } from "@/components/storyCard/StoryCard";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import DevProcess from "@/sections/development_sections/DevProcess/DevProcess";
import DevFaq from "@/sections/development_sections/DevFaq/DevFaq";
import DevIdea from "@/sections/development_sections/DevIdea/DevIdea";
import DevPlatforms from "@/sections/development_sections/DevPlatforms/DevPlatforms";
import DevTeamWork from "@/sections/development_sections/DevTeamWork/DevTeamWork";
import DevWeServe from "@/sections/development_sections/DevWeServe/DevWeServe";
import DevWhyUs from "@/sections/development_sections/DevwhyUs/DevwhyUs";
import DevServicesBanner from "@/sections/development_sections/DevServicesBanner/DevServicesBanner";
import { data } from "../../sections/data";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Digital Marketing | 4Dots Solutions LLC - Web & Mobile APP |
          Artificial Intelligence and Blockchain Development Services
        </title>

        <meta
          name="description"
          content=" 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - 4Dots Solutions powers e-commerce success. We build feature-rich online stores and platforms to drive sales and enhance user experiences."
          key="desc"
        />
      </Head>

      <DevServicesBanner service_banner={data.digitalMarketing.serviceBanner} />
      <DevWeServe weServer={data.digitalMarketing.weServer} />
      <DevWhyUs whyUs={data.digitalMarketing.whyUs} />
      {/* <DevIdea devIdea={data.digitalMarketing.devIdea} /> */}
      {/* <DevProcess developmentProcess={data.digitalMarketing.developmentProcess} /> */}
      <DevTeamWork teamWork={data.digitalMarketing.teamWork} />
      {/* <DevPlatforms platforms={data.digitalMarketing.platforms} /> */}
      {/* <DevFaq faq={data.digitalMarketing.faq} /> */}

      <ContactForm
        className="pt-24 pb-[245px]"
        ContactInfoCard={false}
        ContactGeneralHeading="Let Us Know What You’re Looking for, We’ll Build it for You"
        ContatctSubHeading="Let’s Work Together"
      />
    </>
  );
};

export default index;
