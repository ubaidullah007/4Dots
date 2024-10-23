import React from "react";
import Map from "./Map";
import OfficeCardData from "@/sections/contact/office-card-data";
import SuggestionForm from '@/sections/home/suggestion-box/SuggestionForm'
import Head from "next/head";

const Contact = () => {
  return (
    <>
     <Head>
        <title>Suggestion Form | 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content="4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Get in touch with 4Dots Solutions LLC. Our 'Contact Us' page provides easy access to our team. Let's connect and discuss your software and technology needs."
          key="desc"
        />
      </Head>
      <div className="">
        <SuggestionForm 
         ContactGeneralHeading={"Complaints & Suggestions Form"}
         ContactInfoCard
         ContatctSubHeading={" Share Your Feedback Today"}
         className="mt-0 pb-64"
        />
       
      </div>
    </>
  );
};

export default Contact;
