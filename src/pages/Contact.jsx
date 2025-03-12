import React from "react";
import ContactBg from "../assets/ContactBg.png";
import ContactDetails from "../components/contact/ContactDetails";
import QueryForm from "../components/contact/QueryForm";
import CompanyLocationMap from "../components/contact/CompanyLocationMap";

const Contact = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 h-fit"
        style={{
          backgroundImage: `linear-gradient(rgba(241, 247, 255, 0.7), rgba(241, 247, 255, 0.3)), url(${ContactBg})`,
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling of the image
        }}
      >
        <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-20 flex justify-center">
          <ContactDetails />
        </div>
        <div className="p-8 md:px-10 lg:px-20 pt-5 pb-12 lg:py-20 flex justify-center">
          <QueryForm />
        </div>
      </div>
      <CompanyLocationMap />
    </>
  );
};

export default Contact;
