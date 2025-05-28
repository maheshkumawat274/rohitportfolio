

import { Play } from 'lucide-react'

export function Heronew() {
  

  return (
    <section id="bi-slider" className="relative min-h-screen px-4 md:px-20 bg-haptic-dark overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-haptic-red rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-haptic-red/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-haptic-red rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
          Behind Every Great Collaboration... There’s a Name
          <span className="text-blue-400"> “Rohit Prashar”</span>!
        </h2>
            </div>

            <div className="space-y-4">
               <p className="text-lg md:text-xl text-gray-300">
          Are you a business owner looking to elevate your brand through impactful storytelling? Rohit Prashar offers a premium podcast platform that not only amplifies your marketing efforts but also connects with a wider audience through real, inspiring journeys. His platform is a source of motivation for entrepreneurs navigating challenges and striving for success. Join the Founders Podcast and let your story spark the next wave of innovation.
        </p>
            </div>

          </div>

          {/* Right Content - Circular Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 sm:w-96 h-80 sm:h-96 ">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-haptic-red/20 rounded-full animate-pulse"></div>

              {/* Main Circular Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-haptic-red">
                
                <img src='./imgs/rohitabout.png' alt="Team Member"
                  
                  className="object-cover relative bottom-14"></img>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-haptic-red rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-haptic-red/50 rounded-full"></div>
            </div>

            {/* Play Button */}
            <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-haptic-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 group">
              <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
