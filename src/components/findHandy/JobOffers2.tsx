import { useState } from "react";
import "../../App.css";

const JobOffers2 = () => {
  const [showMap, setShowMap] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Repair a leaky tube",
      employer: "Anna Müller",
      urgency: "URGENT",
      trustLevel: "Trustworthy",
      description:
        "Localize the source of the leak, place the water supply from (401)...",
      location: "Berlin, Germany",
      address: "address",
      posted: "3 days ago",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.40922317922!2d13.37684731580775!3d52.51692977981083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511d4f0d3c1!2sBrandenburger%20Tor!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde",
    },
  ];

  const toggleMap = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };

  return (
    <section className="job-offers-section" aria-label="Latest job offers">
      <div className="title-section">
        <h2 className="section-title">Latest job offers -</h2>
        <button className="access-button" disabled>
          access now!
        </button>
      </div>

      <div className="jobs-container">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="job-card"
            aria-label={`Job offer from ${job.employer}`}
          >
            <header className="job-header">
              <h3 className="job-employer">{job.employer}</h3>
              <div className="job-tags">
                {job.urgency && (
                  <span className="tag urgent" aria-label="Urgent job offer">
                    {job.urgency}
                  </span>
                )}
                {job.trustLevel && <i className="fa-regular fa-bookmark"></i>}
              </div>
            </header>

            <h4 className="job-title">{job.title}</h4>
            <p className="job-posted">{job.posted}</p>
            <p className="job-description">{job.description}</p>

            <span className="job-location">
              <i className="fa-solid fa-location-dot"></i>
              {job.location}
            </span>
            <div className="job-location-info">
              <span className="job-address">{job.address}</span>
              <button
                className="map-button"
                type="button"
                onClick={toggleMap}
                aria-label={`Show ${job.location} on the map`}
              >
                {showMap ? "Hide map" : "Show on the map"}
              </button>
            </div>
            <i
              className={`fa-solid fa-angle-down ${showMap ? "rotate" : ""}`}
            ></i>

            {showMap && (
              <div className="map-container">
                <iframe
                  src={job.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  aria-hidden="true"
                ></iframe>
              </div>
            )}

            <div className="job-actions">
              <button
                className="contact-button"
                type="button"
                aria-label={`Contact ${job.employer}`}
              >
                Contact
              </button>
            </div>
          </article>
        ))}
      </div>

      <button className="find-jobs-button" type="button" aria-label="Find jobs">
        Find jobs
      </button>
    </section>
  );
};

export default JobOffers2;
