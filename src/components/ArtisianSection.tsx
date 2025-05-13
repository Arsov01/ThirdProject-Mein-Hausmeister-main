import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ToggleSwitch = () => {
  const navigate = useNavigate();
  const [isArtisan, setIsArtisan] = useState(true);

  const handleToggle = () => {
    const newState = !isArtisan;
    setIsArtisan(newState);

    if (newState) {
      navigate("/artisans");
    } else {
      navigate("/customers");
    }
  };

  return (
    <div className="toggle-wrapper">
      <span className={`toggle-label ${isArtisan ? "active" : ""}`}>
        For Artisans
      </span>
      <div className="toggle-container" onClick={handleToggle}>
        <div className={`slider ${isArtisan ? "left" : "right"}`}></div>
      </div>
      <span className={`toggle-label ${!isArtisan ? "active" : ""}`}>
        For Customers
      </span>
    </div>
  );
};

export default ToggleSwitch;
