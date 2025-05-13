import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/homepage/logo.png";

function AvatarsSection() {
  const navigate = useNavigate();

  const registerNow = () => {
    navigate("/RegisterNow");
  };
  return (
    <div className="container-customers">
      <h1 className="heading-customers">
        More customers.
        <br />
        . More orders.
        <br />. More <span className="underline-wrapper">sales</span>
      </h1>
      <div className="avatars">
        <img
          className="avatar"
          src="https://storage.googleapis.com/a1aa/image/3945642a-38b9-4bf4-b509-0f28de44338f.jpg"
          alt="Headset of a man wearing a yellow hat"
        />
        <img
          className="avatar"
          src="https://storage.googleapis.com/a1aa/image/0dc1b76f-6efb-4563-7b35-e78dc02ea7f4.jpg"
          alt="Headset of a smiling woman with long dark hair"
        />
        <img
          className="avatar"
          src="https://storage.googleapis.com/a1aa/image/8b8de8d8-31d1-44fc-fc6b-3738baebeb47.jpg"
          alt="Headset of a man with a beard and orange beanie"
        />
        <img
          className="avatar"
          src="https://storage.googleapis.com/a1aa/image/f2e4febb-7472-41de-2319-cce99af48c8f.jpg"
          alt="Headset of a woman with long blonde hair"
        />
        <div className="user-count">
          <i className="fas fa-user" aria-hidden="true"></i>
          <span>10 • 2K</span>
        </div>
      </div>
      <p className="description">
        Use the opportunity to make your services known, to receive more orders
        and to work flexibly. Register now and start directly!
      </p>
      <button className="register" onClick={registerNow}>
        Register now
      </button>
      <div className="logo-section">
        <img src={logo} alt="" />
        <span>My craftsman</span>
      </div>
      <div className="lorem-list">
        <span>Loremic</span>
        <span>Loremic</span>
        <span>Loremic</span>
        <div className="bottom-row">
          <span className="bottom-left">Loremic</span>
          <span className="bottom-right">Loremic</span>
        </div>
      </div>
      <div
        className="social-icons"
        role="navigation"
        aria-label="Social media links"
      >
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fa-brands fa-square-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-square-instagram"></i>{" "}
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>{" "}
        </a>
      </div>
      <div className="footer">
        <hr className="footer-divider" />
        <div className="copyright">
          Copyright © 2024 Mein Hausmaster
          <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
}

export default AvatarsSection;
