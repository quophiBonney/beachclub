import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const contactItems = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Beach Clubing",
    text: "Enjoy the ultimate beach club experience with live DJs, signature cocktails, beachfront lounges, and energetic entertainment. Perfect for socializing, celebrating, or simply soaking up the atmosphere by the sea.",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Restaurant",
    text: "Indulge in exceptional dining experiences featuring fresh ingredients, expertly prepared cuisine, and stunning coastal views. Whether enjoying local specialties or international favorites, guests can savor memorable meals in a vibrant setting.",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Outdoor Fun",
    text: "Discover exciting outdoor activities designed for adventure and relaxation. From beach games and water sports to scenic walks and family-friendly experiences, there is something for every guest to enjoy under the open sky.",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Hospitality",
    text: "Experience premium hospitality with elegant accommodations, personalized service, and a relaxing atmosphere designed to make every guest feel welcome. From luxurious rooms to attentive staff, every detail is crafted for comfort and unforgettable stays.",
  },
];

const ServicesCard = () => {
  return (
    <section className="mt-16 px-5 lg:px-20 mb-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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

export default ServicesCard;
