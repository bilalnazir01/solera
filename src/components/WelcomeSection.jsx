import welcomeBg from "../assets/images/wecome-bg.png";
import welcomeDashboard from "../assets/images/welcomeDashboard.png";
import welcomeMobile from "../assets/images/welcome Mobile.png";
import Border from "../assets/images/border.png";

export const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="bg-bottom bg-cover shadow-[0_-4px_10px_rgba(0,0,0,0.9)] zero:mt-[137px] 1024:mt-[30px] zera:mb-[20px] 768:mb-[50px]  1024:mb-[111px]"
      style={{ backgroundImage: `url(${welcomeBg})` }}
    >
      <div className="bg-gradient-to-b from-black flex flex-col justify-center items-center text-white px-7">
        <h2 className="font-sans text-center font-semibold text-[32px] lg:text-[36px] tracking-[-0.72%] leading-[166%] lg:leading-[250%] mb-2">
          Welcome to Solera.
        </h2>
        <p className="text-[16px] lg:text-[18px] text-center leading-[125%] lg:leading-[188%] opacity-70 font-dm-sans font-normal lg:mb-[50px] mb-4">
          Earn interest, borrow assets
        </p>

        <div className="relative w-full max-w-[1172px] mx-auto px-4 ">
          {/* Desktop Dashboard Image */}
          <img
            src={welcomeDashboard}
            alt="Dashboard"
            className="w-full zero:h-[150px] 375:h-[180px] 640:h-[347px] 768:h-[465px] 1024:h-[600px] max-w-[1080px] relative"
          />
          <img src={Border} alt="border" className="absolute top-0 left-[14px] w-full max-w-[763px]"/>

          {/* Mobile Image - Positioned on Top */}
          <img
            src={welcomeMobile}
            alt="Mobile Dashboard"
            className="w-full zero:h-[174px] zero:w-[135px] 375:h-[213px] 300:w-[180px] 640:h-[390px] 640:w-[280px] 640:-right-12  768:w-[417px] 768:h-[510px] 768:top-[-3px] 768:right-[-79px] 1024:-right-8 1024:h-[660px] 1024:w-[500px] mx-auto absolute top-[-10px] zero:right-[-30px] 1440px:right-[-90px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
