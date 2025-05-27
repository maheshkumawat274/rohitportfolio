
import { Helmet } from 'react-helmet'
import AboutHero from '../../components/about/AboutHero'
import Section4 from '../../components/home/Section4'

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
      <AboutHero/>
    </div>

    <Section4/>
    </>
  )
}

export default AboutPage