import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contact/SocialMediaIcons";
import BookPodcastBtn from "../btns/BookPodcastBtn";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer: React.FC = () => {
  return (
    <>
      

      {/* Footer with Background Image and Overlay */}
      <div className="relative w-full pt-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imgs/dr taruna work.png')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80" />

        {/* WhatsApp Section */}
       {/* WhatsApp Section */}
        
        
        {/* Content */}
        <footer className="relative z-10 text-gray-300 py-14 px-4 lg:px-14 flex flex-col lg:flex-row justify-between items-start text-sm gap-4">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 md:w-1/3 px-0 lg:px-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-green-500">Youtube Channel</h1>
            <ul className="text-lg space-y-1 py-4">
              <li>
                <a 
                  href="https://www.youtube.com/@therohitprashar/videos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Rohit Prashar Main Channel
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@rohitprasharclips" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Rohit Prashar Clips
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@rohitprasharshorts" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Rohit Prashar Shorts
                </a>
              </li>
            </ul>
            </div>
            
          </div>

          {/* Useful Links */}
          <div className="mb-4 md:mb-0 md:w-1/3 px-0 lg:px-8">
            <h4 className="font-semibold text-green-500 mb-1 text-xl sm:text-2xl">Useful Links</h4>
            <ul className="text-lg space-y-1">
              <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
              <li><Link to="/courses" className="hover:underline">New Courses</Link></li>
              <li><Link to="/podcast" className="hover:underline">Podcast</Link></li>
              <li><Link to="/consultation_call" className="hover:underline">1:1 Consultation Call</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h2 className="font-semibold text-green-500 mb-1 text-xl sm:text-2xl">Contact Us</h2>
            <div className="text-lg space-y-1">
               <div className="text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-lg" />
                    <span>+91 8252587182</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-lg" />
                    <span>info@rohitprashar.in</span>
                  </div>
                </div>
              <div className="py-2">
                <BookPodcastBtn/>
              </div>
              <div className="space-y-1">
                <h3>FOLLOW</h3>
                <SocialMediaIcons/>
              </div>
            </div>
          </div>
        </footer>

        {/* Bottom Bar */}
        <div className="relative z-10 text-sm sm:text-lg font-bold py-6 text-center text-gray-300 bg-black/70">
          <span>
            &copy; 2025 <span className="text-green-500">Rohitprashar.com</span> All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
