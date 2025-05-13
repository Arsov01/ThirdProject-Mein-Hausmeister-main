import "../App.css";

const BookingSection = () => {
  return (
    <div className="container-chat" role="main">
      <h1 className="chat-heading">Instant messaging for effortless booking</h1>

      <div className="chat-container" aria-label="Chat conversation">
        <div className="message-group">
          <div className="message-time">9:41</div>
          <div className="message sender">
            <div className="sender-name">Maur Schneider</div>
            <div className="message-text">WAF 6/21 AM</div>
          </div>
        </div>

        <div className="message receiver">
          <div className="message-title">Ett eget donee ipsum</div>
          <div className="message-text">
            Ett eget donee ipsum a biberdum fermentum valt.
          </div>
        </div>

        <div className="message receiver">
          <div className="message-title">Ett eget donee ipsum a biben</div>
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>

        <div className="message receiver">
          <div className="message-title">Ett eget donee ipsum a biben</div>
        </div>
      </div>

      <section className="features-section" aria-label="Features list">
        <article className="feature-item">
          <div className="icon-circle" aria-hidden="true">
            <i className="fas fa-user-edit"></i>{" "}
          </div>
          <h2>Create your profile</h2>
          <p>
            Create your profile, set your availability and present your
            services.
          </p>
        </article>

        <article className="feature-item">
          <div className="icon-circle" aria-hidden="true">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2>Find jobs & be booked</h2>
          <p>
            Browse available orders near you and contact potential customers.
          </p>
        </article>

        <article className="feature-item">
          <div className="icon-circle" aria-hidden="true">
            <i className="fas fa-comments"></i>
          </div>
          <h2>Chat & Buchen</h2>
          <p>Clarify details directly via our app and get secure bookings.</p>
        </article>
      </section>
    </div>
  );
};

export default BookingSection;
