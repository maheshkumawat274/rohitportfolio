
import { Helmet } from 'react-helmet'
import Contact from '../../components/contact/Contact'
import Join from '../../components/home/Join'
import Section1 from '../../components/home/Section1'
import Section2 from '../../components/home/Section2'
import Section4 from '../../components/home/Section4'
import Section5 from '../../components/home/Section5'
import Section6 from '../../components/home/Section6'
import Section7 from '../../components/home/Section7'
import Section8 from '../../components/home/Section8'
import { CollabSection } from '../../components/home/CollabSection'

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
    <Section1/>
    <Section7/>
    <Section8/>
    <Section4/>
    <Section6/>
    <Section2/>
    <CollabSection/>
    <Section5/>
    <Join/>
    <Contact/>
    </div>
    </>
  )
}

export default Homepage