import "../App.css";

const Footers = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bookings</h3>
          <p>Manage your reservations and upcoming trips</p>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <p>FAQs</p>
          <p>Contact Support</p>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footers;
