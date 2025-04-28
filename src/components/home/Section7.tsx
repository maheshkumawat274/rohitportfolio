import React from 'react';

// Four-step podcast production workflow
const steps = [
  {
    title: 'Ideation',
    description:
      'Brainstorm and develop engaging podcast topics and themes that resonate with your audience.',
  },
  {
    title: 'Recording',
    description:
      'Set up your equipment, capture high-quality audio, and ensure clear, professional sound.',
  },
  {
    title: 'Editing',
    description:
      'Clean up audio, add intros/outros, music beds, and refine pacing for maximum impact.',
  },
  {
    title: 'Distribution',
    description:
      'Publish your episodes to major platforms, optimize metadata, and promote across channels.',
  },
];

const Section7: React.FC = () => (
  <section className="bg-gray-50 py-16  px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row ">
      {/* Left Column */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <span className="inline-flex  text-black text-sm uppercase tracking-wide bg-white border border-gray-300 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
          My Podcast Process
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          My Podcast
          <br />
          Production Workflow
        </h2>
        <button className="mt-8 bg-green-400 text-black font-medium py-2 px-6 rounded-full hover:bg-green-300 transition">
          ↳ Schedule a Consultation
        </button>
      </div>

      {/* Right Column: Steps */}
      <div className="w-full md:w-1/2 px-8 sm:px-14">
        {steps.map((step, idx) => (
          <div key={step.title} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
              {idx + 1}. {step.title}
            </h3>
            <p className="mt-2 text-gray-700">
              {step.description}
            </p>
            {idx < steps.length - 1 && (
              <hr className="mt-4 border-t border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section7;
