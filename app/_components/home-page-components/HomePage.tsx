import ActivitiesSection from "./ActivitiesSection"
import BundlesSection from "./BundlesSection"
import CabinsSection from "./CabinsSection"
import DestinationSection from "./DestinationSection"
import HeroSection from "./HeroSection"
import MeetLocalsSection from "./MeetLocalsSection"



const HomePage = () => {
  return (
    
    <>
        <HeroSection/>
        <DestinationSection />
        <CabinsSection />
        <ActivitiesSection />
        <BundlesSection />
        <MeetLocalsSection />
    </>
  )
}

export default HomePage