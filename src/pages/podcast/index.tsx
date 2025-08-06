
import { Helmet } from 'react-helmet'
import PodcastVideos from '../../components/podcast/Podcast'
import PodcastHero from '../../components/podcast/PodcastHero'
import WhyPodcast from '../../components/podcast/WhyPodcast'
const PodcastPage = () => {
  return (
    <>
    <Helmet>
        {/* Title */}
        <title>Podcast | Rohit Prashar - Digital Media & Creative Talks</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Tune in to Rohit Prashar's podcasts — engaging discussions on digital media, freelancing, personal branding, and creative growth strategies."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Podcast, Rohit Prashar, digital media podcast, freelancing tips, personal branding, creative growth, startup strategies"
        />

        {/* Author */}
        <meta name="author" content="Rohit Prashar" />

        {/* Open Graph */}
        <meta property="og:title" content="Podcast | Rohit Prashar - Digital Media & Creative Talks" />
        <meta
          property="og:description"
          content="Listen to Rohit Prashar share insights on digital media, freelancing, personal branding, and creative success in his podcast series."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitprashar.com/podcast" />
        <meta property="og:image" content="https://rohitprashar.com/imgs/about1.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://rohitprashar.com/podcast" />
      </Helmet>
    <div className='mt-14'>
      <PodcastHero/>
     <PodcastVideos/>
     <WhyPodcast/>
    </div>
    </>
  )
}

export default PodcastPage