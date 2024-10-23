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
import {data} from '../../sections/data'
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>SEO | 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - 4Dots Solutions LLC leads in AI & ML development, unlocking the potential of data-driven intelligence. Explore the future with our AI & ML solutions."
          key="desc"
        />
      </Head>
      <DevServicesBanner service_banner={data.seo.serviceBanner}/>
      <DevWeServe weServer={data.seo.weServer}/>
      <DevWhyUs whyUs={data.seo.whyUs}/>
      {/* <DevIdea devIdea={data.seo.devIdea}/> */}
      {/* <DevProcess developmentProcess={data.seo.developmentProcess}/> */}
      <DevTeamWork teamWork={data.seo.teamWork}/>
      {/* <DevPlatforms platforms={data.seo.platforms}/>
      <DevFaq faq={data.seo.faq}/> */}
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
