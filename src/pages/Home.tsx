import ArtisianButtons from "../components/artisianButtons";
import ToggleSwitch from "../components/ArtisianSection";
import AvatarsSection from "../components/avatarsSection";
import BookingSection from "../components/bookingSection";
import TestimonialsSection from "../components/cardStarsSection";
import ImageSection from "../components/CardTitle";
import FeaturesSection from "../components/checkIcons";
import CraftsmenSection from "../components/craftsMenSection";
import JobOffers from "../components/JobOffers";
import Navbar from "../components/Navbar";
import MoreSalesSection from "../components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <ToggleSwitch />
      <MoreSalesSection />
      <ImageSection />
      <ArtisianButtons />
      <FeaturesSection />
      <CraftsmenSection />
      <BookingSection />
      <JobOffers />
      <TestimonialsSection />
      <AvatarsSection />
    </>
  );
}
