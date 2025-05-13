import { useState, useEffect } from "react";
import "../../App.css";

export default function App() {
  const craftsmen = [
    {
      income: "€ 1000 Additional Income",
      name: "Marcus Shmidt",
      skills: ["Heating", "Sanitary", "A/C"],
      location: "Ingolstadt",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
    {
      income: "€ 1200 Additional Income",
      name: "Anna Becker",
      skills: ["Electrical", "Plumbing", "Carpentry"],
      location: "Munich",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
    {
      income: "€ 900 Additional Income",
      name: "John Doe",
      skills: ["Masonry", "Roofing"],
      location: "Berlin",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
    {
      income: "€ 1000 Additional Income",
      name: "Marcus Shmidt",
      skills: ["Heating", "Sanitary", "A/C"],
      location: "Ingolstadt",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
    {
      income: "€ 1200 Additional Income",
      name: "Anna Becker",
      skills: ["Electrical", "Plumbing", "Carpentry"],
      location: "Munich",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
    {
      income: "€ 900 Additional Income",
      name: "John Doe",
      skills: ["Masonry", "Roofing"],
      location: "Berlin",
      imageUrl:
        "https://storage.googleapis.com/a1aa/image/91228063-3468-4765-c70d-8ec7316fd8b7.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === craftsmen.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [craftsmen.length, isAutoPlaying]);

  return (
    <div className="heading-craft">
      <h1>
        Craftsmen grow
        <br />
        faster with our app!
      </h1>

      <div className="carousel-container">
        <div className="carousel">
          <div
            className="card-container"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {craftsmen.map((craftsman, index) => (
              <div className="card-craftman" key={index}>
                <div className="label">{craftsman.income}</div>
                <img
                  className="image"
                  src={craftsman.imageUrl}
                  alt={`Image of ${craftsman.name}`}
                />
                <div className="card-content">
                  <p className="name">{craftsman.name}</p>
                  <div className="skills">
                    {craftsman.skills.map((skill, idx) => (
                      <span key={idx}>{skill}</span>
                    ))}
                  </div>
                  <button className="location-btn" type="button">
                    <i className="fas fa-map-marker-alt location-icon" />
                    <span>{craftsman.location}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="register-btn"
        type="button"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        Register now
      </button>
    </div>
  );
}
