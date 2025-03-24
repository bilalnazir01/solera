
import HeroSection from '../components/HeroSection'
import HelpBlog from '../components/HelpBlog'
import WelcomeSection from '../components/WelcomeSection'
import { AssetsFlexibilitySection } from '../components/AssetsFlexibilitySection'
import SoleraTypesSection from '../components/SoleraTypesSection'
import LogoSlider from '../components/LogoSlider'

const Home = () => {
  return (
  <div className='bg-black'>
    <HeroSection/>
    <WelcomeSection/>
    <AssetsFlexibilitySection/>
    <SoleraTypesSection/>
    <HelpBlog/>
    </div>
  )
}

export default Home
