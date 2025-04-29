import React from "react";
import SocialMediaIcons from "../contact/SocialMediaIcons";

const Section4: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-14">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-16">
        {/* Left Side Image with Background */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] rounded-3xl overflow-hidden">
            {/* Green Background Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 rounded-3xl z-0"></div>

            {/* Image */}
            <img
              src="./imgs/rohitabout.png"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <span className="inline-flex items-center text-black text-sm uppercase tracking-wide bg-white border border-gray-300 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 block"></span>
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Discover My <br />
            Design Journey
          </h2>

          <p className="mt-6 text-gray-700 max-w-lg mx-auto md:mx-0">
            Hello! I’m Rohit Prashar, a passionate content creator with over 5+ years of
            experience in creating engaging videos, podcasts, and social media content. My
            goal is to bring your vision to life through compelling digital content.
          </p>

          <div className="mt-8">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
