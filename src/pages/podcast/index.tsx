
import { Helmet } from 'react-helmet'
import AboutPodcast from '../../components/podcast/AboutPodcast'
import PodcastVideos from '../../components/podcast/Podcast'
import PodcastHero from '../../components/podcast/PodcastHero'
const PodcastPage = () => {
  return (
    <>
    <Helmet>
        <title>Podcasts by Rohit Prashar | Insights, Stories & Growth</title>
        <meta name="description" content="Discover podcasts hosted by Rohit Prashar featuring in-depth discussions on digital growth, personal branding, marketing strategies, and more." />
        <meta name="keywords" content="Podcast by Rohit Prashar, Digital Marketing Podcast, India Podcast Host, Content Creator, Business Growth, Personal Branding" />
        <meta name="author" content="Rohit Prashar" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Podcasts by Rohit Prashar | Insights, Stories & Growth" />
        <meta property="og:description" content="Listen to Rohit Prashar’s podcasts covering marketing tips, brand stories, and expert discussions to boost your digital game." />
        <meta property="og:url" content="https://rohitpra.netlify.app/podcast" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rohitpra.netlify.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podcasts by Rohit Prashar | Insights, Stories & Growth" />
        <meta name="twitter:description" content="Listen to Rohit Prashar’s podcasts covering marketing tips, brand stories, and expert discussions to boost your digital game." />
        <meta name="twitter:image" content="https://rohitpra.netlify.app/og-image.jpg" />
        <link rel="canonical" href="https://rohitpra.netlify.app/podcast" />
      </Helmet>
    <PodcastHero/>
     <AboutPodcast/>
     <PodcastVideos/>
    </>
  )
}

export default PodcastPage