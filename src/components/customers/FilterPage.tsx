import { useState } from "react";
import "../../App.css";

type ServiceOption =
  | "Electrical installation"
  | "Plumbing Installation"
  | "Painting and varnishing work"
  | "Carpentingjounery"
  | "Roofing work"
  | "Heating installation"
  | "Tiling work"
  | "Bricklaying work"
  | "Gardening and landscaping"
  | "Metalworking";

const FilterSection = () => {
  const [selectedServices, setSelectedServices] = useState<ServiceOption[]>([]);
  const [zipCode, setZipCode] = useState("");
  const [distance, setDistance] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [locationMode, setLocationMode] = useState("vorwahl"); // "vorwahl" or "entfernung"

  const serviceOptions: ServiceOption[] = [
    "Electrical installation",
    "Plumbing Installation",
    "Painting and varnishing work",
    "Carpentingjounery",
    "Roofing work",
    "Heating installation",
    "Tiling work",
    "Bricklaying work",
    "Gardening and landscaping",
    "Metalworking",
  ];

  const handleServiceToggle = (service: ServiceOption) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const resetFilters = () => {
    setSelectedServices([]);
    setZipCode("");
    setAreaCode("");
    setDistance("");
    setLocationMode("vorwahl");
  };

  const applyFilters = () => {
    console.log("Applied filters:", {
      services: selectedServices,
      zipCode,
      areaCode,
      distance,
      locationMode,
    });
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h2>Filters</h2>
        <button onClick={resetFilters} className="reset-button" type="button">
          Reset all
        </button>
      </div>

      <div className="filter-group">
        <h3>Location</h3>
        <div
          className="standort-toggle"
          role="radiogroup"
          aria-label="Standort Filter"
        >
          <button
            type="button"
            className={locationMode === "vorwahl" ? "active" : ""}
            aria-pressed={locationMode === "vorwahl"}
            onClick={() => setLocationMode("vorwahl")}
          >
            Area code
          </button>
          <button
            type="button"
            className={locationMode === "entfernung" ? "active" : ""}
            aria-pressed={locationMode === "entfernung"}
            onClick={() => setLocationMode("entfernung")}
          >
            Distance
          </button>
        </div>
        {locationMode === "vorwahl" && (
          <input
            type="text"
            placeholder="PLZ."
            value={areaCode}
            onChange={(e) => setAreaCode(e.target.value)}
            className="input-group"
            aria-label="Vorwahl"
          />
        )}
        {locationMode === "entfernung" && (
          <input
            type="text"
            placeholder="Electrical installation"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="input-group"
            aria-label="Entfernung"
          />
        )}
      </div>

      <div className="filter-group">
        <h3>Type of service</h3>
        <div className="service-options">
          {serviceOptions.map((service) => (
            <label key={service} className="service-option" htmlFor={service}>
              <input
                type="checkbox"
                id={service}
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceToggle(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Reviews</h3>
      </div>

      <button onClick={applyFilters} className="seek-button" type="button">
        Apply the filters
      </button>
    </div>
  );
};

export default FilterSection;
