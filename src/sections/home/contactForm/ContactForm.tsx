import Checkbox from "../../../components/checkbox/Checkbox";
import React, { ChangeEvent, useEffect, useState } from "react";
import SubHeading from "@/components/Heading/SubHeading";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import styles from './ContactForm.module.css';
import FormField from "@/components/formField/FormField";
import  TextArea  from "@/components/textArea/TextArea";
import { Button } from "@/components/Button/Button";
import InfoCard from "@/components/infoCard";
import { Mail, Phone } from "@/svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import { useFormik } from "formik";
import { ContactFormEntity } from "@/components/models/contactform/contact-form";
import {  toast } from 'react-toastify'; 

interface ContactFormProps {
  ContatctSubHeading: string;
  ContactGeneralHeading: string;
  ContactInfoCard: boolean;
  className: string;
}

const ContactForm = ({
  ContatctSubHeading,
  ContactGeneralHeading,
  ContactInfoCard,
  className,
}: ContactFormProps) => {

  const form = useFormik({
    initialValues: new ContactFormEntity(),
    validationSchema: ContactFormEntity.yupSchema(),
    enableReinitialize : true,
    onSubmit: async (values,  actions) => {

      console.log(values,'++++++++++++++++++++++++++++++++++++++');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        
        if (response.status === 200) {
        toast('Email sent successfully', { hideProgressBar: false, autoClose: 2000, type: 'success' });
          actions.resetForm({
            values: {
              fullname: '',
              email: '',
              companyname: '',
              phone:'',
              dev_message:'',
              website: ''
            },
          });
        }
        else{
          toast.error('Error while Sending Message')
          console.log(response.status);
        }
      } catch (error) {
        toast.error('Error Submitting Form')
        console.error('Error submitting form:', error);
      }

    },
  });
  useEffect(() => {
    console.log(form?.values) 
    console.log(form?.errors)
  }, []);

  return (
    <div className={`${styles.contactFormWrapper} ${className}`}>
      <div className="container">
        <SubHeading
          className={"text-center mb-[8px]"}
          subHeading={ContactGeneralHeading}
        />
        <GeneralHeading
          className={"text-center max-w-[870px] mx-auto"}
          heading={ContatctSubHeading}
        />
        {ContactInfoCard && (
          <div className="lg:flex justify-center items-center lg:space-y-0 space-y-5 lg:space-x-5 mt-[60px]">
            <InfoCard
              CardIcon={<Mail />}
              cardTitle={`Mail Us`}
              cardLine={`info@4dotssolutions.com`}
            />
            <InfoCard
              CardIcon={<Phone />}
              cardTitle={`Call Us`}
              cardLine={`+1 (778) 896-2443`}
            />
          </div>
        )}
        <div className="mt-[60px]">
          <h4 className="mb-[17px] font-poppins font-semibold text-base text-primary-dark	">
            Services you are looking for
          </h4>

          <form onSubmit={form.handleSubmit}>
            <div className={`${styles.contactCheckboxes}  md:gap-[8px] gap-[15px] mb-[30px] flex items-center overflow-x-auto `} role="group" aria-labelledby="checkbox-group">
         
                <Checkbox name={"website"} value={form.values.website} labelText="Website" onChange={form.handleChange}/>
                <Checkbox name={"Mobile_App"} value={form.values.Mobile_App} labelText="Mobile App" onChange={form.handleChange}/>
                <Checkbox name={"Digital_Marketing"} value={form.values.Digital_Marketing} labelText="Digital Marketing" onChange={form.handleChange}/>
                <Checkbox name={"Software_Development"} value={form.values.Software_Development}  labelText="Software Development" onChange={form.handleChange}/>
                <Checkbox name={"Seo"} value={form.values.Seo} labelText="SEO"  onChange={form.handleChange} />
                <Checkbox name={"graphic_designing"} value={form.values.graphic_designing} labelText="Graphic Designing"  onChange={form.handleChange} />
                <Checkbox name={"domain_hosting"} value={form.values.domain_hosting} labelText="Domain Hosting"  onChange={form.handleChange} />
                <Checkbox name={"ui_ux"} value={form.values.ui_ux} labelText="UI & UX Designing"  onChange={form.handleChange} />
                <Checkbox name={"product_photoshoot"} value={form.values.product_photoshoot} labelText="Product Photoshoot"  onChange={form.handleChange} />
                <Checkbox name={"other_services"} value={form.values.otherservices} labelText="Other Services"  onChange={form.handleChange} />
            </div>

            <div className="grid grid-cols-2 gap-[30px]">
              <div className="colum-1">
                <FormField
                  name="fullname"
                  id="fullname"
                  type={"text"}
                  onChange={form.handleChange}
                  placeholder={"Name*"}
                  className="w-full"
                  value={form.values.fullname}
                />
                {form.errors.fullname ? (
                  <div className=" font-normal pt-1 text-red-400 text-sm">
                    {form.errors.fullname}
                  </div>
                ) : null}
              </div>

              <div className="colum-1">
                <FormField
                  name={"email"}
                  type={"text"}
                  onChange={form.handleChange}
                  placeholder={"Email*"}
                  className="w-full"
                  value={form.values.email}
                />
                {form.errors.email ? (
                  <div className="font-normal pt-1 text-red-400 text-sm">
                    {form.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="colum-1">
                <FormField
                  name={"phone"}
                  type={"text"}
                  onChange={form.handleChange}
                  placeholder={"Phone*"}
                  className="w-full"
                  value={form.values.phone}
                />
                {form.errors.phone ? (
                  <div className="font-normal pt-1 text-red-400 text-sm">
                    {form.errors.phone}
                  </div>
                ) : null}
              </div>

              <div className="colum-1">
                <FormField
                  name={"companyname"}
                  type={"text"}
                  onChange={form.handleChange}
                  value={form.values.companyname}
                  placeholder={"Company*"}
                  className="w-full"
                />
                {form.errors.companyname ? (
                  <div className="font-normal pt-1 text-red-400 text-sm">
                    {form.errors.companyname}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-[30px] w-full">
              <TextArea onClick={form?.handleChange} name={"dev_message"} placeholder="Message" 
                  value={form.values.dev_message}  className={"w-full"} />
            </div>

            <div className="mt-[30px]">
              <Button
                className={
                  "bg-primary hover:shadow-custom-button hover:translate-y-[-3px] text-white font-poppins text-base flex gap-3 px-[26px] py-[16px] font-bold capitalize rounded-lg"
                }
                disabled={form.isSubmitting}
                >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
