import React from "react";
import { FaPodcast, FaFilm, FaShareAlt } from "react-icons/fa";

const Section2: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white p-8 px-4 sm:px-14">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="inline-flex items-center text-green-400 uppercase text-sm tracking-widest mb-2">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 block"></span>
          What I Offer
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering Brands
          <br />
          Through Media
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {/* Podcast Production */}
        <div className="py-14 flex flex-col justify-between bg-green-400 text-black p-8 rounded-2xl h-full">
          <div>
            <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mb-4">
              <FaPodcast className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Podcast Production</h2>
            <p className="mb-6">
              Crafting high-quality podcasts that engage and grow your audience is my specialty.
            </p>
            <ul className="space-y-2 text-sm">
              <li>Custom Podcast Scripting</li><hr/>
              <li>Audio Editing & Mixing</li><hr/>
              <li>Publishing & Distribution</li>
            </ul>
          </div>
          <button className="mt-6 self-start bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition">
            ↳ Schedule a Consultation
          </button>
        </div>

        {/* Video Editing */}
        <div className="py-14 flex flex-col justify-between bg-gray-900 p-8 rounded-2xl h-full">
          <div>
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <FaFilm className="w-6 h-6 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Video Editing</h2>
            <p className="mb-6 text-white">
              Bringing your raw footage to life with dynamic and engaging edits.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Creative Storytelling</li><hr/>
              <li>Motion Graphics & Effects</li><hr/>
              <li>Fast Turnaround Times</li>
            </ul>
          </div>
          <button className="mt-6 self-start bg-green-400 text-black py-2 px-4 rounded-full hover:bg-green-300 transition">
            ↳ Schedule a Consultation
          </button>
        </div>

        {/* Social Media Marketing */}
        <div className="py-14 flex flex-col justify-between bg-white text-black p-8 rounded-2xl h-full">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaShareAlt className="w-6 h-6 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Social Media Marketing</h2>
            <p className="mb-6">
              Elevating your brand presence across platforms with targeted strategies.
            </p>
            <ul className="space-y-2 text-sm">
              <li>Content Planning</li><hr/>
              <li>Ad Campaign Management</li><hr/>
              <li>Analytics & Reporting</li>
            </ul>
          </div>
          <button className="mt-6 self-start bg-green-400 text-black py-2 px-4 rounded-full hover:bg-green-300 transition">
            ↳ Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
