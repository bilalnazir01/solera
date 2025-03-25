import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import rightIcon from "../assets/images/right-icon.png";
import leftIcon from "../assets/images/left-icon.png";
import BgImg from "../assets/images/assetsflex-bg.png";
import NrwaImg from "../assets/images/nrwa.png";
import StoneImg from "../assets/images/stone.png";
import PusdImg from "../assets/images/pusd.png";
import Border from "../assets/images/asets.png"

// Asset Card component
const AssetCard = ({ imgSrc, title, value }) => {
  return (
    <motion.div
      className="flex relative justify-between items-center w-full lg:w-[500px] backdrop-blur-[28px] rounded-[21px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
         <img src={Border} alt="border"  className='absolute top-0 left-0'/>
      <img src={imgSrc} alt={title} className="w-[40px] lg:w-20 my-[19px] lg:my-6 ml-[20px] lg:ml-[27px] mr-[20px] lg:mr-[25px]" />
      <h4 className="text-[32px] md:text-[36px] font-Sora lg:text-[48px] font-medium mr-[36px] lg:mr-[47px]">{title}</h4>
      <p className="text-[32px] md:text-[36px] font-Sora lg:text-[48px] mr-[26px]">{value}</p>
    </motion.div>
  );
};

// Assets Flexibility Section component
export const AssetsFlexibilitySection = () => {
  return (
    <motion.section
      className="relative bg-bottom bg-cover shadow-[0_-4px_10px_rgba(0,0,0,0.9)]"
      id="assets-flexibility-section"
      style={{ backgroundImage: `url(${BgImg})`, 
        height: '1200px',
        width:"100%",
        padding:"30px",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 w-full max-w-[1180px] mx-auto grid lg:grid-cols-3 text-white pt-[156px]">
        
        {/* First Part - Left Section */}
        <motion.div
          className="flex flex-col justify-center items-start z-50 mx-[26px] md:mx-[12px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img src={leftIcon} alt="Icon" className="w-10 h-10 mb-6" />
          <h2 className="text-[32px] 1024:text-[36px] font-semibold w-[200px] font-sans text-white leading-[111.111%] tracking-[-0.72px] mb-6">Asset Flexibility</h2>
          <p className="text-[18px] text-[#FFF] opacity-70 w-[275px] leading-[166.6%] font-dm-sans">Liquid or not, maintain self-custody</p>
        </motion.div>

        {/* Second Part - Asset Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-1 justify-center gap-8 my-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <AssetCard imgSrc={NrwaImg} title="nRWA" value="3.2%" />
          <AssetCard imgSrc={StoneImg} title="STONE" value="1.8%" />
          <AssetCard imgSrc={PusdImg} title="pUSD" value="2.6%" />
        </motion.div>

        {/* Third Part - Right Section */}
        <motion.div
          className="flex flex-col justify-center items-end z-20 mx-[26px] md:mx-[12px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <img src={rightIcon} alt="Icon" className="w-10 h-10 mb-6" />
          <h2 className="text-end zero:text-[32px] 1024:text-[36px] font-semibold w-[200px] font-sans text-white leading-[111.111%] tracking-[-0.72px] mb-6">Control your yield</h2>
          <p className="text-[18px] opacity-70 text-[#FFF] text-end mt-2 w-[275px] leading-[166.6%] font-dm-sans">High LTV strategies at your disposal</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
