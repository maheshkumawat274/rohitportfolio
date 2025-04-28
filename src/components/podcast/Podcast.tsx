import React from 'react';

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
  {
    videoId: 'PS-1HK_BVys?si=TV4HYCHLDHHT6uqw',
    title: 'UPSC Aspirants, Don’t Miss This Before You Start! ',
    description: 'Tips and strategies to increase your podcast listenership organically.',
    link: 'https://youtu.be/PS-1HK_BVys?si=kHHvtpaFhtm7xQ7f',
  },
  {
    videoId: '43LbnPWA9wY?si=WLxZrpN0PnvDvVFi',
    title: 'Before You Start an Agency in 2025 Watch This! (Real Talk) |',
    description: 'A deep dive into advanced audio editing techniques for podcasts.',
    link: 'https://youtu.be/43LbnPWA9wY?si=WLxZrpN0PnvDvVFi',
  },
  {
    videoId: 'nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv',
    title: '₹1.2 CRORE Worth of Business Knowledge in 47 Minutes?',
    description: 'Learn proven monetization models and sponsorship strategies.',
    link: 'https://youtu.be/nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv',
  },
];

const PodcastVideos: React.FC = () => (
  <section className="py-16 px-6 bg-black mt-14">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-6xl text-white font-bold text-center mb-12">All Podcast Episodes</h2>
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
      <a href='https://www.youtube.com/@therohitprashar' className='bg-transparent border border-[#1ec258] hover:bg-[#1ec258] hover:text-white text-[#1ec258] font-bold py-3 px-8 rounded-full text-xl'>Watch More Podcast on Youtube</a>
    </div>
    
  </section>
);

export default PodcastVideos;
