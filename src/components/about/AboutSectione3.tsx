import React, { useState } from "react";

const AboutSection3: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const fullContent = `
Hi, I’m Rohit Prashar — a content creator passionate about helping students, creators, and brands grow through impactful content.
Through my YouTube channel, I guide college students in learning new skills, starting freelancing, finding internships, and even launching startups.
I also collaborate with clients to boost their social media presence through content creation, video editing, and strategy planning.
Whether you're starting your journey or aiming for your next big milestone — I’m here to help you grow!

🎙️ Podcast Host – The Rohit Prashar Show
I talk with founders, freelancers, creators, and professionals who have built their careers in unique ways.
We explore real-life stories, career lessons, and practical advice — especially for people in their 20s figuring out careers, content, and personal growth.

🚀 What’s Next:
I’m currently working on an exciting new project — launching soon!
`;

  const shortContent = `
Hi, I’m Rohit Prashar — a content creator passionate about helping students, creators, and brands grow through impactful content.
Through my YouTube channel, I guide college students in learning new skills, starting freelancing, finding internships, and even launching startups.
`;

  return (
    <section className="bg-black py-8 md:py-16 px-4 md:px-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start" data-aos="fade-up">
          <div className="relative w-full h-72 sm:h-100 lg:h-[450px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 opacity-90 rounded-2xl" />
            <img
              src="/imgs/abouthome.jpg"
              alt="Rohit Prashar"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 " data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight">
            Now I help students, creators, and brands grow through content.
          </h2>

          <p className="mt-4 text-gray-400 whitespace-pre-line">
            {expanded ? fullContent : shortContent}
          </p>

          <div className="mt-4">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center px-4 py-2 border border-[#1ec258] text-[#1ec258] rounded-lg hover:bg-[#1ec258] hover:text-black transition"
            >
              {expanded ? "View less" : "View more"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;
