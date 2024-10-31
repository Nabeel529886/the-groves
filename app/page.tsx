import PossibilitiesSection from "@/sections/PossibilitiesSection";
import HeroSection from "@/sections/HeroSection";
import AccessTicketSection from "@/sections/AccessTicketSection";
import CuisineSection from "@/sections/CuisineSection";
import CurateExperienceSection from "@/sections/CurateExperienceSection";
import FindPlaceSection from "@/sections/FindPlaceSection";
import Divider from "@/components/Divider/Divider";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PossibilitiesSection />
      <AccessTicketSection />
      <CuisineSection />
      <CurateExperienceSection />
      <FindPlaceSection />
      <Divider />
      <Footer />
    </div>
  );
}
