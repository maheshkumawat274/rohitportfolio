
import Contact from '../../components/contact/Contact'
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
    <div className='mt-14 pt-3 sm:pt-4 '>
    <Section1/>
    
    <Section7/>
    <Section8/>
    <Section4/>
    <Section2/>
    <Section5/>
    <Section6/>
    <Contact/>
    </div>
    </>
  )
}

export default Homepage