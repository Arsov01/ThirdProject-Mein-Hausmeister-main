import "../App.css";
import SearchButtons from "../components/findHandy/searchInput";
import ServiceProviders from "../components/findHandy/handyCards";
import JobOffers2 from "../components/findHandy/JobOffers2";
import AvatarsSection2 from "../components/findHandy/avatarsSection2";
import Navbar2 from "../components/findHandy/Navbar2";
import ToggleSwitch2 from "../components/findHandy/ArtisianSection2";

export default function FindHandy() {
  return (
    <div>
      <Navbar2 />
      <ToggleSwitch2 />
      <SearchButtons />
      <ServiceProviders />
      <JobOffers2 />
      <AvatarsSection2 />
    </div>
  );
}
