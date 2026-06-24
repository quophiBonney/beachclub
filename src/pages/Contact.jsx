import React from "react";
import Map from "../components/Map";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import ArtisticContactHero from "../components/ContactHero";

const Contact = () => {
  return (
    <>
      <ArtisticContactHero />
      <ContactCard />
      <ContactForm />
      <Map />
    </>
  );
};

export default Contact;
