// Contacticons.tsx
import React from 'react';
import { FaBehance, FaDribbble, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contacticons: React.FC = () => {
  return (
    <div className="min-h-[40vh] bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">

        {/* Email Section */}
        <div className="bg-[#1c1c1c] rounded-2xl p-10 flex flex-col items-center min-w-[300px]">
          <p className="text-xs text-gray-400 mb-4 tracking-widest">EMAIL ME</p>
          <a href="mailto:hello@wilsonbrock.com" className="text-2xl underline">
            hello@wilsonbrock.com
          </a>
        </div>

        {/* Social Links Section */}
        <div className="bg-[#1c1c1c] rounded-2xl p-10 flex flex-col items-center min-w-[300px]">
          <p className="text-xs text-gray-400 mb-4 tracking-widest">FIND ME</p>
          <div className="flex gap-4">
            <a href="#" className="bg-lime-400 text-black rounded-full p-3 hover:bg-lime-500">
              <FaBehance size={20} />
            </a>
            <a href="#" className="bg-lime-400 text-black rounded-full p-3 hover:bg-lime-500">
              <FaDribbble size={20} />
            </a>
            <a href="#" className="bg-lime-400 text-black rounded-full p-3 hover:bg-lime-500">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="bg-lime-400 text-black rounded-full p-3 hover:bg-lime-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacticons;
