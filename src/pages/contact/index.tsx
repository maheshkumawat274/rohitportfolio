
import { Helmet } from 'react-helmet'
import Contact from '../../components/contact/Contact'
import ContactHero from '../../components/contact/ContactHero'
import Contacticons from '../../components/contact/Contacticons'

const Contactpage = () => {
  return (
    <>
    <Helmet>
        <title>Contact | Rohit Prashar</title>
        <meta name="description" content="Get in touch with Rohit Prashar for collaborations, consultations, or inquiries related to digital media services." />
        <meta name="keywords" content="contact, Rohit Prashar, collaboration, consultation, digital media services" />
        <link rel="canonical" href="https://rohitpra.netlify.app/contact" />
    </Helmet>
    
    <div className='mt-14'>
      <ContactHero/>
      <Contact/>
      <Contacticons/>
    </div>
    </>
  )
}

export default Contactpage