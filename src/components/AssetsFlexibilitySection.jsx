import React from 'react';
import rightIcon from "../assets/images/right-icon.png";
import leftIcon from "../assets/images/left-icon.png";
import BgImg from "../assets/images/assetsflex-bg.png";
import NrwaImg from "../assets/images/nrwa.png";
import StoneImg from "../assets/images/stone.png";
import PusdImg from "../assets/images/pusd.png";

const AssetCard = ({ imgSrc, title, value }) => {
  return (
    <div
      className="flex justify-between items-center w-full lg:w-[500px] backdrop-blur-lg bg-black/50 line line-delay-3"
      style={{
        borderRadius: '20px',
        border: '2px solid transparent',
        borderImage: 'linear-gradient(to bottom right, #FF8C00, black) 1', 
      }}
    >
      <img src={imgSrc} alt={title} className="w-[66px] lg:w-20 my-[19px] lg:my-6 ml-[22px] lg:ml-[27px] mr-[25px]" />
      <p className="text-[36px] font-Sora lg:text-[48px] font-semibold mr-[36px] lg:mr-[47px]">{title}</p>
      <p className="text-[36px] font-sora  lg:text-[48px] mr-[26px]">{value}</p>
    </div>
  );
};

export const AssetsFlexibilitySection = () => {
  return (
    <section
      className="relative bg-bottom bg-cover shadow-[0_-4px_10px_rgba(0,0,0,0.9)]"
      id="assets-flexibility-section"
      style={{ backgroundImage: `url(${BgImg})` }} // Set the background image here
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 w-full max-w-[1180px] mx-auto grid lg:grid-cols-3 text-white pt-[156px] pb-[172px] lg:pb-[365px] px-4">
        
        {/* First Part */}
        <div className="flex flex-col justify-center items-start z-50">
          <img src={leftIcon} alt="Icon" className="w-10 mb-6" />
          <h2 className="text-[36px] font-semibold w-[200px] font-Sora text-white leading-[111.111%] tracking-[-0.72px] mb-6">Asset Flexibility</h2>
          <p className="text-[18px] text-gray-400 mt-2 w-[275px] leading-[166.6%] font-DM-Sans">Liquid or not, maintain self-custody</p>
        </div>

        {/* Second Part - Asset Divs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-1 justify-center gap-8 my-4">
          <AssetCard imgSrc={NrwaImg} title="nRWA" value="3.2%" />
          <AssetCard imgSrc={StoneImg} title="STONE" value="1.8%" />
          <AssetCard imgSrc={PusdImg} title="pUSD" value="2.6%" />
        </div>

        {/* Third Part */}
        <div className="flex flex-col justify-center items-end z-20">
          <img src={rightIcon} alt="Icon" className="w-10 mb-6" />
          <h2 className="text-end text-[36px] font-semibold w-[200px] font-Sora text-white leading-[111.111%] tracking-[-0.72px] mb-6">Control your yield</h2>
          <p className="text-[18px] text-gray-400 text-end mt-2 w-[275px] leading-[166.6%] font-DM-Sans">High LTV strategies at your disposal</p>
        </div>
      </div>
    </section>
  );
};
