import React from 'react';
import { Link } from 'react-router-dom';

const AboutPodcast: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Stats Section */}
        <div className="space-y-6">
          {[
            { number: '20+', label: 'Episodes' },
            { number: '20k+', label: 'Downloads' },
            { number: '50+', label: 'Expert Guests' },
            { number: '5 Years', label: 'Podcasting Experience' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-green-300 to-green-500 p-6 rounded-md shadow-lg text-center">
              <h1 className="text-3xl font-bold">{stat.number}</h1>
              <p className="text-white text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div>
          <img
            src="./imgs/podcast.JPG" // Replace with your actual image path
            alt="Microphone"
            className="rounded-md w-full h-[50vh] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5">
          <h1 className="text-green-400 uppercase font-semibold">About Podcast</h1>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            Sharing Real Stories <br /> That Inspire and Impact
          </h2>
          <p className="text-gray-300">
            I'm a passionate podcast host on a mission to amplify voices that matter. Every week, I sit down with 
            industry leaders, creators, and changemakers to explore their journeys, struggles, and insights. 
            Whether you're looking for motivation, practical tips, or a fresh perspective — there's something here for you.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-pink-500 text-3xl mb-2">🎙</div>
              <h3 className="font-bold">Honest Conversations & Expert Guests</h3>
              <p className="text-gray-400">Unfiltered discussions that dig deep into what really drives success and growth.</p>
            </div>
            <div>
              <div className="text-pink-500 text-3xl mb-2">🚀</div>
              <h3 className="font-bold">Fresh Content, Every Week</h3>
              <p className="text-gray-400">New episodes drop regularly with fresh takes and valuable takeaways.</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 cursor-pointer bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium">
            <Link to="/about">More About Me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPodcast;
