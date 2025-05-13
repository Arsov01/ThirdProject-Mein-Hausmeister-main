import ArtisianButtons from "../components/artisianButtons";
import ToggleSwitch from "../components/ArtisianSection";
import BookingSection from "../components/bookingSection";
import ImageSection from "../components/CardTitle";
import FeaturesSection from "../components/checkIcons";
import CraftsmenSection from "../components/craftsMenSection";
import AvatarsSection1 from "../components/customers/avatarsSection";
import TestimonialsSection1 from "../components/customers/cardStarsSection";
import NewMembers from "../components/customers/newMembers";
import JobOffers1 from "../components/JobOffers";
import Navbar from "../components/Navbar";
import MoreSalesSection from "../components/Stats";

export default function CustomersPage() {
  return (
    <div>
      <Navbar />
      <ToggleSwitch />
      <MoreSalesSection />
      <ImageSection />
      <ArtisianButtons />
      <FeaturesSection />
      <CraftsmenSection />
      <BookingSection />
      <JobOffers1 />
      <NewMembers />
      <TestimonialsSection1 />
      <AvatarsSection1 />
    </div>
  );
}
