import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../App.css";

interface LoggedInFooterProps {
  onLogout?: () => void;
}

const LoggedInFooter = ({ onLogout }: LoggedInFooterProps) => {
  const { user, logout, loading } = useAuth();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!user || loading) return null;

  const handleItemClick = (itemName: string) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      onLogout?.();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="bottom-nav">
      <div
        className={`nav-item ${activeItem === "ticket" ? "active" : ""}`}
        onClick={() => handleItemClick("ticket")}
      >
        <i className="fa-solid fa-ticket-simple nav-items2"></i>
        {activeItem === "ticket" && <span>Ticket</span>}{" "}
      </div>

      <div
        className={`nav-item ${activeItem === "map" ? "active" : ""}`}
        onClick={() => handleItemClick("map")}
      >
        <i className="fa-solid fa-map-location-dot nav-items2"></i>
        {activeItem === "map" && <span>Map</span>}
      </div>

      <div
        className={`nav-item ${activeItem === "home" ? "active" : ""}`}
        onClick={() => handleItemClick("home")}
      >
        <i className="fa-solid fa-house nav-items2"></i>
        {activeItem === "home" && <span>Home</span>}{" "}
      </div>

      <div
        className={`nav-item ${activeItem === "chat" ? "active" : ""}`}
        onClick={() => handleItemClick("chat")}
      >
        <i className="fa-solid fa-comment-dots nav-items2"></i>
        {activeItem === "chat" && <span>Chat</span>}{" "}
      </div>

      <div className="profile-item">
        <div
          className={`nav-item ${activeItem === "profile" ? "active" : ""}`}
          onClick={!isLoggingOut ? handleLogout : undefined} // Disable if logging out
        >
          <i className="fa-solid fa-user nav-items2"></i>
          {activeItem === "profile" && <span>Profile</span>}
        </div>
      </div>
    </nav>
  );
};

export default LoggedInFooter;
