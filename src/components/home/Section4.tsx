import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
const Section4: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-16">
        {/* Left Image Card */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-green-300 to-green-100 p-4 rounded-2xl shadow-lg">
          <img
            src='./imgs/aboutme.JPG'
            alt="Profile"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <span className="inline-flex items-center text-black text-sm uppercase tracking-wide bg-white border border-gray-300 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 block"></span>
            About Me
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Discover My
            <br />
            Design Journey
          </h2>
          <p className="mt-6 text-gray-700 max-w-lg">
          I’m Rohit Prashar, a content creator, video editor, and digital strategist passionate about helping brands and individuals amplify their online presence. With years of experience in video editing, podcast production, and social media branding, I specialize in crafting engaging content that drives views, engagement, and growth.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="https://www.youtube.com/@therohitprashar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/therohitprashar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://whatsapp.com/channel/0029Va9ciRxIHphDsqDdFM3r"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/therohitprashar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/therohitprashar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaLinkedin />
            </a>
            
            <a
              href="https://x.com/therohitprashar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            >
              <SiThreads />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
