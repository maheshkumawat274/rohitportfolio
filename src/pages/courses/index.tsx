import { Helmet } from "react-helmet"
import ComingSoonCourses from "../../components/courses/Courses"


const Coursespage = () => {
  return (
    <>
      <Helmet>
        <title>Courses | Rohit Prashar</title>
        <meta name="description" content="Enroll in courses offered by Rohit Prashar on topics like podcasting, video editing, social media strategies, and freelancing." />
        <meta name="keywords" content="courses, podcasting, video editing, social media strategies, freelancing" />
        <link rel="canonical" href="https://rohitpra.netlify.app/courses" />
      </Helmet>
     <div >
      <ComingSoonCourses/>
     </div>
    </>
  )
}

export default Coursespage