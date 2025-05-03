
import React from 'react';

const Contact: React.FC = () => {
  return (
    
    <section className='min-h-screen bg-black py-14'>
      <h1 className="text-[70px] sm:text-[120px] mx-[20px] sm:[100px] lg:mx-[270px] font-bold leading-none">CONTACT</h1>
      <div className="  text-white flex flex-col px-6 py-12 justify-center items-center">
        
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 mt-10 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <button className="flex items-center gap-2 bg-[#1c1c1c] px-4 py-2 rounded-full text-sm border border-white">
            <span className="h-2 w-2 bg-green-400 rounded-full"></span>
            BOOK A CALL
          </button>
          <h2 className="text-4xl md:text-5xl font-semibold">
            I'd love to hear<br />from you!
          </h2>
        </div>

        {/* Right Section - Form */}
        <form className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              type="text"
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
            <input
              id="email"
              type="email"
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="budget">Your Budget</label>
            <input
              id="budget"
              type="text"
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={5}
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-400 text-black font-bold px-6 py-2 rounded-full w-24 hover:bg-lime-500"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
