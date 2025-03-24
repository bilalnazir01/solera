import welcomeBg from "../assets/images/wecome-bg.png";
import welcomeDashboard from "../assets/images/welcomeDashboard.png";
import welcomeMobile from "../assets/images/welcome Mobile.png";

export const WelcomeSection = () => {
  return (
    <section
    id="welcome"
    className="bg-bottom bg-cover shadow-[0_-4px_10px_rgba(0,0,0,0.9)]"
    style={{ backgroundImage: `url(${welcomeBg})` }}
  >
    <div className="bg-gradient-to-b from-black flex flex-col justify-center text-white">
      <h1 className="font-sora text-center font-semibold text-[32px] lg:text-[36px] tracking-[-2%] leading-[166%] lg:leading-[250%] mb-2">
        Welcome to Solera.
      </h1>
      <p className="text-[16px] lg:text-[18px] text-center leading-[125%] lg:leading-[188%] font-normal lg:mb-[50px] mb-4">
        Earn interest, borrow assets
      </p>

      <div className="relative w-full max-w-[1180px] mx-auto px-4">
        {/* Desktop Dashboard Image */}
        <img
          src={welcomeDashboard}
          alt="Dashboard"
          className="w-full h-[340px] lg:h-[600px] max-w-[1080px] mx-auto"
        />

        {/* Mobile Image - Positioned on Top */}
        <img
          src={welcomeMobile}
          alt="Mobile Dashboard"
          className="w-full h-[380px] lg:h-[670px] max-w-[250px] lg:max-w-[500px] mx-auto absolute top-[-10px] right-[-30px] lg:right-[-120px]"
        />
      </div>
    </div>
  </section>
  )
}

export default WelcomeSection;
