import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const contactItems = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    text: "Baltimore, Maryland, US",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    text: "+1 (410) 123-4567",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    text: "hello@example.com",
  },
];

const ContactCard = () => {
  return (
    <section className="mt-16 px-5 lg:px-20 mb-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white">
              {item.icon}
            </div>

            <h4 className="text-lg font-semibold text-gray-900 lg:text-xl">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-600 lg:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;
