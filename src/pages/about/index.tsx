
import { Helmet } from 'react-helmet'
import AboutUsHero from '../../components/about/AboutHero'
import AboutHome from '../../components/home/AboutHome'
import AboutSection1 from '../../components/about/AboutSection1'
import AboutSection2 from '../../components/about/AboutSection2'

const AboutPage = () => {
  return (
    <>
     <Helmet>
        <title>About | Rohit Prashar</title>
        <meta name="description" content="Learn more about Rohit Prashar, a digital creator specializing in podcast production, video editing, and social media branding." />
        <meta name="keywords" content="About Rohit Prashar, digital creator, podcast production, video editing, social media branding" />
        <link rel="canonical" href="https://rohitpra.netlify.app/about" />
      </Helmet>
    <div className='mt-14'>
      <AboutUsHero/>
      <AboutHome/>
      <AboutSection1/>
      <AboutSection2/>
    </div>

    </>
  )
}

export default AboutPage