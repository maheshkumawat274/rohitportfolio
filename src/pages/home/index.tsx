
import { Helmet } from 'react-helmet'
import Contact from '../../components/contact/Contact'
import CollabSection from '../../components/home/CollabSection'
import Join from '../../components/home/Join'
import Section1 from '../../components/home/Section1'
import Section2 from '../../components/home/Section2'
import Section4 from '../../components/home/Section4'
import Section5 from '../../components/home/Section5'
import Section6 from '../../components/home/Section6'
import Section7 from '../../components/home/Section7'
import Section8 from '../../components/home/Section8'

const Homepage = () => {
  return (
    <> 
    <Helmet>
  {/* Basic SEO */}
  <title>Rohit Prashar | Podcast Consultant, Creator & Digital Branding Expert</title>
  <meta 
    name="description" 
    content="Grow your digital presence with Rohit Prashar – expert in podcast editing, branding, content strategy, and digital consulting. Let’s take your voice to the world!" 
  />
  <meta 
    name="keywords" 
    content="Rohit Prashar, Podcast Consultant, Podcast Editor India, Digital Content Creator, Branding Expert, Podcast Growth, Podcast Services, Topmate Rohit" 
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://rohitpra.netlify.app/" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Rohit Prashar | Podcast Consultant & Branding Expert" />
  <meta 
    property="og:description" 
    content="Discover the power of digital storytelling with Rohit Prashar – from podcast editing to branding and consultation." 
  />
  <meta property="og:url" content="https://rohitpra.netlify.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://rohitpra.netlify.app/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rohit Prashar | Podcast Consultant & Creator" />
  <meta 
    name="twitter:description" 
    content="Podcast editing, branding, content strategy — all in one place. Let's grow your presence with Rohit Prashar." 
  />
  <meta name="twitter:image" content="https://rohitpra.netlify.app/og-image.jpg" />

  {/* Favicon & Theme */}
  <link rel="icon" href="/favicon.ico" />
  <meta name="theme-color" content="#1ec258" />
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