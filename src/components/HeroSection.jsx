import { useEffect, useRef } from "react";
import BannerVideo from "../assets/images/videos/banner-video.mp4"

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => console.error("Video autoplay failed:", err));
      }
    }, []);
  return (
    <div>
          <section className="w-full flex lg:items-start items-start relative min-h-screen">
      <div className="relative flex flex-col md:flex-row w-full max-w-[1521px] mx-auto pt-12">
        {/* Left Side - Background Video */}
        <div className="relative ">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover w-full max-w-[1080px] lg:h-[75vh] md:h-[40vh] sm:h-[400vh] video-fade-in"
          >
            <source src={BannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full absolute right-0 top-[340px] md:top-[450px] lg:top-[100px] md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left p-6 z-10 text-slide-up-delay">
          <h1 className="font-sora text-white font-semibold text-[40px] lg:text-[56px] mb-4 leading-[114%] tracking-[-0.04em] text-slide-up">
            Real Yields for <span className="text-[#E36B4C] block">Anyone Anywhere</span>
          </h1>
          <p className="font-dm-sans font-normal text-[20px] leading-[150%] mb-8 text-slide-up-delay text-white">
            Savings without the spread, powered by RWA
          </p>

          <button className="mt-4 border border-gray-500 py-2 px-6 rounded-[40px] transition-all hover:bg-gray-700 text-white">
            Launch Application
          </button>

          <div className="mt-[68px] flex gap-8 items-start text-slide-up-delay">
            <div className="border-r border-gray-300 pr-7">
              <h4 className="text-[32px] lg:text-[36px] mb-2 font-bold text-white">$50M</h4>
              <p className="text-white">Total Value Locked</p>
            </div>

            <div>
              <h4 className="text-[32px] lg:text-[36px] mb-2 font-bold text-white">4.3%</h4>
              <p className="text-white">Savings rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default HeroSection
