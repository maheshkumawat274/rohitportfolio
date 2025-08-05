import React from "react";

const AboutSection1: React.FC = () => {
  const content = `Back in 2019, during my Class 10 days, I had no idea where life was headed. I wasn’t good at studies, and there were moments I felt completely lost. I spent 2 years just overthinking — feeling left behind while everyone else seemed to be moving ahead. I used to see others with clear goals and confidence, and it made me question myself even more.

But somewhere deep inside, I had a spark — a small interest in creating something, anything. That’s when I picked up a camera and shot my first vlog. It wasn’t perfect, but it gave me a new feeling — that maybe, I could do something.

That first step — though small — changed everything.`;

  return (
    <section className="bg-black py-4 md:py-16 px-4 md:px-20">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Text (on large screens text stays left) */}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight text-gray-300">
            2019 – Class 10
          </h2>

          <p className="mt-6 text-gray-400 whitespace-pre-line  mx-auto lg:mx-0">
            {content}
          </p>

          <p className="mt-6 text-lg font-bold text-gray-300">
            That first step — though small — changed everything.
          </p>
        </div>

        {/* Right: Image (will occupy full width of its column on large screens) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full h-72 sm:h-100 lg:h-[520px] rounded-3xl overflow-hidden">
            {/* Green Background Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-200 rounded-3xl z-0" />

            {/* Image */}
            <img
              src="/imgs/2019.jpg"
              alt="2019 - Class 10"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
