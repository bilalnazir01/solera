import FooterImg from "../assets/images/truest-footerImg.png";
import DiscirdIcon from "../assets/images/dicIcn.png";  // Corrected icon path
import Xicon from "../assets/images/xIcon.png";
import EmailIcom from "../assets/images/emailicon.png";

const Footer = () => {
    return (
        <footer className="px-[31px] bg-black">
          <div className="flex text-white w-full max-w-[1180px] mx-auto flex-col md:flex-row justify-between items-start md:items-center">
            
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start mt-[34px]">
              <p className="text-[14px] font-semibold leading-[171.4%] tracking-[-0.28px] font-sora mb-3">Trusted by</p>
              <div className="border border-white opacity-30 rounded-[16px]">
                <img 
                  src={FooterImg}
                  alt="Trusted by" 
                  className="my-9 mx-[66px] w-[195px]" 
                />
              </div>
            </div>
    
            {/* Right Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
              
            {/* Social Section */}
            <div>
                <h3 className="font-sora text-[14px] font-semibold leading-[171%] tracking-[-0.28px]">Social</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li>
                    <a href="/" className="flex gap-2 hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">
                      <img src={DiscirdIcon} alt="Discord" className="w-4 h-4"/>
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="/" className="flex gap-2 hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">
                      <img src={Xicon} alt="Twitter" className="w-4 h-4"/>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@solera.com" className="flex gap-2 hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">
                      <img src={EmailIcom} alt="Email" className="w-4 h-4"/>
                      Support@solera.com
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* App Section */}
              <div>
                <h3 className="font-sora text-[14px] font-semibold leading-[171%] tracking-[-0.28px]">App</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Market</a></li>
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Swap</a></li>
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Stake</a></li>
                </ul>
              </div>
    
              {/* Company Section */}
              <div>
                <h3 className="font-sora text-[14px] font-semibold leading-[171%] tracking-[-0.28px]">Company</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Careers</a></li>
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Blog</a></li>
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Brand assets</a></li>
                  <li><a href="/" className="hover:text-white font-sans text-[14px] font-medium leading-[171%] tracking-[-0.28px]">Docs</a></li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Bottom Line */}
          <div className="text-[10px] leading-[120%] text-[#FFF] font-DM Sans mt-[84px] lg:mt-[142px] w-full max-w-[1180px] mx-auto">
            © 2025 Solera. All rights reserved.
          </div>
        </footer>
      );
}

export default Footer;
