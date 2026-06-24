import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer p-10 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-10">
        <div className="">
          <h4 className="text-xl mb-2">About BestBeach</h4>
          <p className="text-sm text-gray-300">
            We are that one beach club you always dream of to relax. We have
            been in the hospitality business for a decade now.
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-2">Useful Links</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm text-gray-300">
              <Link to="/">About Us</Link>
            </li>
            <li className="text-sm text-gray-300">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-2">Other Links</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="text-sm text-gray-300">
              <Link to="/">Menus</Link>
            </li>
            <li className="text-sm text-gray-300">
              <Link to="/">Restaurants</Link>
            </li>
            <li>
              <Link
                className="text-sm text-gray-300 hover:border-b border-white"
                to="/"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl mb-2">Location</h4>
          <p className="text-sm text-gray-300 mb-2">Baltimore - Maryland, US</p>
          <p className="text-sm text-gray-300">+1000000</p>
          <div className="flex gap-3 mt-5">
            <div className="bg-white rounded p-2 shadow-xl flex justify-center items-center">
              <Link to="https://www.facebook.com" className="text-blue-600">
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-white rounded p-2 shadow-xl flex justify-center items-center">
              <Link to="https://www.facebook.com" className="text-green-600">
                <FaWhatsapp />
              </Link>
            </div>
            <div className="bg-white rounded p-2 shadow-xl flex justify-center items-center">
              <Link to="https://www.facebook.com" className="text-amber-600">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
