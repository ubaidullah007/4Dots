import { Button } from "@/components/Button/Button";
import FormField from "@/components/formField/FormField";
import  TextArea  from "@/components/textArea/TextArea";
import React from "react";
import styles from './Jobs.module.css'
import Image from "next/image";
import uploadDoc from '../../../images/upoload-icon.svg'

const ApplyJobForm = () => {
  const onSubmit = () => {
    console.log("hello ");
  };
  return (
    <div className={styles.jobFormWrapper}>
      <h2 className="text-2xl font-poppins font-semibold mb-[24px]">Apply for this position</h2>

      <FormField
        name={""}
        type={"text"}
        onChange={onSubmit}
        placeholder={"Name*"}
        className="w-full mb-[26px]"
      />
      <FormField
        name={""}
        type={"text"}
        onChange={onSubmit}
        placeholder={"Email*"}
        className="w-full mb-[26px]"
      />
      <FormField
        name={""}
        type={"number"}
        onChange={onSubmit}
        placeholder={"Phone*"}
        className="w-full mb-[26px]"
      />
      <TextArea
        className="w-full mb-[26px]"
      />
      <label htmlFor={'file'} className="inline-block cursor-pointer relative w-full border border-gray-200 border-1 rounded-lg transition-transform duration-300 ease-in-out opacity-50 hover:opacity-100 hover:scale-y-110 hover:z-10">
      <span className=" py-2 cursor-pointer flex justify-start items-center ">
        <Image src={uploadDoc} alt="upload documnet" className="h-10 w-14 mx-4"/>
        <p>Upload Document</p>
      </span>
      <FormField
        name={""}
        type={"file"}
        onChange={onSubmit}
        placeholder={"Name*"}
        className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
      />
      </label>
        <div className="mt-[10px]">
              <Button
                className={
                  "bg-primary hover:shadow-custom-button hover:translate-y-[-3px] w-full text-white font-poppins text-center text-base  gap-3 flex justify-center py-[16px] font-bold capitalize rounded-lg"
                }
              >
                Submit
              </Button>
            </div>
    </div>
  );
};

export default ApplyJobForm;
