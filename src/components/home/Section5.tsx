import React, { useRef, useEffect, useState } from 'react';
import {
  FaBullhorn,
  FaPencilRuler,
  FaVideo,
  FaPodcast,
  FaHandshake
} from 'react-icons/fa';

// Map each category to a React Node (icon)
const iconMap: Record<string, React.ReactNode> = {
  Branding:      <FaBullhorn className="w-16 h-16 text-[#1ec258]" />,  
  Design:        <FaPencilRuler className="w-16 h-16 text-[#1ec258]" />,
  'Video Editing': <FaVideo className="w-16 h-16 text-[#1ec258]" />,
  Podcast:       <FaPodcast className="w-16 h-16 text-[#1ec258]" />,
  Freelancing:   <FaHandshake className="w-16 h-16 text-[#1ec258]" />,
};

const courses = [
  {
    title: 'YouTube Growth & Monetization',
    category: 'Branding',
    description: 'Learn powerful brand processes with digital strategies, logo design, modern branding.',
  },
  {
    title: 'Social Media Branding & Viral Reels Strategy',
    category: 'Design',
    description: 'Master typography: letter styles, emotions & techniques for design.',
  },
  {
    title: 'Video Editing Mastery (Premiere Pro and more)',
    category: 'Video Editing',
    description: 'Basics to advanced video editing for documentary-style visuals.',
  },
  {
    title: 'Podcast Launch & Editing',
    category: 'Podcast',
    description: 'Learn podcast planning, recording, editing, and distribution workflows.',
  },
  {
    title: 'Freelancing & Client Acquisition',
    category: 'Freelancing',
    description: 'Strategies to find clients, pitch services, and build lasting freelance relationships.',
  },
];

function useStackedScrollAnimation(cardCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offset = rect.top + 100;
      const newIndexes: number[] = [];
      for (let i = 0; i < cardCount; i++) {
        if (offset < window.innerHeight - i * 120) {
          newIndexes.push(i);
        }
      }
      setAnimatedIndexes(newIndexes);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [cardCount]);

  return { containerRef, animatedIndexes };
}

const Section5: React.FC = () => {
  const { containerRef, animatedIndexes } = useStackedScrollAnimation(courses.length);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Only apply click effect on mobile (<768px)
  const handleClick = (idx: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setClickedIndex(idx);
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center rounded-xl px-4 pt-6 pb-[200px] max-w-6xl mx-auto relative"
    >
     <div className='text-center pt-14 pb-5 text-white'>
      <h1 className='text-3xl sm:text-6xl font-bold'>Courses (Comming Soon...🚀)</h1>
      <p className='text-lg pt-2'>Level Up Your Skills with Rohit Prashar – Exclusive Courses Coming Soon!</p>
      <p className='text-lg font-bold'>Topics You'll Learn</p>
     </div>
      <div className="flex w-full justify-between items-center mb-2">
        <span className="uppercase tracking-widest text-xl text-[#1ec258] font-bold">COURSES</span>
        <button className="text-[#11130e] bg-[#1ec258] font-bold rounded px-5 py-2 text-sm shadow-[0_2px_8px_rgba(224,241,54,0.30)] hover:scale-105 transition-transform">
          New Courses
        </button>
      </div>
      <div className="relative min-h-[480px] w-full mt-6">
        {courses.map((course, idx) => {
          const isActive = animatedIndexes.includes(idx);
          const isClicked = clickedIndex === idx;

          // Determine transform classes
          let transformClass = '';
          if (isClicked) {
            transformClass = `translate-y-[-${16 * idx}px] scale-110 z-[150] opacity-100`;
          } else if (isActive) {
            transformClass = `translate-y-[-${16 * idx}px] scale-105 z-[${100 - idx}] opacity-100`;
          } else {
            transformClass = `translate-y-[${40 * idx}px] scale-95 z-[${10 - idx}] opacity-80`;
          }

          return (
            <div
              key={course.title}
              onClick={() => handleClick(idx)}
              className={`absolute w-full left-0 cursor-pointer rounded-xl bg-[#22231f] border border-[#1ec258] flex gap-6 px-6 py-5 sm:py-10  transition-all duration-500 ${transformClass} hover:scale-110 hover:z-[150] hover:shadow-2xl`}
              style={{ top: `${70 * idx}px` }}
            >
              {/* Icon instead of image */}
              <div className="w-32 h-32 flex items-center justify-center flex-shrink-0">
                {iconMap[course.category] || <FaBullhorn className="w-16 h-16 text-[#1ec258]" />}
              </div>

              <div className="flex flex-col justify-center flex-1">
                <span className="text-xs sm:text-xl font-semibold uppercase text-[#1ec258] opacity-85 mb-1">
                  {course.category}
                </span>
                <h1 className="text-lg sm:text-3xl font-bold text-white leading-tight mb-1">
                  {course.title}
                </h1>
                <p className="text-[#d2d2c2] text-sm sm:text-lg opacity-85 mb-2">
                  {course.description}
                </p>
                <span className="text-[#1ec258] text-lg">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
