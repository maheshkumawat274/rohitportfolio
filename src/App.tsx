
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import PodcastPage from "./pages/podcast";
import Coursespage from "./pages/courses";
import FooterPage from "./pages/footer";
import Headerpage from "./pages/header";
import ScrollTop from "./components/ScrollTop";
import ConsultationPage from "./pages/consultation";

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-[#d5d0cd]">
        <Headerpage />
        <main className="flex-grow ">
          
          <ScrollTop/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutPage  />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/courses" element={<Coursespage />} />
            <Route path="/consultation_call" element={<ConsultationPage />} />
          </Routes>
        </main>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
