import React from "react";

const ContactCard = () => {
  return (
    <div className="mt-16 grid grid-cols lg:grid-cols-2">
      <div>
        <div className="">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            className="w-full p-2 rounded"
            placeholder="Enter first name"
          />
        </div>
        <div className="">
          <label htmlFor="fname">Second Name</label>
          <input
            type="text"
            name="fname"
            className="w-full p-2 rounded"
            placeholder="Enter last name"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
