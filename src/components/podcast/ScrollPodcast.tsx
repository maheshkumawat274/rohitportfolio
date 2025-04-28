import type React from 'react';
import { useRef, useEffect, useState } from 'react';

const courses = [
  {
    title: 'Digital Branding- Build a Brand from Zero',
    category: 'Branding',
    image: 'https://rajeevmehta.in/xeteglak/2024/02/hero-thumb01.png',
    description: 'Learn powerful brand processes with digital strategies, logo design, modern branding.',
  },
  {
    title: 'Typography Explained – For Graphic & UI/UX Designer',
    category: 'Design',
    image: 'https://rajeevmehta.in/xeteglak/2024/02/hero-thumb02.png',
    description: 'Master typography: letter styles, emotions & techniques for design.',
  },
  {
    title: 'Documentary Style Video Editing',
    category: 'Video Editing',
    image: 'https://rajeevmehta.in/xeteglak/2024/06/Client-3.webp',
    description: 'Basics to advanced video editing for documentary-style visuals.',
  },
];

function useStackedScrollAnimation(cardCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Card height ~220, spacing 40
      const offset = rect.top + 100; // card section comes in view
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

const ScrollPodcast: React.FC = () => {
  const { containerRef, animatedIndexes } = useStackedScrollAnimation(courses.length);

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center bg-[#11130e] rounded-xl px-4 pt-6 pb-10 max-w-3xl mx-auto shadow-2xl relative"
    >
      <div className="flex w-full justify-between items-center mb-2">
        <span className="uppercase tracking-widest text-xs text-[#e0f136] font-bold">COURSES</span>
        <button className="text-[#11130e] bg-[#e0f136] font-bold rounded px-5 py-2 text-sm shadow-[0_2px_8px_rgba(224,241,54,0.30)] hover:scale-105 transition-transform">
          New Courses
        </button>
      </div>
      <div className="relative min-h-[480px] w-full mt-6">
        {courses.map((course, idx) => {
          const isActive = animatedIndexes.includes(idx);
          return (
            <div
              key={course.title}
              className={`absolute w-full left-0 shadow-lg rounded-xl bg-[#22231f] border border-[#e0f136] flex gap-6 px-6 py-5 transition-all duration-500
                ${isActive ? `translate-y-[-${16 * idx}px] scale-105 z-[${100-idx}] opacity-100` : `translate-y-[${40 * idx}px] scale-95 z-[${10-idx}] opacity-80`}
                hover:scale-110 hover:z-[150] hover:shadow-2xl group
              `}
              style={{
                top: `${50 * idx}px`,
              }}
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center flex-1">
                <span className="text-xs font-semibold uppercase text-[#e0f136] opacity-85 mb-1">{course.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-1">
                  {course.title}
                </h3>
                <p className="text-[#d2d2c2] text-sm opacity-85 mb-2">{course.description}</p>
                <span className="text-[#e0f136] text-lg">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScrollPodcast;
// ... existing code ... <EOF>
