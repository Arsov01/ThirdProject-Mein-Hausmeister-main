import "../App.css";
import { useNavigate } from "react-router-dom";

const JobOffers1 = () => {
  const navigate = useNavigate();

  const findHandyClick = () => {
    navigate("/FindHandy");
  };

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
    },
  ];

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

            <footer className="job-footer">
              <div className="job-address-section">
                <span className="job-address">{job.address}</span>
              </div>
              <div className="job-location">
                <button
                  className="map-button"
                  type="button"
                  aria-label={`Show ${job.location} on the map`}
                >
                  Show on the map
                </button>
              </div>
            </footer>
            <button
              className="contact-button"
              type="button"
              aria-label={`Contact ${job.employer}`}
            >
              Contact
            </button>
            <i className="fa-solid fa-angle-down "></i>
          </article>
        ))}
      </div>

      <button
        className="find-jobs-button"
        type="button"
        aria-label="Find jobs"
        onClick={findHandyClick}
      >
        Find jobs
      </button>
    </section>
  );
};

export default JobOffers1;
