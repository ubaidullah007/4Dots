import Checkbox from "../../../components/checkbox/Checkbox";
import React, { ChangeEvent, useEffect, useState } from "react";
import SubHeading from "@/components/Heading/SubHeading";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import styles from './SuggestionForm.module.css';
import FormField from "@/components/formField/FormField";
import TextArea  from "@/components/textArea/TextArea";
import { Button } from "@/components/Button/Button";
import InfoCard from "@/components/infoCard";
import { Mail, Phone } from "@/svg";
import { useFormik } from "formik";
import {  toast } from 'react-toastify'; 
import { SuggestionFormEntity } from "@/components/models/suggestionform/suggestion.entity";

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
    initialValues: new SuggestionFormEntity(),
    validationSchema: SuggestionFormEntity.yupSchema,
    enableReinitialize : true,
    onSubmit: async (values,  actions) => {

      console.log(values,'++++++++++++++++++++++++++++++++++++++');
      try {
        const response = await fetch('/api/suggestion', {
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
              typeoffeedback: '',
              phone:'',
              feedback:'',
              
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
  }, [form?.values]);

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
          <div className="lg:flex justify-center items-center lg:space-y-0 space-y-5 lg:space-x-5 mt-[60px] mb-[60px]">
            <InfoCard
              CardIcon={<Mail />}
              cardTitle={`Mail Us`}
              cardLine={`customercare@4dotssolutions.com`}
            />
            <InfoCard
              CardIcon={<Phone />}
              cardTitle={`Call Us`}
              cardLine={`+1 (778) 896-2443`}
            />
          </div>
        )}
        <div className="mt-[60px]">
       

          <form onSubmit={form.handleSubmit}>
           

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
                  name={"typeoffeedback"}
                  type={"text"}
                  onChange={form.handleChange}
                  value={form.values.typeoffeedback}
                  placeholder={"Type of feedback*"}
                  className="w-full"
                />
                {form.errors.typeoffeedback ? (
                  <div className="font-normal pt-1 text-red-400 text-sm">
                    {form.errors.typeoffeedback}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-[30px] w-full">
              <TextArea placeholder="Share Your Feedback" onChange={form?.handleChange} name={"feedback"} 
                  value={form.values.feedback}  className={"w-full"} />
            </div>

            <div className="mt-[30px]">
              <Button
                className={
                  "bg-primary hover:shadow-custom-button hover:translate-y-[-3px] text-white font-poppins text-base flex gap-3 px-[26px] py-[16px] font-bold capitalize rounded-lg"
                }
                disabled={form.isSubmitting}
                >
                Send Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
