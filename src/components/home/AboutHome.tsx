import React from "react";
import SocialMediaIcons from "../contact/SocialMediaIcons";
import { Link } from "react-router-dom";

const AboutHome: React.FC = () => {
  return (
    <section className="bg-black py-6 md:py-16 px-2 sm:px-14" >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-16">
        {/* Left Side Image with Background */}
        <div className="w-full md:w-1/2 flex justify-center"data-aos="zoom-in" >
          <div className="relative w-[400px] h-[400px] sm:w-[600px] sm:h-[450px] rounded-3xl overflow-hidden">
            {/* Green Background Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 rounded-3xl z-0"></div>

            {/* Image */}
            <img
              src="/imgs/abouthome.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 pt-6 md:pt-0 md:text-left"data-aos="zoom-in" >
          <span className="inline-flex items-center text-black text-sm uppercase tracking-wide bg-white border border-gray-300 px-3 py-1 rounded-full">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-300">
            My Journey
          </h2>

          <p className="mt-6 text-gray-500 max-w-lg mx-auto md:mx-0">
            Hi, I’m Rohit Prashar — a content creator passionate about helping students, creators, and brands grow through impactful content.
            Through my YouTube channel, I guide college students in learning new skills, starting freelancing, finding internships, and even launching startups.
            I also collaborate with clients to boost their social media presence through content creation, video editing, and strategy planning.
          </p>
          <Link to='/aboutus'>
           <button className="inline-flex items-center px-4 py-2 border border-[#1ec258] text-[#1ec258] rounded-lg hover:bg-[#1ec258] hover:text-black transitions mt-3 cursor-pointer">View more</button>
          </Link>

          <div className="mt-8">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
