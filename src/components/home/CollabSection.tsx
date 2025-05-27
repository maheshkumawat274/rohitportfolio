import React from "react";
import { motion } from "framer-motion";

const CollabSection: React.FC = () => {
  return (
    <section className="bg-black text-white w-full py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center justify-center">
      <motion.div
        className="lg:w-1/2 w-full mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
          Behind Every Great Collaboration... There’s a Name
          <span className="text-blue-400"> “Rohit Prashar”</span>!
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Are you a business owner looking to elevate your brand through impactful storytelling? Rohit Prashar offers a premium podcast platform that not only amplifies your marketing efforts but also connects with a wider audience through real, inspiring journeys. His platform is a source of motivation for entrepreneurs navigating challenges and striving for success. Join the Founders Podcast and let your story spark the next wave of innovation.
        </p>
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="rounded-xl overflow-hidden shadow-xl max-w-md">
          <img
            src="./imgs/rohitabout.png"
            alt="Rohit Prashar"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CollabSection;
