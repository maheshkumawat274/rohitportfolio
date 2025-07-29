import React from "react";

const AboutSection1: React.FC = () => {
  return (
    <section className="bg-black py-0 md:py-16 px-2 sm:px-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-16">
        {/* Left Side Image with Background */}
        <div className="w-full mb-12 md:mb-0  md:text-left">
          

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-gray-300">
            Discover My <br />
            Design Journey
          </h2>

          <p className="mt-6 text-gray-500  mx-auto md:mx-0">
            Hello! I’m Rohit Prashar, a passionate content creator with over 5+ years of
            experience in creating engaging videos, podcasts, and social media content. My
            goal is to bring your vision to life through compelling digital content.
          </p>

          
        </div>

        {/* Right Text */}
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[400px] sm:w-[600px] sm:h-[450px] rounded-3xl overflow-hidden">
            {/* Green Background Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 rounded-3xl z-0"></div>

            {/* Image */}
            <img
              src="/imgs/about1.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
