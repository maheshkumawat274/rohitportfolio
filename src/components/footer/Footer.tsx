import React from "react";

const Footer: React.FC = () => {
  return (
    <>
     <section className="w-full bg-[#1ec258] py-4 px-2 pt-10 pb-10 flex items-center justify-center">
        <div className="flex items-center text-black font-bold text-lg sm:text-4xl">
          Need Help ? Chat with Rohit Prashar!
          <a
            href="https://wa.me/+919973640023"
            className="ml-4 px-6 py-2 bg-black text-[#1ec258] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>
       <footer className="w-full bg-[#1ec258] text-black py-14 px-2 sm:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#12130f] gap-4">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h1 className="text-5xl sm:text-6xl font-bold">RohitPrashar</h1>
          <div className="flex gap-4 mb-2 py-4">
            <a href="https://www.facebook.com/TheRajeevMehta" aria-label="Facebook">
              <img
                src="https://ext.same-assets.com/1304423565/260646423.svg"
                className="h-8"
                alt="Facebook"
              />
            </a>
            <a href="https://www.youtube.com/c/RajeevMehtaIN/videos" aria-label="YouTube">
              <img
                src="https://ext.same-assets.com/1304423565/2563901416.svg"
                className="h-8"
                alt="YouTube"
              />
            </a>
            <a href="https://x.com/RajeevMehtain" aria-label="X">
              <img
                src="https://ext.same-assets.com/1304423565/2320907649.svg"
                className="h-8"
                alt="X"
              />
            </a>
            <a href="https://www.instagram.com/rajeevmehtain" aria-label="Instagram">
              <img
                src="https://ext.same-assets.com/1304423565/409235749.svg"
                className="h-8"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-mehta-86ba0967/"
              aria-label="LinkedIn"
            >
              <img
                src="https://ext.same-assets.com/1304423565/1367661487.svg"
                className="h-8"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="text-lg sm:text-xl text-black">
            With 5+ years of experience and 100,000+ students, the instructor has
            helped many people achieve success in the Art & media industry.
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h4 className="font-bold mb-1 text-2xl sm:text-4xl">Usefull Links</h4>
          <ul className="text-lg">
            <li>
            <a className="hover:underline">
                about
              </a>
            </li>
            <li>
              
              <a href="https://learn.rajeevmehta.in/" className="hover:underline">
                New Courses
              </a>
            </li>
            <li>
              <a href="https://rajeevmehta.in/blog/" className="hover:underline">
                Podcast
              </a>
            </li>
            <li>
              <a href="https://learn.rajeevmehta.in/#lw" className="hover:underline">
                about
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h1 className="font-bold mb-1 text-2xl sm:text-4xl">Contact</h1>
          <div className="text-lg">
          <div>Greate Noida , New Delhi 110020</div>
          <div>++91 99736 40023</div>
          <div>info@rohitprashar.in</div>
          </div>
        </div>
      </footer>
      <hr className="text-black"/>
      <div className="font-bold text-xl py-14 text-center bg-[#1ec258] text-black px-2">
        <span>
          Designed with{" "}
          <a href="https://maheshweb.online/" className="underline">
            Creative mahesh
          </a>{" "}
          &copy; Copyright 2025 All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
