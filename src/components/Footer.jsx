import FooterImg from "../assets/images/truest-footerImg.png"
import Xicon from "../assets/images/xIcon.png"
import Discord from "../assets/images/dicIcn.png";
import Email from "../assets/images/emailicon.png";

const Footer = () => {
    return (
        <footer className="p-4 bg-black">
          <div className="flex text-white w-full max-w-[1180px] mx-auto flex-col md:flex-row justify-between items-start md:items-center">
            
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start mt-[34px]">
              <p className="text-lg font-semibold mb-2">Trusted by</p>
              <div className="border border-gray-500 mt-2 rounded-2xl">
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
                <h3 className="text-lg font-bold">Social</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li><a href="/" className="hover:text-white flex">Discord</a></li>
                  <li><a href="/" className="hover:text-white flex">Twitter</a></li>
                  <li><a href="mailto:support@solera.com" className="hover:text-white flex">Support@solera.com</a></li>
                </ul>
              </div>
    
              {/* App Section */}
              <div>
                <h3 className="text-lg font-bold">App</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li><a href="/" className="hover:text-white">Market</a></li>
                  <li><a href="/" className="hover:text-white">Swap</a></li>
                  <li><a href="/" className="hover:text-white">Stake</a></li>
                </ul>
              </div>
    
              {/* Company Section */}
              <div>
                <h3 className="text-lg font-bold">Company</h3>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li><a href="/" className="hover:text-white">Careers</a></li>
                  <li><a href="/" className="hover:text-white">Blog</a></li>
                  <li><a href="/" className="hover:text-white">Brand assets</a></li>
                  <li><a href="/" className="hover:text-white">Docs</a></li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Bottom Line */}
          <div className="text-left text-gray-400 mt-[84px] lg:mt-[142px] w-full max-w-[1180px] mx-auto">
            © 2025 Solera. All rights reserved.
          </div>
        </footer>
      );
}

export default Footer