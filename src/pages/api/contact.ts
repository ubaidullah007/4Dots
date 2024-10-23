import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const {
      fullname,
      email,
      companyname,
      phone,
      dev_message,
      website,
      Mobile_App,
      Digital_Marketing,
      Software_Development,
      Seo,
      graphic_designing,
      domain_hosting,
      ui_ux,
      product_photoshoot,
      otherservices,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        //This is gmail App Credentials
        user: 'bilawal.ali2626@gmail.com',
        pass: 'lscv qztk gedd qkeu',
      },
    });

    try {
      
      await transporter.sendMail({
        from: email,
        to: 'bilawal.ali2626@gmail.com',
        subject: `New Contact Form Submission from ${fullname}`,
        text: `Full Name: ${fullname}\nEmail: ${email}\nCompany Name: ${companyname}\nPhone: ${phone}\nMessage: ${dev_message}\nWebsite: ${website || 'N/A'}\nMobile App: ${Mobile_App || 'N/A'}\nDigital Marketing: ${Digital_Marketing || 'N/A'}\nSoftware Development: ${Software_Development || 'N/A'}\nSEO: ${Seo || 'N/A'}\nGraphic Designing: ${graphic_designing || 'N/A'}\nDomain Hosting: ${domain_hosting || 'N/A'}\nUI/UX: ${ui_ux || 'N/A'}\nProduct Photoshoot: ${product_photoshoot || 'N/A'}\nOther Services: ${otherservices || 'N/A'}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
