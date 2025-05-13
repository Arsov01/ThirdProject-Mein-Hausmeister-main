import React, { useState, useMemo, JSX } from "react";
import "../../App.css";

interface Provider {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  services: string[];
  experience: string;
  availability: string;
  availableNow: boolean;
  avatar: string;
}

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = React.memo(({ provider }) => {
  const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const starIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="star-icon"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star-icon full-star">
          {starIcon}
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star-icon half-star">
          {starIcon}
        </span>
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star-icon empty-star">
          {starIcon}
        </span>
      );
    }

    return stars;
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://i.pravatar.cc/150?img=3"; // Fallback image
  };

  return (
    <article
      className="provider-card"
      aria-label={`Service provider ${provider.name}`}
    >
      {provider.availableNow && (
        <div className="available-tag">Now available</div>
      )}

      <header className="provider-header">
        <div className="provider-info-container">
          <img
            src={provider.avatar}
            alt={provider.name}
            className="provider-image"
            onError={handleImageError}
          />
          <div className="provider-name-location">
            <h3 className="provider-name">{provider.name}</h3>
            <p className="provider-location">{provider.location}</p>
          </div>
        </div>
      </header>

      <div className="provider-rating">
        <div className="stars-container">
          {renderStars(provider.rating)}
          <span className="rating-number">{provider.rating}</span>
          <span className="reviews">{provider.reviews} reviews</span>
        </div>
      </div>

      <div className="rating-service-container">
        <div className="services-list">
          {provider.services.map((service, index) => (
            <span key={index} className="service-item">
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="provider-details">
        <p>{provider.experience}</p>
        <p>{provider.availability}</p>
      </div>

      <footer className="provider-footer">
        <button
          className="profile-button"
          type="button"
          aria-label={`Show ${provider.name}'s profile`}
        >
          Show profile
        </button>
        <button
          className="contact-button"
          type="button"
          aria-label={`Contact ${provider.name}`}
        >
          Contact
        </button>
      </footer>
    </article>
  );
});

const ServiceProviders: React.FC = () => {
  const [viewMode, setViewMode] = useState<"List" | "Grid" | "Map">("List");
  const [isOpen, setIsOpen] = useState(false);
  const [showAllProviders, setShowAllProviders] = useState(false);
  const initialProvidersToShow = 2;

  const providers = useMemo<Provider[]>(() => {
    const firstNames = [
      "Klaus",
      "Hans",
      "Anna",
      "Maria",
      "Peter",
      "Michael",
      "Sarah",
    ];
    const lastNames = [
      "Müller",
      "Schmidt",
      "Schneider",
      "Fischer",
      "Weber",
      "Schulz",
      "Becker",
    ];
    const locations = [
      "Rheda-Wiedenbrück",
      "Berlin",
      "Munich",
      "Hamburg",
      "Cologne",
      "Frankfurt",
    ];
    const allServices = [
      "Heating",
      "Sanitary",
      "A/C",
      "Solar systems",
      "Electrical",
    ];

    return Array.from({ length: 298 }, (_, index) => {
      const randomServices = () =>
        allServices
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 3) + 1);

      const availabilityOptions = [
        "Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück.",
        "Available weekdays 9am-5pm",
        "Available 24/7 for emergency services",
        "Available weekends with appointment",
      ];

      return {
        id: index + 1,
        name: `${firstNames[index % firstNames.length]} ${
          lastNames[index % lastNames.length]
        }`,
        location: locations[index % locations.length],
        rating: Number((4 + Math.random()).toFixed(1)),
        reviews: Math.floor(Math.random() * 100),
        services: randomServices(),
        experience: `${
          Math.floor(Math.random() * 15) + 5
        }+ years of experience`,
        availability: availabilityOptions[index % availabilityOptions.length],
        availableNow: Math.random() > 0.3,
        avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
      };
    });
  }, []);

  const providersToDisplay = showAllProviders
    ? providers
    : providers.slice(0, initialProvidersToShow);

  return (
    <section className="providers-section" aria-label="Service providers">
      <div className="title-section">
        <h2 className="section-title">Service Providers -</h2>
        <button className="access-button" disabled>
          search providers
        </button>
      </div>
      <div className="results-header-container">
        <div className="results-header">
          <span className="results-count">{providers.length} results</span>
          <span className="divider">·</span>
          <div
            className={`view-selector ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="view-label">View</span>
            <span className="dropdown-arrow">▼</span>
            {isOpen && (
              <div className="dropdown-options">
                {(["List", "Grid", "Map"] as const).map((option) => (
                  <div
                    key={option}
                    className={`option ${viewMode === option ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="providers-container">
        {providersToDisplay.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>

      {providers.length > initialProvidersToShow && (
        <div className="show-more-container">
          <button
            className="show-more-button"
            onClick={() => setShowAllProviders(!showAllProviders)}
          >
            {showAllProviders ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceProviders;
