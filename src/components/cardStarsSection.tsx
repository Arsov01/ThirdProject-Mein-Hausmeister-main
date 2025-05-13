interface TestimonialProps {
  image: string;
  name: string;
  text: string;
  location: string;
}

function Testimonial({ image, name, location, text }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="testimonial-image"
          width="48"
          height="48"
        />
        <div className="testimonial-text-container">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-location">{location}</p>
          <div className="stars" aria-label="5 star rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="testimonial-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="quote-mark">
          <svg className="quote-icon" viewBox="0 0 24 24">
            <path
              d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
              transform="rotate(180 12 12)"
            />
          </svg>
        </div>

        <div className="section-header">
          <h1>
            <span className="highlight">Real</span> experiences,
            <br />
            real success
          </h1>
          <p className="section-description">
            Find out how craftsmen get more orders with our app, increase your
            income and expand your business .
          </p>
        </div>

        <div className="testimonials-grid">
          <Testimonial
            image="https://randomuser.me/api/portraits/men/32.jpg"
            name="Maximilian Schneider"
            location="Electrician, Dresden"
            text="Since I used this platform, I have doubled my orders!"
          />
          <Testimonial
            image="https://randomuser.me/api/portraits/men/44.jpg"
            name="John Meier"
            location="Tischler, Berlin"
            text="I can use my free time perfectly to get additional jobs."
          />
          <Testimonial
            image="https://randomuser.me/api/portraits/men/45.jpg"
            name="Peter Schmidt"
            location="Painter, Munich"
            text="Super easy handling and direct contact with customers!"
          />
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
