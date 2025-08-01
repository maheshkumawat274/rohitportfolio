
import { Helmet } from 'react-helmet'
import Join from '../../components/home/Join'
import HomeHero from '../../components/home/HomeHero'
import AboutHome from '../../components/home/AboutHome'
import FeaturedPodcastHome from '../../components/home/FeaturedPodcastHome'
import CoursesHome from '../../components/home/CoursesHome'
import ContactHome from '../../components/home/ContactHome'
import ImageCursorHome from '../../components/home/ImageCursorHome'
import { TextScrollDemo } from '../../components/home/TextScrollHome'

const Homepage = () => {
  return (
    <> 
     <Helmet>
        <title>Rohit Prashar | Digital Creator & Consultant</title>
        <meta name="description" content="Welcome to Rohit Prashar's official portfolio. Explore services in podcast production, video editing, social media branding, and more." />
        <meta name="keywords" content="Rohit Prashar, podcast production, video editing, social media branding, digital creator" />
        <link rel="canonical" href="https://rohitpra.netlify.app/" />
      </Helmet>

    <div className='mt-14 pt-3 sm:pt-4 '>
    <HomeHero/>
    <TextScrollDemo/>
    <AboutHome/>
    <FeaturedPodcastHome/>
    <CoursesHome/>
     <div className='hidden md:block'>
      <ImageCursorHome/>
     </div>
    <Join/>
    <ContactHome/>
    </div>
    </>
  )
}

export default Homepage