import { Helmet } from "react-helmet"
import BookTopSection from "../../components/book/BookTopSection"


const BookPage = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Book | Rohit Prashar – Learn Podcasting, Editing & Personal Branding</title>
      
        {/* Meta Description */}
        <meta
          name="description"
          content="Discover Rohit Prashar’s new book packed with insights on podcasting, video editing, personal branding, and digital growth. A must-read for creators and entrepreneurs."
        />
      
        {/* Keywords */}
        <meta
          name="keywords"
          content="Rohit Prashar book, podcasting book, personal branding book, creator book, video editing book, digital growth guide"
        />
      
        {/* Author */}
        <meta name="author" content="Rohit Prashar" />
      
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Book | Rohit Prashar – Learn Podcasting, Editing & Personal Branding"
        />
        <meta
          property="og:description"
          content="Explore Rohit Prashar’s latest book for creators, editors, and entrepreneurs who want to grow with podcasting, editing, and branding strategies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitprashar.com/book" />
        <meta property="og:image" content="https://rohitprashar.com/imgs/home.jpg" />
      
        {/* Canonical */}
        <link rel="canonical" href="https://rohitprashar.com/book" />
      </Helmet>
      
     <div >
      <BookTopSection/>
     </div>
    </>
  )
}

export default BookPage