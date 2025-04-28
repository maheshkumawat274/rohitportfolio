const podcasts = [
  {
    title: "Podcasting 101: Start Your Own Podcast",
    link: "https://www.youtube.com/embed/WBI5atoH4Oo?si=w__B27lxD0U9v7Ur", // Replace with actual YouTube link
    desc:
      "Learn how to start and grow a podcast from scratch, with tips on recording, editing, and distribution.",
    youtubeThumbnail: "https://www.youtube.com/embed/WBI5atoH4Oo?si=w__B27lxD0U9v7Ur",
  },
  {
    title: "Mastering Podcast Interviews",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_2", // Replace with actual YouTube link
    desc:
      "A comprehensive guide to conducting effective podcast interviews with guests.",
    youtubeThumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
  },
  {
    title: "Podcast Editing: Make Your Audio Shine",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_3", // Replace with actual YouTube link
    desc:
      "Learn advanced podcast editing techniques to ensure your content sounds professional and engaging.",
    youtubeThumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
  },
  {
    title: "Podcast Marketing: Grow Your Audience",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_4", // Replace with actual YouTube link
    desc:
      "Discover strategies to effectively market your podcast and grow your listener base.",
    youtubeThumbnail: "https://img.youtube.com/vi/VIDEO_ID_4/hqdefault.jpg",
  },
  {
    title: "Podcast Monetization Strategies",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_5", // Replace with actual YouTube link
    desc:
      "Learn how to turn your podcast into a profitable venture with various monetization options.",
    youtubeThumbnail: "https://img.youtube.com/vi/VIDEO_ID_5/hqdefault.jpg",
  },
];

const PodcastCardStack: React.FC = () => {
  return (
    <section className="bg-[#12130f] relative px-0 py-0 min-h-[150vh]" style={{ zIndex: 10 }}>
      <div className="max-w-5xl mx-auto pt-14 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-0 pt-6 text-white text-center sticky top-0 bg-[#12130f] z-30">
          GET SERIOUS WITH PODCASTING
        </h2>
      </div>
      <div className="relative h-[250vh]">
        {podcasts.map((podcast, i) => (
          <div
            key={podcast.title}
            className="sticky top-[90px] max-w-3xl mx-auto w-full"
            style={{
              marginTop: i === 0 ? "4rem" : "2rem",
              zIndex: 20 + i,
            }}
          >
            <div className="bg-[#23261C] rounded-xl p-6 flex items-center border border-[#32341e] shadow-xl mb-8">
              <img
                src={podcast.youtubeThumbnail}
                alt="podcast thumbnail"
                className="w-full sm:w-32 sm:h-32 h-auto object-cover rounded-xl mr-6 drop-shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-[#e0f234] mb-1">
                  {podcast.title}
                </h3>
                <p className="text-sm text-gray-200 mb-2">{podcast.desc}</p>
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e0f234] font-semibold flex items-center gap-1 hover:underline"
                >
                  See More<span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastCardStack;
