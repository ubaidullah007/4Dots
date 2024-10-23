import * as yup from "yup";


export class SuggestionFormEntity {
    fullname?: string;
    email?: string;
    phone?: string;
    typeoffeedback?: string;
    feedback?: string;
  


    static yupSchema() {
        return yup.object({
            fullname: yup.string().trim().nullable(),
            email: yup.string().email().trim().nullable(),
            phone: yup.string().nullable(),
            typeoffeedback: yup.string().trim().nullable(),
            dev_message: yup.string().trim().nullable(),
            feedback: yup.string(),
           
        })
    }
}







