import { LocationOnRounded, MailRounded, PhoneRounded } from "@mui/icons-material";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="rounded-md">
      <p className="text-xl md:text-4xl font-bold text-contrast pb-2 md:pb-4">Get in Touch</p>
      <div className="flex items-center py-4">
        <div className="bg-white rounded-full p-2">
          <LocationOnRounded color="primary" fontSize="large" />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-primary text-base md:text-lg">
            Visit Us
          </p>
          {/* <p className='italic text-white text-sm'>Come say hello at our office.</p> */}
          <p className="text-sm md:text-base font-inter text-contrast font-medium">
            124-A Katwaria Sarai, New Delhi 110016, India.
          </p>
        </div>
      </div>
      <div className="flex items-center py-4">
        <div className="bg-white rounded-full p-2">
          <MailRounded color="primary" fontSize="large" />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-primary text-md">Chat With Us</p>
          {/* <p className='italic text-white text-sm'>Our friendly team is here to help.</p> */}
          <a
            href="mailto:post@mlinfomap.com"
            className="text-sm md:text-base font-inter text-contrast font-medium"
          >
            post@mlinfomap.com
          </a>
        </div>
      </div>
      <div className="flex items-center py-4">
        <div className="bg-white rounded-full p-2">
          <PhoneRounded color="primary" fontSize="large" />
        </div>
        <div className="pl-2">
        <p className="font-semibold text-primary text-md">Call Us</p>
        {/* <p className='italic text-white text-sm'>Mon-Fri (odd Sat) from 9am to 5:30pm.</p> */}
        <p className="text-sm md:text-base font-inter text-contrast font-medium">
          +91 11 41688592, +91 11 41688593
        </p>
        </div>
      </div>
      {/* <div className="flex items-center py-2">
        <div className="bg-white rounded-full p-2">
          <PhoneRounded color="primary" fontSize="large" />
        </div>
        <div className="pl-2">
        <p className="font-semibold text-primary text-md">Connect With Us</p>
        <p className='italic text-white text-sm'>Explore more about us.</p>
        <p className="font-medium text-white text-sm">
          <a href="https://www.linkedin.com/company/ml-infomap-pvt-ltd/">
            www.linkedin.com/company/ml-infomap-pvt-ltd/
          </a>
        </p>
        </div>
      </div> */}



    </div>
  );
};

export default ContactDetails;
