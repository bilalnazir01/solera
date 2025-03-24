import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import backgroundImage from '../assets/images/earthimg.png';

const helpBlogData = [
  {
    title: "Help center",
    description:
      "Explore our Help Center for quick fixes, tutorials, and troubleshooting assistance.",
    buttons: [
      { text: "Contact Us", style: "bg-white text-[16px] font-semibold leading-[150%] tracking-[-0.32px] text-black px-5 py-[14px]" },
      { text: "FAQ", style: "border border-white text-[16px] font-semibold leading-[150%] tracking-[-0.32px] text-white px-5 py-[14px]" },
    ],
  },
  {
    title: "Blog",
    blogPosts: [
      "Which Cryptocurrencies will be Included on the USA Strategic Reserve?",
      "The Three Reasons Why Trump is Endangering the whole Crypto Market",
      "Argentinian President Javier Milei charged with fraud over $LIBRA token scandal",
    ],
  },
];

const HelpBlogCard = ({ title, description, buttons, blogPosts }) => {
  return (
    <motion.div
      className="bg-[rgba(78,78,78,0.3)] text-white backdrop-blur-2xl rounded-[16px] py-[32px] px-[42px] mx-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden with a slight vertical offset
      whileInView={{ opacity: 1, y: 0 }} // Target state: visible and aligned
      viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      <motion.h2
        className="font-sora font-semibold text-[24px] leading-[166.67%] mb-3 tracking-[-0.48px]"
        initial={{ opacity: 0, y: 20 }} // Initial state for title
        whileInView={{
          opacity: 1,
          y: 0,
          scale: [1, 1.1], // Start at 1, scale to 1.1
          rotate: [10, 0], // Slight rotation effect for more dynamic entrance
        }} // Target state for title
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the title is in view
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="font-dm-sans text-[16px] leading-[187.5%] mb-[143px]"
          initial={{ opacity: 0, y: 20 }} // Initial state for description
          whileInView={{
            opacity: 1,
            y: 0,
            scale: [1, 1.1], // Scale effect (simplified to two values)
            rotate: [10, 0], // Adding rotation to the description
          }} // Target state for description
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the description is in view
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 150 }}
        >
          {description}
        </motion.p>
      )}

      {buttons && (
        <div className="mt-4 flex sm:flex-row flex-col gap-5 items-bottom">
          {buttons.map((btn, index) => (
            <button key={index} className={`${btn.style} px-4 w-full max-w-[400px] md:px-4 py-[14px] sm:w-[140px] rounded-3xl font-medium`}>
              {btn.text}
            </button>
          ))}
        </div>
      )}

      {blogPosts && (
        <ul className="mt-4 space-y-4">
          {blogPosts.map((post, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-gray-400">▮▮</span>
              <span className="font-dm-sans text-[16px] leading-[187.5%] font-medium">{post}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="absolute top-6 right-6 text-[#FF4D00] text-3xl lg:text-5xl">→</div>
    </motion.div>
  );
};

const HelpBlogSection = () => {
  return (
    <motion.section
      id="help-blog"
      className="pt-[112px] md:pt-[187px] md:pb-[144px] pb-[101px] relative bg-cover bg-center bg-no-repeat z-5"
      style={{ backgroundImage: `url(${backgroundImage})` }} // background image applied here
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} // Fade in the entire section
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the section is in view
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {helpBlogData.map((data, index) => (
          <HelpBlogCard key={index} {...data} />
        ))}
      </div>
    </motion.section>
  );
};

export default HelpBlogSection;
