import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#2B2B2B] text-white text-center text-top">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className='space-y-3'>
        <h1 className="font-bold text-3xl text-[#FFC107] lobster-two-bold">FoodNet</h1>
        <p className="font-medium text-lg cormorant-infant">Connecting Food Lovers Worldwide</p>
      </div>
      {/* Quick Links */}
      <div>
        <h2 className="font-bold text-xl mb-2">Quick Links</h2>
        <ul className='md:text-start lg:text-start poppins-medium'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      {/* Contact Us */}
      <div>
        <h2 className="font-bold text-xl mb-2">Contact Us</h2>
         <ul className="space-y-3 text-sm md:text-start lg:text-start poppins-medium ">
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaMapMarkerAlt className="text-[#FFC107]" />
              122 PetCare Street
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaEnvelope className="text-[#FFC107]" />
              info@petcare.com
            </li>
            <li className="flex justify-center md:justify-start lg:justify-start items-center gap-2">
              <FaPhoneAlt className="text-[#FFC107]" />
              +880 123 450 7999
            </li>
          </ul>
      </div>
      {/* Social Media */}
      <div>
        <h2 className="font-bold text-xl mb-2">Follow Us</h2>
        <div className="flex justify-center md:justify-start lg:justify-start gap-4">
          <a href="#" className=" hover:text-[#FFD700] bg-[#8B5E3C] rounded-full p-2">
            <FaFacebookF />
          </a>
          <a href="#" className=" hover:text-[#FFD700] bg-[#8B5E3C] rounded-full p-2">
            <RiTwitterXFill />
          </a>
          <a href="#" className=" hover:text-[#FFD700] bg-[#8B5E3C] rounded-full p-2">
            <FaInstagram />
          </a>
          <a href="#" className=" hover:text-[#FFD700] bg-[#8B5E3C] rounded-full p-2">
            <FaYoutube />
          </a>
        </div>
      </div>
      </div>
      {/* <div>
        <p className="font-bold text-xl">
          &copy; {new Date().getFullYear()} FoodNet. All rights reserved.
        </p>
      </div> */}
    </footer>
  )
}

export default Footer