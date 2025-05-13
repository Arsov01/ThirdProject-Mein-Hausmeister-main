import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const ToggleSwitch2 = () => {
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
    <div className="toggle-container-wrapper">
      <h1>Find a craftsman!</h1>
      <div className="toggle-wrapper2">
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
    </div>
  );
};

export default ToggleSwitch2;
