import * as yup from "yup";


export class ContactFormEntity {
    fullname?: string;
    email?: string;
    phone?: string;
    companyname?: string;
    dev_message?: string;
    website?: string;
    Mobile_App?: string;
    Digital_Marketing?: string;
    Software_Development?: string;
    Seo?: string;
    graphic_designing?: string;
    domain_hosting?: string;
    domainhosting?: string;
    ui_ux?: string;
    product_photoshoot?: string;
    otherservices?: string;


    static yupSchema() {
        return yup.object({
            fullname: yup.string().trim().nullable(),
            email: yup.string().email().trim().nullable(),
            phone: yup.string().nullable(),
            companyname: yup.string().trim().nullable(),
            dev_message: yup.string().trim().nullable(),
            website: yup.string(),
            Mobile_App: yup.string(),
            Digital_Marketing: yup.string(),
            Software_Development: yup.string(),
            graphic_designing: yup.string(),
            product_photoshoot: yup.string(),
            ui_ux: yup.string(),
            seo: yup.string(),
            otherservices: yup.string(),
            domainhosting: yup.string(),
            Devops_Development: yup.string(),
        })
    }
}







