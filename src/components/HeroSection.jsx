import { useEffect, useRef } from "react";
import BannerVideo from "../assets/images/videos/banner-video.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.error("Video autoplay failed:", err));
    }
  }, []);
  return (
    <div>
      <section className="w-full flex l1024:items-start items-start relative min-h-fit 1024:min-h-screen">
        <div className="relative flex zero:flex-col 1024:flex-row zero:items-center w-full max-w-[1521px] mx-auto pt-12">
          {/* Left Side Background Video +++++*/}
          <div className="relative w-full zero:flex zero:flex-col zero:gap-y-10 1024:gap-y-0 zero:items-center 1024:block">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="h-full object-contain w-full zero:max-w-full 1024:max-w-[625px] 1160:max-w-[725px] 1280:max-w-[825px] 1440:max-w-[900px] 1512:max-w-[925px] 1024:h-[75vh] zero:h-[40vh] video-fade-in"
            >
              <source src={BannerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Right Side text+++++++ */}
            <div className="max-w-[508px] zero:flex zero:flex-col zero:items-center 1024:block w-full 1024:absolute 1024:top-1/2 1024:transform 1024:-translate-y-1/2 1024:right-1 1160:right-1.5 1280:right-10 1512:right-[125px] z-10 text-slide-up-delay">
              <h1 className="font-sora text-white font-semibold zero:text-2xl 1160:text-3xl 1280:text-4xl 1440:text-5xl 1512:text-[56px] mb-4 leading-[114%] tracking-[-0.04em] text-slide-up">
                Real Yields for{" "}
                <span className="text-[#E36B4C] block">Anyone Anywhere</span>
              </h1>
              <p className="font-dm-sans font-normal zero:text-sm 1280:text-base 1440:text-lg 1512:text-xl leading-[150%] mb-8 text-slide-up-delay text-white">
                Savings without the spread, powered by RWA
              </p>

              <button className="zero:text-xs 1280:text-sm 1440:text-base border border-gray-500 py-2 px-6 rounded-[40px] transition-all hover:bg-gray-700 text-white">
                Launch Application
              </button>

              <div className="mt-[68px] flex gap-8 items-start text-slide-up-delay">
                <div className="border-r border-gray-300 pr-7">
                  <h4 className="zero:text-lg 1160:text-xl 1280:text-2xl 1440:text-3xl 1512:text-4xl mb-2 font-bold text-white">
                    $50M
                  </h4>
                  <p className="text-white zero:text-sm 1280:text-base">Total Value Locked</p>
                </div>

                <div>
                  <h4 className="zero:text-xl 1280:text-2xl 1440:text-3xl 1512:text-[36px] mb-2 font-bold text-white">
                    4.3%
                  </h4>
                  <p className="text-white zero:text-sm 1280:text-base">Savings rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
