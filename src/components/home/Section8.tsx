import React from 'react';
import { Link } from 'react-router-dom';

interface VideoCard {
  videoId: string;
  title: string;
  description: string;
  link: string;
}

const videoCards: VideoCard[] = [
  {
    videoId: 'WBI5atoH4Oo?si=r13EfZEoME7JdL11',
    title: 'How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month?',
    description: 'Tips and strategies to increase your podcast listenership organically.',
    link: 'https://youtu.be/WBI5atoH4Oo?si=eO4v-ex4OatZtQnQ',
  },
  {
    videoId: 'FUzBiPQHriU?si=DRD1-b2uSXzEoLYS',
    title: '19 Year Old Boy Freelancer Earns ₹5 Lakh/Month with Video Editing?',
    description: 'A deep dive into advanced audio editing techniques for podcasts.',
    link: 'https://youtu.be/FUzBiPQHriU?si=LvV5vUlAVZ0xHiIU',
  },
  {
    videoId: 'nuMBN9TVDds?si=nwiQOhj12Vj5rqY5',
    title: '16 Year Old Girl Earns ₹1 Lakh/Month with Video Editing?',
    description: 'Learn proven monetization models and sponsorship strategies.',
    link: 'https://youtu.be/nuMBN9TVDds?si=OEUYbFnB59rT0Rht',
  },
];

const Section8: React.FC = () => (
  <section className="py-16 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-6xl text-white font-bold text-center mb-12">Featured Podcast Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videoCards.map(({ videoId, title, description, link }) => (
          <div
            key={videoId}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Responsive YouTube iframe */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h1 className="text-xl font-semibold mb-2">{title}</h1>
              <p className="text-gray-400 flex-grow">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-green-500 font-medium hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='text-center pt-14'>
      <button className='bg-transparent border border-[#1ec258] hover:bg-[#1ec258] hover:text-white text-[#1ec258] font-bold py-3 px-8 rounded-full text-xl'>
        <Link to='/podcast'>Watch More Podcast</Link></button>
    </div>
  </section>
);

export default Section8;
