import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">Contact Us</h1>
      <form className="bg-[#232323] rounded-2xl p-8 flex flex-col gap-5 shadow-lg">
        <input type="text" placeholder="Your Name" className="bg-[#191919] border border-[#332d2e] rounded px-4 py-3 text-white placeholder-[#787d8d] focus:outline-none focus:border-[#1ec258]" />
        <input type="email" placeholder="Your Email" className="bg-[#191919] border border-[#332d2e] rounded px-4 py-3 text-white placeholder-[#787d8d] focus:outline-none focus:border-[#1ec258]" />
        <textarea placeholder="Your Message" rows={5} className="bg-[#191919] border border-[#332d2e] rounded px-4 py-3 text-white placeholder-[#787d8d] focus:outline-none focus:border-[#1ec258]" />
        <button type="submit" className="mt-4 bg-[#1ec258] hover:bg-[#0a350e] text-white font-bold py-3 px-6 rounded-full self-start">Send Message</button>
      </form>
      <div className="mt-10 text-[#787d8d] text-sm">We typically reply within 24 hours. Thank you!</div>
    </section>
  );
};

export default Contact;
