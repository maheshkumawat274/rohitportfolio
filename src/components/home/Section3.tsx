import React from "react";

const podcasts = [
  {
    title: "How to create a beautiful podcast website?",
    youtubeId: "JNQh2WXjvTA",
  },
  {
    title: "Podcast Growth Tips for Beginners",
    youtubeId: "Ck07JVe9OhY",
  },
  {
    title: "How To Succeed as a Content Creator",
    youtubeId: "G7RGJAyi3vs",
  }
];

const Podcast: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8 ">All Podcast Episodes</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {podcasts.map((p, idx) => (
          <div key={idx} className="bg-[#232323] rounded-2xl p-5 shadow-md flex flex-col">
            <iframe
              className="rounded-lg w-full aspect-video mb-4"
              src={`https://www.youtube.com/embed/${p.youtubeId}`}
              title={p.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-2">{p.title}</h2>
              <a href={`https://www.youtube.com/watch?v=${p.youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-[#1ec258] underline">Watch on YouTube</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Podcast;
