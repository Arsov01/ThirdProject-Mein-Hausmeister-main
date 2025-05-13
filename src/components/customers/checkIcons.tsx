import { useState } from "react";
import "../../App.css";

import Group1 from "../assets/images/homepage/Group-2.png";
import Group2 from "../assets/images/homepage/Group-3.png";
import Group3 from "../assets/images/homepage/Group-4.png";
import Group4 from "../assets/images/homepage/Group-5.png";
import Group5 from "../assets/images/homepage/Group-6.png";
import Group6 from "../assets/images/homepage/Group-7.png";
import Group7 from "../assets/images/homepage/Group-8.png";
import Group8 from "../assets/images/homepage/Group-9.png";
import Group9 from "../assets/images/homepage/Group-10.png";
import Group10 from "../assets/images/homepage/Group-11.png";
import Group11 from "../assets/images/homepage/Group-12.png";
import Group12 from "../assets/images/homepage/Group-13.png";
import Group13 from "../assets/images/homepage/Group-14.png";
import Group14 from "../assets/images/homepage/Group-15.png";
import Group15 from "../assets/images/homepage/Group-16.png";
import Group16 from "../assets/images/homepage/Group-17.png";
import Group17 from "../assets/images/homepage/Group-18.png";
import Group18 from "../assets/images/homepage/Group-19.png";
import Group19 from "../assets/images/homepage/Group-20.png";
import Group20 from "../assets/images/homepage/Group-21.png";
import Group21 from "../assets/images/homepage/Group-22.png";
import Group22 from "../assets/images/homepage/Group-23.png";
import Group23 from "../assets/images/homepage/Group-24.png";
import Group24 from "../assets/images/homepage/Group-25.png";
import Group25 from "../assets/images/homepage/Group-26.png";
import Group26 from "../assets/images/homepage/Group-27.png";
import Group27 from "../assets/images/homepage/Group-28.png";
import Group28 from "../assets/images/homepage/Group-29.png";
import Group29 from "../assets/images/homepage/Group-30.png";
import Group30 from "../assets/images/homepage/Group-31.png";
import Group31 from "../assets/images/homepage/Group-32.png";
import Group32 from "../assets/images/homepage/Group-33.png";
import Group33 from "../assets/images/homepage/Group-34.png";
import Group34 from "../assets/images/homepage/Group-35.png";
import Group35 from "../assets/images/homepage/Group-36.png";
import Group36 from "../assets/images/homepage/Group-37.png";
import Group37 from "../assets/images/homepage/Group-38.png";
import Group38 from "../assets/images/homepage/Group-39.png";
import Group39 from "../assets/images/homepage/Group-40.png";
import Group40 from "../assets/images/homepage/Group-41.png";
import Group41 from "../assets/images/homepage/Group-42.png";
import Group42 from "../assets/images/homepage/Group-43.png";
import Group43 from "../assets/images/homepage/Group-44.png";
import Group44 from "../assets/images/homepage/Group-45.png";
import Group45 from "../assets/images/homepage/Group-46.png";
import Group46 from "../assets/images/homepage/Group-47.png";
import Group47 from "../assets/images/homepage/Group-48.png";
import Group48 from "../assets/images/homepage/Group-49.png";
import Group49 from "../assets/images/homepage/Group-50.png";

function FeaturesSection() {
  const services = [
    { name: "Home Repair", image: Group1 },
    { name: "Windows", image: Group2 },
    { name: "Painter", image: Group3 },
    { name: "Electrician", image: Group4 },
    { name: "A / C", image: Group5 },
    { name: "Cleaning", image: Group6 },
    { name: "Assembly", image: Group7 },
    { name: "Carpenter", image: Group8 },
    { name: "Construction", image: Group9 },
    { name: "Home Repair", image: Group10 },
    { name: "Windows", image: Group11 },
    { name: "Painter", image: Group12 },
    { name: "Electrician", image: Group13 },
    { name: "A / C", image: Group14 },
    { name: "Cleaning", image: Group15 },
    { name: "Assembly", image: Group16 },
    { name: "Carpenter", image: Group17 },
    { name: "Construction", image: Group18 },
    { name: "Carpenter", image: Group19 },
    { name: "Carpenter", image: Group20 },
    { name: "Cleaning", image: Group21 },
    { name: "Assembly", image: Group22 },
    { name: "Carpenter", image: Group23 },
    { name: "Construction", image: Group24 },
    { name: "Home Repair", image: Group25 },
    { name: "Windows", image: Group26 },
    { name: "Painter", image: Group27 },
    { name: "Electrician", image: Group28 },
    { name: "A / C", image: Group29 },
    { name: "Cleaning", image: Group30 },
    { name: "Assembly", image: Group31 },
    { name: "Carpenter", image: Group32 },
    { name: "Construction", image: Group33 },
    { name: "Carpenter", image: Group34 },
    { name: "Carpenter", image: Group35 },
    { name: "Electrician", image: Group36 },
    { name: "Carpenter", image: Group37 },
    { name: "Construction", image: Group38 },
    { name: "Home Repair", image: Group39 },
    { name: "Windows", image: Group40 },
    { name: "Painter", image: Group41 },
    { name: "Electrician", image: Group42 },
    { name: "A / C", image: Group43 },
    { name: "Cleaning", image: Group44 },
    { name: "Assembly", image: Group45 },
    { name: "Carpenter", image: Group46 },
    { name: "Construction", image: Group47 },
    { name: "Carpenter", image: Group48 },
    { name: "Carpenter", image: Group49 },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="features-container">
      <div className="benefits-section">
        <h2>Why people like us</h2>
        <ul className="benefits-list">
          <li>No hidden costs: only a transparent monthly fee.</li>
          <li>Targeted orders: Find jobs that fit your skills.</li>
          <li>
            Immediate bookings: Communicate directly with customers in chat.
          </li>
        </ul>
      </div>

      <div className="services-section">
        <h2>What you can offer</h2>
        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={`Illustration for ${service.name}`}
                className="service-image"
                width={64}
                height={64}
              />
              <span className="service-label">{service.name}</span>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? "active" : ""}`}
              onClick={() => setCurrentPage(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to page ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentPage(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
