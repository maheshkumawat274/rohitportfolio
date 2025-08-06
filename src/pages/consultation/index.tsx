
import { Helmet } from "react-helmet"
import CounsultCards from "../../components/counsultaion/CounsultCards"
import CounsultHero from "../../components/counsultaion/CounsultHero"


const ConsultationPage = () => {
  return (
    <>
     <Helmet>
        {/* Title */}
        <title>Consultation | Rohit Prashar - Content & Growth Strategy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Book a one-on-one consultation with Rohit Prashar to get expert advice on content creation, personal branding, freelancing, and business growth."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Consultation, Rohit Prashar, content strategy, personal branding, freelancing tips, business growth consultation"
        />

        {/* Author */}
        <meta name="author" content="Rohit Prashar" />

        {/* Open Graph */}
        <meta property="og:title" content="Consultation | Rohit Prashar - Content & Growth Strategy" />
        <meta
          property="og:description"
          content="Get expert guidance from Rohit Prashar on content creation, personal branding, freelancing, and growing your online presence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitprashar.com/consultation_call" />
        <meta property="og:image" content="https://rohitprashar.com/imgs/home.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://rohitprashar.com/consultation_call" />
      </Helmet>

     <div className="mt-14">
      <CounsultHero/>
     <CounsultCards/>
     </div>
    </>
  )
}

export default ConsultationPage