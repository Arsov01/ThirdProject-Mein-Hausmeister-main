import { useNavigate } from "react-router-dom";
import "../App.css";

const ArtisianButtons = () => {
  const navigate = useNavigate();

  const registerNow = () => {
    navigate("/RegisterNow");
  };
  return (
    <div className="button-section">
      <div className="button-row">
        <button className="btn btn-find" type="button">
          Find jobs
        </button>
        <button
          className="btn btn-register"
          type="button"
          onClick={registerNow}
        >
          Register now
        </button>
      </div>

      <div className="search-bar">
        <i className="fas fa-search search-icon" aria-hidden="true"></i>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="filter-button"
          type="button"
          aria-label="Filter options"
        >
          <i className="fas fa-sliders-h" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default ArtisianButtons;
