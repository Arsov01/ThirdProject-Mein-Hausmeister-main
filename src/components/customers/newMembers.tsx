import { useNavigate } from "react-router-dom";
import "../../App.css";

function NewMembers() {
  const navigate = useNavigate();

  const findHandyClick = () => {
    navigate("/FindHandy");
  };

  const members = [
    {
      name: "Peter Schmidt",
      profession: "Elektriker",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/fc2f5e96-49a4-4bda-dbe1-e0fdef3d6b3a.jpg",
      alt: "Elektriker Mann sitzt mit Helm und Werkzeug",
    },
    {
      name: "Hans Müller",
      profession: "Schlosser",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/2380d98d-eeae-428d-ec69-5af41cb717ff.jpg",
      alt: "Schlosser Mann am Eingang",
    },
    {
      name: "Jan",
      profession: "Schreiner",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/5f0f2e6d-7682-43c9-74f0-90d56d652752.jpg",
      alt: "Handwerker mit Werkzeug im Hintergrund",
    },
    {
      name: "Peter Schmidt",
      profession: "Elektriker",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/fc2f5e96-49a4-4bda-dbe1-e0fdef3d6b3a.jpg",
      alt: "Elektriker Mann sitzt mit Helm und Werkzeug",
    },
    {
      name: "Hans Müller",
      profession: "Schlosser",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/2380d98d-eeae-428d-ec69-5af41cb717ff.jpg",
      alt: "Schlosser Mann am Eingang",
    },
    {
      name: "Jan",
      profession: "Schreiner",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/5f0f2e6d-7682-43c9-74f0-90d56d652752.jpg",
      alt: "Handwerker mit Werkzeug im Hintergrund",
    },
    {
      name: "Peter Schmidt",
      profession: "Elektriker",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/fc2f5e96-49a4-4bda-dbe1-e0fdef3d6b3a.jpg",
      alt: "Elektriker Mann sitzt mit Helm und Werkzeug",
    },
    {
      name: "Hans Müller",
      profession: "Schlosser",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/2380d98d-eeae-428d-ec69-5af41cb717ff.jpg",
      alt: "Schlosser Mann am Eingang",
    },
    {
      name: "Jan",
      profession: "Schreiner",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/5f0f2e6d-7682-43c9-74f0-90d56d652752.jpg",
      alt: "Handwerker mit Werkzeug im Hintergrund",
    },
  ];

  return (
    <div className="new-members-section">
      <h2 className="section-title">
        Newly joined, ready to <em>help</em>!
      </h2>

      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img
              src={member.imgSrc}
              alt={member.alt}
              className="member-image"
              width="96"
              height="96"
            />
            <div className="member-name">
              {member.name}
              <i
                className="fas fa-check-circle check-icon"
                aria-hidden="true"
              ></i>
            </div>
            <div className="member-profession">{member.profession}</div>
          </div>
        ))}
      </div>

      <button className="find-button" onClick={findHandyClick}>
        Find a caretaker
      </button>
    </div>
  );
}
export default NewMembers;
