
import { Helmet } from 'react-helmet'
import AboutUsHero from '../../components/about/AboutHero'
import AboutSection1 from '../../components/about/AboutSection1'
import AboutSection2 from '../../components/about/AboutSection2'
import AboutSection3 from '../../components/about/AboutSectione3'

const AboutPage = () => {
  return (
    <>
     <Helmet>
        {/* Title for SEO */}
        <title>About Rohit Prashar | Digital Creator & Content Strategist</title>

        {/* Meta Description (150–160 chars) */}
        <meta
          name="description"
          content="Discover the journey of Rohit Prashar, a digital creator helping students, creators, and brands grow through impactful content, freelancing, and startup guidance."
        />

        {/* Targeted Keywords */}
        <meta
          name="keywords"
          content="Rohit Prashar, content creator, digital creator, podcast production, video editing, social media branding, freelancing mentor, student growth"
        />

        {/* Author */}
        <meta name="author" content="Rohit Prashar" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="About Rohit Prashar | Digital Creator & Growth Mentor" />
        <meta
          property="og:description"
          content="Learn more about Rohit Prashar — guiding students and creators in building skills, freelancing, internships, and launching startups."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="rohitprashar.com/aboutus" />
        <meta property="og:image" content="rohitprashar.com/imgs/home.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="rohitprashar.com/aboutus" />
      </Helmet>
    <div className='mt-14'>
      <AboutUsHero/>
      <AboutSection1/>
      <AboutSection2/>
      <AboutSection3/>
    </div>

    </>
  )
}

export default AboutPage