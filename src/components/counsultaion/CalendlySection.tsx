import React from "react";

const CalendlySection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-6xl font-bold mb-4">Work / Project Discussion</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Looking to hire Rohit Prashar for your project or collaborate on
        something amazing? Schedule a call and discuss your requirements.
      </p>
      <a
        href="https://calendly.com/rohitprasharwork/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 py-3 rounded-lg shadow-md border border-transparent hover:bg-black hover:text-white hover:border-white transition duration-300"
      >
        Schedule Call
      </a>
    </section>
  );
};

export default CalendlySection;
