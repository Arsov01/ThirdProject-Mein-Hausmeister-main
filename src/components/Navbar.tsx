import { useEffect, useState } from "react";
import "../App.css";
import logo from "../assets/images/homepage/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const homePage = () => {
    navigate("/");
  };
  const registerPage = () => {
    navigate("/RegisterPage");
  };
  const goToLoginPage = () => {
    // Renamed for clarity
    navigate("/login");
  };
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/filter");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo bg-dark">
          <img src={logo} alt="" onClick={homePage} />
        </div>

        <div className="desktop-menu"></div>

        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <div className="logo bg-dark">
          <img src={logo} alt="" />
        </div>
        <div className="menu-section">
          <button className="section-button" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        <div className="menu-section">
          <button className="section-button">Advertiser</button>
        </div>

        <div className="menu-section">
          <button className="section-button" onClick={goToLoginPage}>
            Login
          </button>
          <button className="section-button" onClick={registerPage}>
            Register
          </button>
        </div>

        {/* Seek Input with Category Dropdown */}
        <div className="menu-section">
          <input type="text" placeholder="Search" className="menu-input" />
          <div className="category-dropdown">
            <select className="menu-select">
              <option value="">Category</option>
              <option value="">example</option>
              <option value="">example2</option>
            </select>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dropdown-arrow"
            >
              <path d="M1 1L6 6L11 1" stroke="#FF5C00" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <button className="seek-button" onClick={handleSearchClick}>
          Search
        </button>
        <div className="menu-divider"></div>
      </div>
    </nav>
  );
};

export default Navbar;
