import React from 'react';
import FirstCard from "../assets/images/card-11.png";
import TwoCard from "../assets/images/card 2.png";
import ThirdCard from "../assets/images/card 3.png";
import ForthCard from "../assets/images/card 4.png";
import FivthtCard from "../assets/images/card 5.png";
import LogoSlider from './LogoSlider';
import border from "../assets/images/soleratypes.png"
import CardThreeBg from "../assets/images/soleraCard3.svg";
import CardFiveBg from "../assets/images/soleraCard5.svg";

// Card component
const Card = ({ image, title, description, imageWidth, imageHeight, imagePadding, titleSize, descSize }) => {
  return (
    <div className={`bg-[rgba(53,50,48,0.50)] shadow-lg rounded-[16px] text-center relative`}>
      <img src={border} alt="border" className='absolute top-0 left-0'/>
      <img
        src={image}
        alt={title}
        className={`w-full mx-auto object-cover rounded-t-lg ${imageWidth} ${imageHeight} ${imagePadding}`}
      />
      <div className="flex flex-col justify-center items-center mt-4">
        <h4 className={`font-Sora text-white font-bold ${titleSize} leading-[1.2] mb-3`}>
          {title}
        </h4>
        <p className={`font-DM_Sans ${descSize} text-gray-400 leading-[24px] pb-8 w-[350px]`}>
          {description}
        </p>
      </div>
    </div>
  );
};

// Last three Card component
const CardRemain = ({ image, title, description, imageWidth, imageHeight, imagePadding, titleSize, descSize, backgroundImage, backgroundWidth, backgroundHeight }) => {
  return (
    <div 
      className={`bg-[rgba(53,50,48,0.50)] shadow-lg rounded-[16px] text-center relative`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: `${backgroundWidth} ${backgroundHeight}`, 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <img src={border} alt="border" className='absolute top-0 left-0'/>
      <img
        src={image}
        alt={title}
        className={`w-full mx-auto object-cover rounded-t-lg ${imageWidth} ${imageHeight} ${imagePadding}`}
      />
      <div className="flex flex-col justify-center items-center mt-4">
        <h4 className={`font-sans text-white font-bold ${titleSize} leading-[1.2] mb-3`}>
          {title}
        </h4>
        <p className={`font-dm-sans ${descSize} text-gray-400 leading-[24px] pb-8 w-[350px]`}>
          {description}
        </p>
      </div>
    </div>
  );
};

// First two cards section
const FirstTwoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6 mb-6 mx-[30px]">
      <Card
        image={FirstCard}
        title="Solera Savings"
        description="Savings App for Anyone Anywhere Powered by Defi and RWAfi rails"
        imageWidth="w-[196px]"
        imageHeight="h-auto"
        imagePadding="px-[92px] lg:px-[192px] pt-[53px] lg:pt-[64px] pb-[21px]"
        titleSize="text-[24px] sm:text-[32px] md:text-[36px]"
        descSize="text-[16px] sm:text-[16px] md:text-[18px]"
      />
      <Card
        image={TwoCard}
        title="Solera Market"
        description="Overcollateralized lending market"
        imageWidth="w-[321px]"
        imageHeight="h-auto"
        imagePadding="pt-[53px] lg:pt-[60px] px-[30px] lg:px-[130px] pb-[22px]"
        titleSize="text-[24px] sm:text-[30px] md:text-[34px]"
        descSize="text-[16px] sm:text-[15px] md:text-[17px]"
      />
    </div>
  );
};

// Remaining three cards section
const RemainingCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-[30px]">
      <CardRemain
        image={ThirdCard}
        title="Solera Swap"
        description="Integrations with Dex + LP tokens"
        imageWidth="w-[200px]"
        imageHeight="h-auto"
        imagePadding="pt-[61px] px-[90px] pb-[39px] lg:pb-[34px]"
        titleSize="text-[20px] sm:text-[28px] md:text-[32px]"
        descSize="text-[14px] sm:text-[14px] md:text-[16px]"
        backgroundImage={CardThreeBg}  // Set the background image here for the Third Card
        backgroundWidth="350px"  // Set background width
        backgroundHeight="200px"  // Set background height
      />
      <CardRemain
        image={ForthCard}
        title="Solera Staking"
        description="Liquid staking for PLUME token"
        imageWidth="w-[217px]"
        imageHeight="h-auto"
        imagePadding="pt-[43px] lg:pt-[37px] pl-[8px] lg:pl-[72px] pr-[82px] lg:pr-[91px] pb-[18px]"
        titleSize="text-[20px] sm:text-[26px] md:text-[30px]"
        descSize="text-[14px] sm:text-[13px] md:text-[15px]"
      />
      <CardRemain
        image={FivthtCard}
        title="Solera Strategies"
        description="Yield interface and strategy optimizer"
        imageWidth="w-[200px]"
        imageHeight="h-auto"
        imagePadding="pt-[61px] px-[90px] pb-[42px] lg:pb-[36px]"
        titleSize="text-[20px] sm:text-[24px] md:text-[28px] font-sans"
        descSize="text-sm leading-[171%] font-dm-sans"
        backgroundImage={CardFiveBg}
        backgroundWidth="70%"  
        backgroundHeight="60%" 
      />
    </div>
  );
};

// Main Section Component
const SoleraTypesSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(to bottom, black, rgba(53, 50, 48, 0.50))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-[1180px] w-full mx-auto'>
        {/* First two cards section */}
        <FirstTwoCards />
        
        {/* Remaining three cards section */}
        <RemainingCards />
      </div>
      <LogoSlider />
    </section>
  );
};

export default SoleraTypesSection;
