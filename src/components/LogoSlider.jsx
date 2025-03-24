import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Anemoy from "../assets/images/sliderImg/Anemoy.png";
import Ondo from "../assets/images/sliderImg/Ondo.png";
import Mercury from "../assets/images/sliderImg/Mercury.png"; 
import Carlyle from "../assets/images/sliderImg/Carlyle.png";
import BlackRock from "../assets/images/sliderImg/BlackRock.png";
import Ethena from "../assets/images/sliderImg/Ethena.png";
import Blackstone from "../assets/images/sliderImg/Blackstone.png";
import Plume from "../assets/images/sliderImg/Plume.png";
import StandardChartered from "../assets/images/sliderImg/Standard Chartered.png";
import PIMCO from "../assets/images/sliderImg/PIMCO.png";
import Dinari from "../assets/images/sliderImg/Dinari.png";
import Hamilton from "../assets/images/sliderImg/Hamilton.png";
import Centrifuge from "../assets/images/sliderImg/Centrifuge.png";
import Credbull from "../assets/images/sliderImg/Credbull.png";
import "tailwindcss/tailwind.css";

const logos = [
  { src: Anemoy, alt: "Anemoy" },
  { src: Ondo, alt: "Ondo" },
  { src: Mercury, alt: "Mercury" },
  { src: Carlyle, alt: "Carlyle" },
  { src: BlackRock, alt: "BlackRock" },
  { src: Ethena, alt: "Ethena" },
  { src: Blackstone, alt: "Blackstone" },
  { src: Plume, alt: "Blackstone" },
  { src: StandardChartered, alt: "Blackstone" },
  { src: PIMCO, alt: "Blackstone" },
  { src: Dinari, alt: "Blackstone" },
  { src: Hamilton, alt: "Blackstone" },
  { src: Centrifuge, alt: "Blackstone" },
  { src: Credbull, alt: "Blackstone" },
  // Add more logos here as necessary
];

export default function LogoSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-transparent pb-7 mt-[157px]">
      <motion.div
        ref={sliderRef}
        className="flex w-max gap-[50px] md:gap[64px] lg:gap-[99px]"
        animate={{ x: [0, -100] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              className="max-w-[120px] h-[32px] object-contain"
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
