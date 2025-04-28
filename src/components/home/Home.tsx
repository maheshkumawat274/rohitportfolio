import React from "react";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0b0b0c] pb-14 pt-8 md:pt-14 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex-1">
          <div className="text-[#1ec258] text-2xl mb-2">Hello Hello, I'm</div>
          <h1 className="text-5xl md:text-8xl lg-text-5xl font-bold text-white leading-tight mb-4">Rohit Prashar</h1>
          <p className="text-2xl md:text-4xl text-[#d5d0cd] mb-2">Build Your Digital Presence with Rohit Prashar</p>
          <p className="text-md md:text-xl text-[#787d8d] mb-8">With 4 Years of Experience in Content Creation</p>
          <div className="flex space-x-4">
            <button className="bg-[#1ec258] hover:bg-[#0a350e] text-white font-bold py-3 px-8 rounded-full text-xl">Watch My Podcasts</button>
            <button className="bg-transparent border border-[#1ec258] hover:bg-[#1ec258] hover:text-white text-[#1ec258] font-bold py-3 px-8 rounded-full text-xl">Reach me</button>
          </div>
        </div>
        <div className="flex-1 max-w-xs mt-12 md:mt-0 md:ml-8">
          <img src="./imgs/for website  (Facebook Post (Square))[1].png" alt="Rohit Hero" className="rounded-xl shadow-lg w-full" />
        </div>
      </section>

      {/* Start Listening & Latest Episodes */}
      <section className="bg-[#191919] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 pb-10">
            <span className="text-[#1ec258] font-semibold text-xl">Start Listening Today</span>
            <h2 className="text-5xl text-white font-bold mt-1">Latest Episodes</h2>
          </div>
          {/* Podcast cards - link to YouTube */}
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="https://www.youtube.com/embed/WBI5atoH4Oo?si=w__B27lxD0U9v7Ur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#232323] rounded-2xl shadow p-6 hover:shadow-lg transition group flex flex-col"
              >
                <div className="h-40 bg-[#333] rounded mb-4">
                  <img
                    src={`https://www.youtube.com/embed/WBI5atoH4Oo?si=w__B27lxD0U9v7Ur`}
                    alt="Podcast Thumbnail"
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                <p className="text-lg font-bold text-white mb-2 group-hover:text-[#1ec258] transition">Episode Title (Sample)</p>
                <p className="text-xs text-[#d5d0cd] mb-3">Watch the latest episode on YouTube.</p>
                <span className="inline-block mt-auto text-[#1ec258] underline">Watch Now</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section (blurred, Coming Soon) */}
      <section className="relative bg-[#232323] py-16">
        <div
          className="max-w-4xl mx-auto flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#2e2a2a] border border-[#332d2e] shadow-lg backdrop-blur-lg"
          style={{ filter: "blur(2.5px)", pointerEvents: "none" }}
        >
          <div className="p-12 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Courses</h2>
            <p className="text-lg text-[#c4c4c4]">
              All new content, tools and resources for creators.
              <br />
              Launching Soon!
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#0b0b0c] bg-opacity-70 px-8 py-4 rounded-2xl">
            <span className="text-3xl md:text-5xl font-bold text-[#1ec258] opacity-95">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#191919] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-[#1ec258] text-lg font-semibold mb-2">We Love Your Reviews</h3>
          <h2 className="text-center text-2xl text-white font-bold mb-10">What People Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                name: "Jeremy Page",
                date: "August 16, 2022",
                text: "Absolutely fantastic podcast! This is such a great show! I love the hosts, the guests, and the insightful shows.",
              },
              {
                name: "Natalie Miles",
                date: "August 16, 2022",
                text: "Such an inspiring podcast! Podcast listener every day, absolutely cannot miss this show, totally commits.",
              },
              {
                name: "Andrew Brooks",
                date: "August 16, 2022",
                text: "Best podcast I’ve ever had the pleasure of hearing. Love the insight and high-quality discussion. Here’s to many more seasons!",
              },
              {
                name: "Andy Miller",
                date: "August 16, 2022",
                text: "A much needed treat! The best podcast for all true crime, new stories and more. Love the stories, jokes, and hosts!",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-[#232323] p-6 rounded-2xl shadow text-sm flex flex-col h-full border border-[#332d2e]"
              >
                <div className="flex gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-[#1ec258] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#d5d0cd] mb-4">{r.text}</p>
                <div className="mt-auto text-[#787d8d]">
                  {r.name} • {r.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Feature Section */}
      <section className="bg-[#0b0b0c] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl font-bold mb-4">A True Crime Podcast You Will Enjoy.</h2>
          <p className="mb-8 text-[#d5d0cd]">
            Join the clan today to get info about upcoming episodes, member-only content, updates and much more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {["Membership Episodes", "Printed Show Notes", "Join a Webinar", "Special Access to Guests"].map((t) => (
              <span
                key={t}
                className="bg-[#191919] border border-[#332d2e] text-[#1ec258] px-5 py-2 rounded-full font-semibold text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <button className="bg-[#1ec258] text-white font-bold py-3 px-8 rounded-full mt-4 hover:bg-[#0a350e]">Sign Up</button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="relative pt-16 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url(https://ext.same-assets.com/3276442691/3975794803.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-2xl mx-auto text-center px-4">
          <h3 className="text-[#1ec258] font-semibold text-lg mb-1 mt-2">Join the Newsletter</h3>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Subscribe to The Show</h2>
          <p className="text-[#d5d0cd] text-base md:text-lg mb-8">
            Get new episodes directly in your inbox – we send updates every week-day, and bonus content over the weekend.
          </p>
          <form className="flex flex-col md:flex-row items-center max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-[#191919] border border-[#332d2e] rounded px-5 py-3 text-white placeholder-[#787d8d] focus:outline-none focus:border-[#1ec258]"
            />
            <button
              type="submit"
              className="bg-[#1ec258] hover:bg-[#0a350e] text-white font-bold py-3 px-8 rounded-full"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Other homepage content (reviews, newsletter, etc.) can be filled in later as needed. */}
    </>
  );
};

export default Home;
