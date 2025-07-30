
import { Helmet } from 'react-helmet'
import PodcastVideos from '../../components/podcast/Podcast'
import PodcastHero from '../../components/podcast/PodcastHero'
import WhyPodcast from '../../components/podcast/WhyPodcast'
const PodcastPage = () => {
  return (
    <>
    <Helmet>
        <title>Podcast | Rohit Prashar</title>
        <meta name="description" content="Listen to Rohit Prashar's podcasts covering topics on digital media, freelancing, and creative strategies." />
        <meta name="keywords" content="podcast, Rohit Prashar, digital media, freelancing, creative strategies" />
        <link rel="canonical" href="https://rohitpra.netlify.app/podcast" />
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