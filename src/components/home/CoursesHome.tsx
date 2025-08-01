import {
  FaBullhorn,
  FaPencilRuler,
  FaVideo,
  FaPodcast,
  FaHandshake
} from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  Branding: <FaBullhorn className="w-16 h-16 text-[#1ec258]" />,
  Design: <FaPencilRuler className="w-16 h-16 text-[#1ec258]" />,
  'Video Editing': <FaVideo className="w-16 h-16 text-[#1ec258]" />,
  Podcast: <FaPodcast className="w-16 h-16 text-[#1ec258]" />,
  Freelancing: <FaHandshake className="w-16 h-16 text-[#1ec258]" />,
};

const podcasts = [
  {
    title: 'YouTube Growth & Monetization',
    category: 'Branding',
    desc: 'Learn powerful brand processes with digital strategies, logo design, modern branding.',
    
  },
  {
    title: 'Social Media Branding & Viral Reels Strategy',
    category: 'Design',
    desc: 'Master typography: letter styles, emotions & techniques for design.',
    
  },
  {
    title: 'Video Editing Mastery (Premiere Pro and more)',
    category: 'Video Editing',
    desc: 'Basics to advanced video editing for documentary-style visuals.',
    
  },
  {
    title: 'Podcast Launch & Editing',
    category: 'Podcast',
    desc: 'Learn podcast planning, recording, editing, and distribution workflows.',
   
  },
  {
    title: 'Freelancing & Client Acquisition',
    category: 'Freelancing',
    desc: 'Strategies to find clients, pitch services, and build lasting freelance relationships.',
   
  },
];

const CoursesHome: React.FC = () => {
  return (
    <section className="bg-black relative px-2 sm:px-4 py-4 min-h-[150vh]" style={{ zIndex: 10 }}>
      <div className='text-center pb-5 text-gray-300'>
      <h1 className='text-3xl sm:text-6xl font-bold'>Courses (Coming Soon...🚀)</h1>
      <p className='text-lg pt-2'>Level Up Your Skills with Rohit Prashar – Exclusive Courses Coming Soon!</p>
      <p className='text-lg font-bold'>Topics You'll Learn</p>
     </div>
      <div className="relative">
        {podcasts.map((podcast, i) => (
          <div
            key={podcast.title}
            className="sticky top-[90px] max-w-6xl mx-auto w-full"
            style={{
              marginTop: i === 0 ? "4rem" : "2rem",
              zIndex: 20 + i,
            }}
          >
            <div className="   rounded-xl p-6 py-14 flex items-start border border-[#36d23b] shadow-xl bg-[#0D0D0D] mb-8 gap-14">
              {/* Icon */}
              <div className="hidden sm:block">
                {iconMap[podcast.category]}
              </div>
              {/* Content */}
              <div className="flex gap-4 flex-col sm:flex-row">
               
              <div>
                <p className="text-md text-[#1ec258] font-semibold uppercase mb-1">
                  {podcast.category}
                </p>
                <h2 className="text-xl sm:text-4xl font-bold text-gray-300 mb-1">
                  {podcast.title}
                </h2>
                <p className="text-lg text-gray-500 mb-2">{podcast.desc}</p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesHome;
