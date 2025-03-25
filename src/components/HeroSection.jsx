import { useEffect, useRef } from "react";
import { motion } from "framer-motion";  // Import motion from framer-motion
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
      <section className="w-full flex l1024:items-start items-start relative min-h-fit ">
        <div className="relative flex zero:flex-col 1024:flex-row zero:items-center w-full max-w-[1521px] mx-auto pt-12">
          {/* Left Side Background Video +++++*/}
          <div className="relative w-full zero:flex zero:flex-col zero:gap-y-10 1024:gap-y-0 zero:items-center 1024:block">
            <motion.video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="h-full object-contain w-full zero:max-w-full 1024:max-w-[625px] 1160:max-w-[725px] 1280:max-w-[825px] 1440:max-w-[900px] 1512:max-w-[925px] 1024:h-[75vh] zero:h-[40vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <source src={BannerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            {/* Right Side text+++++++ */}
            <div className="max-w-[508px] zero:flex zero:flex-col zero:items-center 1024:block w-full 1024:absolute 1024:top-1/2 1024:transform 1024:-translate-y-1/2 1024:right-1 1160:right-1.5 1280:right-10 1512:right-[125px] z-10 text-slide-up-delay">
              <motion.h1
                className="font-sans font-semibold zero:text-center 768:text-center 1024:text-start text-white zero:text-2xl 768:text-4xl 1280:text-5xl 1512:text-[56px] mb-4 leading-[114%] tracking-[-0.04em] text-slide-up"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Real Yields for{" "}
                <span className="text-[#E36B4C] block text-start">Anyone Anywhere</span>
              </motion.h1>

              <motion.p
                className="font-dm-sans font-normal zero:text-sm 1160:text-base 1280:text-xl leading-[150%] mb-8 text-slide-up-delay text-[rgba(255,255,255,0.7)]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Savings without the spread, powered by RWAfi
              </motion.p>

              <motion.button
                className="font-dm-sans font-medium tracking-[-0.32px] leading-[150%] zero:text-xs 1160:text-sm 1280:text-base border border-white py-[14px] px-5 rounded-[40px] transition-all hover:bg-white hover:text-black text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Launch Application
              </motion.button>

              <motion.div
                className="mt-[68px] flex items-start text-slide-up-delay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <div className="border-r border-gray-700 pr-[50px]">
                  <motion.h4
                    className=" zero:text-xl 1160:text-2xl 1512:text-4xl mb-2 font-sans font-semibold leading-[111%] tracking-[-0.72px] text-[#FFF]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  >
                    $50M
                  </motion.h4>
                  <p className="text-gray-300 zero:text-sm 1280:text-base font-dm-sans text-[18px] leading-[133%] opacity-50 tracking-[-0.36px] ">Total Value Locked</p>
                </div>

                <div className="pl-[49px]">
                  <motion.h4
                    className="zero:text-xl 1160:text-2xl 1512:text-4xl mb-2 font-sans font-semibold leading-[111%] tracking-[-0.72px] text-[#FFF]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                  >
                    4.3%
                  </motion.h4>
                  <p className="text-[#FFF] opacity-50 zero:text-sm 1280:text-[18px] font-dm-sans text-[18px] leading-[133%] tracking-[-0.36px]">Savings rate</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
