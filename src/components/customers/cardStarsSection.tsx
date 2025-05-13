import "../../App.css";

interface TestimonialProps {
  image: string;
  name: string;
  text: string;
  location: string;
  resultImage: string;
  resultImage1: string;
  resultImage2: string;
  resultAlt: string;
}

function Testimonial({
  image,
  name,
  location,
  text,
  resultImage,
  resultImage1,
  resultImage2,
  resultAlt,
}: TestimonialProps) {
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
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">
                ★
              </span>
            ))}
          </div>
          <p className="testimonial-text">{text}</p>
          <div className="result-image-container">
            <img src={resultImage} alt={resultAlt} className="result-image" />
            <img src={resultImage1} alt={resultAlt} className="result-image" />
            <img src={resultImage2} alt={resultAlt} className="result-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection1() {
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
            Real experiences,
            <br />
            real results
          </h1>
          <p className="section-description">
            Learn how our app makes repairs and improvements easier for people
            like you.
          </p>
        </div>

        <div className="testimonials-grid">
          <Testimonial
            image="https://randomuser.me/api/portraits/men/32.jpg"
            name="John Carter"
            location="Christian"
            text="The app made it easy to create a bag in a travel jewelry box and my bathroom cabinet, and they look fantastic!"
            resultImage="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage1="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage2="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultAlt="Wohnzimmer Renovierung"
          />
          <Testimonial
            image="https://randomuser.me/api/portraits/women/44.jpg"
            name="Lena Miller"
            location="Sarah"
            text="With this app, I was able to quickly and easily restore my TV. The service was professional and the process was efficient."
            resultImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage1="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage2="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultAlt="Badezimmer Renovierung"
          />
          <Testimonial
            image="https://randomuser.me/api/portraits/men/45.jpg"
            name="Maximilian Schmidt"
            location="Adlerstein"
            text="The app helped me find a meter. My living room now looks perfect!"
            resultImage="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage2="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            resultImage1="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            resultAlt="Fernsehreparatur"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection1;
