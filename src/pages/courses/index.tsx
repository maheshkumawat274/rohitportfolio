import { Helmet } from "react-helmet"
import ComingSoonCourses from "../../components/courses/Courses"


const Coursespage = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Courses | Rohit Prashar - Learn Podcasting, Editing & Branding</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join Rohit Prashar's upcoming courses on podcast production, video editing, social media branding, and freelancing to grow your skills and career."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Courses by Rohit Prashar, podcasting course, video editing course, social media branding, freelancing training, content creation course"
        />

        {/* Author */}
        <meta name="author" content="Rohit Prashar" />

        {/* Open Graph */}
        <meta property="og:title" content="Courses | Rohit Prashar - Learn Podcasting, Editing & Branding" />
        <meta
          property="og:description"
          content="Explore Rohit Prashar's upcoming courses to master podcasting, editing, branding, and freelancing skills."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitprashar.com/courses" />
        <meta property="og:image" content="https://rohitprashar.com/imgs/home.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://rohitprashar.com/courses" />
      </Helmet>
     <div >
      <ComingSoonCourses/>
     </div>
    </>
  )
}

export default Coursespage