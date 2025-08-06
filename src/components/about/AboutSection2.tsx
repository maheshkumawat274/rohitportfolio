import React, { useState } from "react";

const AboutSection2: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const shortContent = `This was the year I stepped into college. New city, new people, and a lot of dreams in my heart.
But things weren’t easy.

I didn’t have the best phone or a fancy setup — just a second-hand laptop and a big desire to learn. While others were enjoying college life, I was learning editing, content creation, and how to build something of my own.

I used to skip outings to watch YouTube tutorials. Late nights, self-doubt, but still — I kept going. This was the year I realised: "Aapke sapne sirf aap samajhte ho, aur koi nahi."`;
  
  const fullContent = `This was the year I stepped into college. New city, new people, and a lot of dreams in my heart.
But things weren’t easy.

I didn’t have the best phone or a fancy setup — just a second-hand laptop and a big desire to learn. While others were enjoying college life, I was learning editing, content creation, and how to build something of my own.

I used to skip outings to watch YouTube tutorials. Late nights, self-doubt, but still — I kept going. This was the year I realised: "Aapke sapne sirf aap samajhte ho, aur koi nahi."

That one thought gave me strength every day. It shaped my discipline, my work-ethic, and the way I approach building content and helping others do the same.`;

  return (
    <section className="bg-black px-4 md:px-20 py-4 md:py-14">
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-300">
            2021 – College Start
          </h2>

          <p className="mt-6 text-gray-400 whitespace-pre-line mx-auto lg:mx-0">
            {expanded ? fullContent : shortContent}
          </p>

          <div className="mt-4">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center px-4 py-2 border border-[#1ec258] text-[#1ec258] rounded-lg hover:bg-[#1ec258] hover:text-black transition"
            >
              {expanded ? "View less" : "View more"}
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up">
          <div className="relative w-full h-72 sm:h-100 lg:h-[520px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 rounded-3xl z-0" />
            <img
              src="/imgs/2021.jpg"
              alt="College start - 2021"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection2;
