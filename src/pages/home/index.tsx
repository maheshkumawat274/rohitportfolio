
import { Helmet } from 'react-helmet'
import Join from '../../components/home/Join'
import HomeHero from '../../components/home/HomeHero'
import AboutHome from '../../components/home/AboutHome'
import FeaturedPodcastHome from '../../components/home/FeaturedPodcastHome'
import CoursesHome from '../../components/home/CoursesHome'
import ContactHome from '../../components/home/ContactHome'
import ImageCursorHome from '../../components/home/ImageCursorHome'
import TextScrollDemo from '../../components/home/TextScrollHome'

const Homepage = () => {
  return (
    <> 
           <Helmet>
        {/* Title */}
        <title>Rohit Prashar | Digital Creator, Mentor & Consultant</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Welcome to Rohit Prashar's official portfolio — offering podcast production, video editing, social media branding, freelancing guidance, and business growth consultations."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Rohit Prashar, digital creator, content creator, podcast production, video editing, social media branding, freelancing mentor, business growth consultant"
        />

        {/* Author */}
        <meta name="author" content="Rohit Prashar" />

        {/* Open Graph */}
        <meta property="og:title" content="Rohit Prashar | Digital Creator, Mentor & Consultant" />
        <meta
          property="og:description"
          content="Explore the creative world of Rohit Prashar — helping students, creators, and brands grow through impactful content, freelancing strategies, and startup guidance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitprashar.com/" />
        <meta property="og:image" content="https://rohitprashar.com/imgs/home.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://rohitprashar.com/" />
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