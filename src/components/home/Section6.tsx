import React from 'react';

const stats = [
  {
    value: '05+',
    title: 'Years of Experience',
    description: 'Decades of experience in delivering exceptional projects.',
  },
  {
    value: '20+',
    title: 'Podcast Episodes',
    description: 'Engaging episodes produced for a growing audience.',
  },
  {
    value: '50K+',
    title: 'Listeners & Viewers',
    description: 'Combined podcast listeners and video viewers reached.',
  },
  {
    value: '98%',
    title: 'Client Satisfaction',
    description: 'I build long-term partnerships through proven results.',
  },
];

const Section6: React.FC = () => (
  <section className="bg-gradient-to-br from-green-700 to-green-100 py-16 px-6">
    <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
      {stats.map(({ value, title, description }) => (
        <div key={title} className="flex flex-col">
          <span className="text-5xl md:text-6xl font-bold leading-tight">
            {value}
          </span>
          <hr className="w-16 border-t-2 border-black my-2" />
          <h3 className="text-xl font-semibold mb-1">
            {title}
          </h3>
          <p className="text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Section6;
