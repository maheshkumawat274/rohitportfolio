import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "../contact/SocialMediaIcons";

const Join: React.FC = () => {
  return (
    <section className="bg-white text-black w-full py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center justify-center">
      <motion.div
        className="lg:w-1/2 w-full mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl text-center font-bold leading-snug mb-6">
          Join the community
        </h1>
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className=" max-w-md">
          <SocialMediaIcons/>
        </div>
      </motion.div>
    </section>
  );
};

export default Join;
